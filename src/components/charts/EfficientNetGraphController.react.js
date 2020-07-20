import React from "react";
import PropTypes from 'prop-types';

import StepRangeSlider from 'react-step-range-slider'
import EfficientNetGraph from "./EfficientNetGraph.react";

class EfficientNetGraphController extends React.Component {

    constructor(props){
      super(props)
      this.state = {
        width: 4,
        depth: 3,
        resolution: 5
      }
    }

    render() { 

      const widthRange = [...Array(6).keys()].map((d=>({value:d, step:1})));
      const depthRange = [...Array(6).keys()].map((d=>({value:d, step:1})));
      const resRange = [...Array(6).keys()].map((d=>({value:d, step:1})));
      console.log(this.state)
      return (<div class="row">
                <div class="col-md-4"> 
                  <h6 class="font-weight-bold text-uppercase text-gray-700 mt-3">
                    Width
                  </h6>
                  <StepRangeSlider 
                    value={this.state.width} 
                    range={widthRange} 
                    onChange={value =>this.setState({width:value})}
                  />
                  <h6 class="font-weight-bold text-uppercase text-gray-700 mt-3">
                    Depth
                  </h6>
                  <StepRangeSlider 
                    value={this.state.depth} 
                    range={depthRange} 
                    onChange={value =>this.setState({depth:value})}
                  />
                  <h6 class="font-weight-bold text-uppercase text-gray-700 mt-3">
                    Resolution
                  </h6>
                  <StepRangeSlider 
                    value={this.state.resolution} 
                    range={resRange} 
                    onChange={value =>this.setState({resolution:value})}
                  />
                </div>
                <div class="col-md-8 my-auto"> 
                  <h6 class="font-weight-bold text-uppercase text-gray-700 mt-3">
                    Model
                  </h6>
                  <EfficientNetGraph {...this.state} height={130}/>
                   <p class="font-size-lg text-muted mb-6">
                    Boxes are the tensor used. 
                  </p>
                </div>
              </div>)
    }
}



EfficientNetGraphController.propTypes = {

};

EfficientNetGraphController.defaultProps = {

};

export default EfficientNetGraphController;