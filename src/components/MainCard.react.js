import React from "react";
import { Link } from "react-router-dom";


function MainCard(props){
  var colors = {
    text: "text-muted",
    bg: "bg-white",
    title: "text-dark"

  }
  if (props.dark){
    colors = {
      text: "text-white-50",
      bg: "bg-secondary",
      title: "text-light"
    }
  }
  return (<div class="col-12">
            <Link class={`card lift lift-lg shadow-light-lg mb-7 ${colors.bg}`} to={`/posts/${props.id}`}>
              {(props.frontImgUrl)?
                <img class="card-img-top mb-0 mt-0" src={ props.frontImgUrl } alt="..."/>
              : null} 
              <div class="card-body my-auto">
                <h6 class={`text-uppercase mb-1 ${colors.text}`}>{props.date}</h6>
                <h4 class={`mb-0 mb-2 ${colors.title}`}>{ props.title }</h4>
              </div>
            </Link>
          </div>);
}

export default MainCard;