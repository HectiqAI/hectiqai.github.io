import React from "react";


function truncate(str, length) {
    return str.length > length ? str.substring(0, length-3) + "..." : str;
}


function RowPost(props){
  var colors = {
    text: "text-muted",
    bg: "bg-white",
    title: "text-dark"

  }

  var Container = "div";
  if (props.content){
    Container = "a";
  }


  return (<div class="list-group-item d-flex align-items-center">
          <div class="mr-auto">
             <h6 class="text-uppercase mb-1 text-muted">{ props.header }</h6>
              <Container href={`/posts/${props.id}`}><h4 class="mb-0">{ props.title }</h4></Container>
              <p class={`mb-0 ${colors.text}`}> { truncate(props.excerpt, 120) }</p>
          </div>
          <div class="badge text-wrap ml-10 text-right">
            <p class="text-uppercase text-muted">{ props.date }</p>
          </div>
        </div>);
}

export default RowPost;