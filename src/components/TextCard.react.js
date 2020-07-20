import React from "react";
import { Link } from "react-router-dom";


function truncate(str, length) {
    return str.length > length ? str.substring(0, length-3) + "..." : str;
}

function LinkCard(props){
  return (<Link class={`card lift lift-lg shadow-light-lg mb-7 ${props.bg}`} to={props.to}>
            {props.children}
          </Link>)
}
function DivCard(props){
  return (<div class={`card lift lift-lg shadow-light-lg mb-7 ${props.bg}`}>
            {props.children}
          </div>)
}


function TextCard(props){
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

  var Container = DivCard;
  var containerProps = {bg:colors.bg}
  if (props.content){
    Container = LinkCard; 
    containerProps = {bg:colors.bg, to:`/posts/${props.id}`}

  }


  return (<div class="col-12 col-sm-4 col-md-4 d-flex">
            <Container {...containerProps} >
              {(props.frontImgUrl)?
                <img class="card-img-top mb-0 mt-0" src={ props.frontImgUrl } alt="..."/>
              : null} 
              <div class="card-body my-auto">
                <h6 class={`text-uppercase mb-1 ${colors.text}`}>{props.date}</h6>
                <h4 class={`mb-0 mb-2 ${colors.title}`}>{ props.title }</h4>
                <p class={`mb-0 ${colors.text}`}> { truncate(props.excerpt || props.summary , 100) }</p>
              </div>
            </Container>
          </div>);
}

export default TextCard;