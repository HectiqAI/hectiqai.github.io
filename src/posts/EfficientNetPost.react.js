import React from "react";

import {EfficientNetScalingGraph, EfficientNetGraphController} from "../components/charts"



function EfficientNetPost(props){
  return (<div>
              <div className="container-fluid container-xs">
                <EfficientNetScalingGraph height={450}/>
              </div>
              <div className="container-fluid bg-light p-8">
                <div className="container-fluid container-lg">
                  <EfficientNetGraphController/>
                </div>
              </div>
          </div>)
}


export default EfficientNetPost;