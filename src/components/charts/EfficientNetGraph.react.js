import React from "react";
import PropTypes from 'prop-types';

import * as d3 from "d3";

class EfficientNetGraph extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        width: props.width,
        depth: props.depth,
        resolution: props.resolution,
      }
    }
    componentDidUpdate(prevProps) {
      // Typical usage (don't forget to compare props):
      if (this.props.width !== prevProps.width) {
        this.setState({width: this.props.width})
      }
      if (this.props.depth !== prevProps.depth) {
        this.setState({depth: this.props.depth})
      }
      if (this.props.resolution !== prevProps.resolution) {
        this.setState({resolution: this.props.resolution})
      }
      this.drawChart()
    }
    componentDidMount() {
      const svgCanvas = d3.select(this.refs.efficientnetgraph)
          .append('svg')
          .attr('width', "100%")
          .attr('height', this.props.height);

      for (var i = 0; i < this.props.maxDepth; i++) {
        svgCanvas.append(`g`).attr("id", `d3-g${i}`);
        svgCanvas.append(`g`).attr("id", `d3-link-g${i}`);
      }
        this.drawChart()
    }
    drawChart() {

      const svgCanvas = d3.select(this.refs.efficientnetgraph).selectAll("svg")
      let colors = ['#c6dbef','#9ecae1','#6baed6','#4292c6','#2171b5','#08519c','#08306b'];
      for (var i = 0; i < this.props.maxDepth; i++) {

        const resolutionScale = (this.props.resolution+4)/10;

        let nodes = [{width: (i===0)? 8: 8+i*1.2*this.state.width,
                      x: `${i*100/(this.state.depth+2)}%`,
                      height: (i===0)? (this.props.height*resolutionScale): this.props.height*resolutionScale-i*this.props.height*resolutionScale/(this.state.depth+2)}]


        svgCanvas.select(`#d3-link-g${i}`)
        .append("defs")
        .append('marker')
        .data(nodes)
        .join('defs')
        .attr('id', `arrow-${i}`)
        .attr('viewBox', [0, 0, 20, 20])
        .attr('refX', 0)
        .attr('refY', 10)
        .attr('markerWidth', 10)
        .attr('markerHeight', 10)
        .attr('orient', 'auto-start-reverse')
        .append('path')
        .attr('d', d3.line()([[0, 0], [0, 20], [20, 10]]))
        .style('fill', '#aaa')
        .attr('stroke', '#aaa');

        svgCanvas.select(`#d3-link-g${i}`)
        .selectAll("line")
        .data(nodes)
        .join("line")
          .style("stroke", "#aaa")
          .attr('marker-end', `url(#arrow-${i})`)
          .attr("x1", `${(i+0.4)*100/(this.state.depth+2)}%`)
          .attr("y1", this.props.height/2)
          .attr("x2", `${(i+0.7)*100/(this.state.depth+2)}%`)
          .attr("y2", this.props.height/2);


        svgCanvas.select(`#d3-g${i}`)
        .selectAll("rect")
        .data(nodes)
        .join("rect")
          .attr("width", d=>d.width)
          .attr("height", d=>d.height)
          .style("fill", colors[i])
          .attr("x", d=>d.x )
          .attr("y", d=> this.props.height/2-d.height/2,);

       
      }
      // Add nodes
    }
    render() { return <div ref="efficientnetgraph"></div> }
}



EfficientNetGraph.propTypes = {
  height: PropTypes.number,
  depth: PropTypes.number,
  maxDepth: PropTypes.number,
  width: PropTypes.number,
  resolution: PropTypes.number,

};

EfficientNetGraph.defaultProps = {
  height: 100,
  depth: 4,
  maxDepth: 10,
  width: 10,
  resolution: 4,
};

export default EfficientNetGraph;