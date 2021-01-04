import React from "react";
import PropTypes from 'prop-types';
import Chart from "react-apexcharts";

function iOSCharts(props){

  var series = [];
  series.push({
    name: "EfficientNet",
    data: [[5.3,77.3], [7.8,79.2], [9.2,80.3], [12,81.7], [19,83.0], [30,83.7], [43,84.2], [66,84.4]]
  })

  let options = {
    chart: {
      id: "efficient-net-scaling",
      toolbar: {
        show: false
      },
      zoom: {
        enabled: false
      }
      
    },
    dataLabels: {
      enabled: true,
      formatter: function(val, opt, i) {
          return "B"+opt.dataPointIndex;
      },
    },
    xaxis: {
      title: {
        text:"Number of parameters (Millions)"
      }
    },
    yaxis: {
      title: {
        text:"Imagenet Top-1 Accuracy (%)"
      }
    },
    grid: {
      borderColor: '#e7e7e7',
      xaxis: {
          lines: {
              show: true
          }
      },
    },
    tooltip: {
      enabled: false
    }
  };


  return (<Chart
             options={options}
              series={series}
              type="line"
              height={props.height}
          />)
}


iOSCharts.propTypes = {
  height: PropTypes.number
};

iOSCharts.defaultProps = {
  height: 300
};

export default iOSCharts;