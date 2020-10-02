import React from "react";
import { Link } from "react-router-dom";

function truncate(str, length) {
    return str.length > length ? str.substring(0, length-3) + "..." : str;
}


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
  return (<div className="col-12">
            <Link className={`card lift lift-lg shadow-light-lg mb-7 ${colors.bg}`} to={`posts/${props.id}`}>
              {(props.frontImgUrl)?
                <img className="card-img-top mb-0 mt-0" src={ props.frontImgUrl } alt="..."/>
              : null} 
              <div className="card-body my-auto">
                <h6 className={`text-uppercase mb-1 ${colors.text}`}>{props.date}</h6>
                <h3 className={`mb-0 mb-2 ${colors.title}`}>{ props.title }</h3>
                <p className={`mb-0 ${colors.text}`}> { truncate(props.excerpt || props.summary, 100) }</p>
              </div>
            </Link>
          </div>);
}

export default MainCard;