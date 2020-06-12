import * as React from "react";
import { Redirect } from "react-router-dom";


import data from "../posts/posts.react";
import metaTags from "../posts/metatags.react";

import {NavBar, Footer, Meta} from "../components";

class PostPage extends React.Component {
  constructor(props){
    super(props)
    this.postId = this.props.match.params.postid
    this.data  = data.find(o=>o.id === this.postId)
  }
  render() {
    if ((this.data==null)||(this.data.content==null)||(this.data.hide)){
      return (<Redirect to="/404"/>)
    }
    return (<div>
              <Meta title={this.data.title} {...metaTags[this.data.id]}/>

              <NavBar boxes/>

              {(this.data.frontWideImg)? 
                <section data-jarallax data-speed=".8" class="py-12 py-md-15 py-sm-0 bg-cover jarallax" style={{backgroundImage: `url(${this.data.frontWideImg})`}}></section>
                : null}

              {/*Content*/}
              <section class="pt-8 pt-md-11 pb-0">
                <div class="container">
                  <div class="row justify-content-center">
                    <div class="col-12 col-md-12 col-lg-10 col-xl-9">
                      <h6 class="text-uppercase mb-1 text-muted">{this.data.date}</h6>
                      <h1 class="display-4 font-weight-bold">
                        { this.data.title }
                      </h1>
                      {(this.data.by)? <p class="text-secondary  ">By {this.data.by}</p> : null}
                      <p class="lead mb-7 text-muted" dangerouslySetInnerHTML={{__html: this.data.summary}}>
                      </p>
                      <hr class="hr-md mb-7"/>
                    </div>
                  </div>
                </div>
              </section>
              {this.data.content()}

              {/*Post footer*/}
              <section class="pt-2 pt-md-11 pb-8">
                <div class="container ">
                  {((this.data.authors!=null)||(this.data.credits!=null)||(this.data.moreInfo!=null))? <hr class="border-gray-300"/> : null}
                  <div class="list-group list-group-flush border-0 mb-1 mr-lg-12 ml-md-4 ">
                    {(this.data.authors)? 
                      <div class="row">
                        <div class="col-sm-4 col-md-4 col-lg-2">
                          <p class="text-muted">
                            {(this.data.authors.length>1)? "Authors": "Author"}
                          </p>
                        </div>
                        <div class="col-sm-8 col-md-8 col-lg-10">
                          <p class="font-size-sm text-muted ">
                            {this.data.authors.join(', ')}
                          </p>
                        </div>
                      </div>: null}

                      {(this.data.credits)? 
                        <div class="row border-top pt-4 pb-4">
                          <div class="col-sm-4 col-md-4 col-lg-2">
                            <p class="text-muted ">
                              Credits
                            </p>
                          </div>
                          <div class="col-sm-8 col-md-8 col-lg-10">
                            <p class="font-size-sm text-muted mb-0" dangerouslySetInnerHTML={{__html: this.data.credits}}>
                            </p>
                          </div>
                        </div>: null}

                      {(this.data.moreInfo)? 
                        <div class="row border-top pt-4 pb-4">
                          <div class="col-sm-4 col-md-4 col-lg-2">
                            <p class="text-muted ">
                              Learn more
                            </p>
                          </div>
                          <div class="col-sm-8 col-md-8 col-lg-10">
                            <p class="font-size-sm text-muted mb-0" dangerouslySetInnerHTML={{__html: this.data.moreInfo}}>
                            </p>
                          </div>
                        </div>: null}
                  </div>
                </div>
              </section>

              <Footer/>

            </div>)
  }
}

export default PostPage;