import React from "react";
import MetaTags from 'react-meta-tags';


export default function Meta({title, ...props}){
  let url = `https://blog.hectiq.ai/posts/${props.id}`

  return (<MetaTags>
            <title>{title}</title>
            <meta property="og:site_name" content="Hectiq.AI Blog"/>
            <meta property="og:type" content="article"/>
            <meta property="og:title" content={title}/>
            <meta property="og:image" content={props.metaImage}/>
            <meta property="og:url" content={url}/>
            <meta name="twitter:card" content={props.twitterCard}/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={props.twitterDescription}/>
            <meta name="twitter:url" content={url}/>
            <meta name="twitter:site" content="@HectiqAI"/>
            <meta property="og:image:width" content={props.metaImageWidth}/>
            <meta property="og:image:height" content={props.metaImageHeight}/>
          </MetaTags>)
}