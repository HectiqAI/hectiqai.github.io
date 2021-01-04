import * as React from "react";
import ErrorPage from "./ErrorPage.react"


function Error404Page(props){
  let title = "You should not be here.",
      description = "This page does not exist";

  return (<ErrorPage title={title} description={description}/>)
}


export default Error404Page;