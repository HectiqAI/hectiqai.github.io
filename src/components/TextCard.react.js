import React from "react";

function truncate(str, length) {
    return str.length > length ? str.substring(0, length-3) + "..." : str;
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

  var Container = "div";
  if (props.content){
    Container = "a";
  }

  return (<div class="col-12 col-sm-4 col-md-4 d-flex">
            <Container class={`card lift lift-lg shadow-light-lg mb-7 ${colors.bg}`} href={`/posts/${props.id}`}>
              {(props.frontImgUrl)?
                <img class="card-img-top mb-0 mt-0" src={ props.frontImgUrl } alt="..."/>
              : null} 
              <div class="card-body my-auto">
                <h6 class={`text-uppercase mb-1 ${colors.text}`}>{props.date}</h6>
                <h4 class={`mb-0 mb-2 ${colors.title}`}>{ props.title }</h4>
                <p class={`mb-0 ${colors.text}`}> { truncate(props.excerpt, 100) }</p>
              </div>
            </Container>
          </div>);
}

export default TextCard;