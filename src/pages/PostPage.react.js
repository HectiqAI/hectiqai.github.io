import * as React from "react";
import {withRouter,  Redirect } from "react-router-dom";
import i18n from 'i18next';

import data from "../posts/posts.react";
import Page from "../components/page";
import SubHero from "../components/subhero";
import { Footer} from "../components";
import { ConcaveCurve, RightCircle  } from "../components/curves";


const getLanguage = () => {
  return i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en';
};


class PostPage extends React.Component {
  constructor(props){
    super(props)
    this.postId = this.props.match.params.postid
    this.data  = data.find(o=>o.id === this.postId)
    i18n.changeLanguage(props.match.params.lang)
    window.scrollTo(0,0)
  }
  render() {
    if ((this.data==null)||(this.data.content==null)){
      return (<Redirect to="/404"/>)
    }
    
    const metadata = {
      title: this.data.title,
      twitter:  process.env.REACT_APP_TWITTER,
      description: this.data.summary,
      siteURL: process.env.REACT_APP_MAIN_URL
    }

    var content = {}
    if (getLanguage()==="fr"){
      content = {
        content: this.data.contentFR || this.data.content,
        title: this.data.titleFR || this.data.title,
        date: this.data.dateFR || this.data.date,
        authors: this.data.authorsFR || this.data.authors,
        summary: this.data.summaryFR || this.data.summary,
        credits: this.data.creditsFR || this.data.credits,
        moreInfo: this.data.moreInfoFR || this.data.moreInfo,
        note: this.data.noteFR || this.data.note,
        by: this.data.byFR || this.data.by,
        learnMoreWord: "En apprendre plus",
        noteWord: "Note",
        creditWord: "Crédits",
        byWord: "Par ",
        notTranslated: (this.data.contentFR? "": "Cet article est disponible seulement en anglais.")
      }
    }else {
      content = {...this.data,
       byWord: "By ", 
      noteWord: "Note",
       creditWord: "Credits",       
       learnMoreWord: "Learn more"}
    }
    return (<Page withGrad={this.data.frontWideImg} dark={this.data.lightHeader} metadata={metadata} location={this.props.location}>  
              <div className={`bg-gray-200 overflow-hidden position-relative ${this.data.lightHeader? "text-light ": ""}`}>
                {this.data.frontWideImg?
                  <section style={{backgroundImage: `url(${this.data.frontWideImg})`, backgroundPosition: "center", backgroundSize: "cover", backgroundRepeat: "no-repeat"}} className="py-15"  >
                  </section> 
                  :<section >
                    <SubHero/>   
                    <RightCircle/> 
                  </section> }
              </div>
              <ConcaveCurve color="text-white"/>

            <div className="text-dark">
              {/*Content*/}
              <section className="pt-8 pt-md-11 pb-0">
                <div className="container">
                  <div className="row justify-content-center">
                    <div className="col-12 col-md-12 col-lg-10 col-xl-9">
                      <p className="text-primary"><b>{content.notTranslated}</b></p>

                      <h6 className="text-uppercase mb-1 text-muted">{content.date}</h6>
                      <h1 className="display-4 font-weight-bold">
                        {content.title}
                      </h1>
                      {(content.by)? <p className="text-secondary  ">{content.byWord} {content.by}</p> : null}
                      <p className="lead mb-7 text-muted" dangerouslySetInnerHTML={{__html: content.summary}}>
                      </p>
                      <hr className="hr-md mb-7"/>
                    </div>
                  </div>
                </div>
              </section>
              {/*Content*/}
              <section className="font-size-lg">
               {content.content()}
              </section>

              {/*Post footer*/}
              <section className="pt-2 pt-md-11 pb-8">
                <div className="container ">
                  {((content.authors!=null)||(content.credits!=null)||(content.moreInfo!=null))? <hr className="border-gray-300"/> : null}
                  <div className="list-group list-group-flush border-0 mb-1 mr-lg-12 ml-md-4 ">
                    {(content.authors)? 
                      <div className="row">
                        <div className="col-sm-4 col-md-4 col-lg-2">
                          <p className="text-muted">
                          {this.props.match.params.lang==="en"? ((content.authors.length>1)? "Authors": "Author"): ((content.authors.length>1)? "Auteurs": "Auteur")}
                          </p>
                        </div>
                        <div className="col-sm-8 col-md-8 col-lg-10">
                          <p className="font-size-sm text-muted ">
                            {content.authors.join(', ')}
                          </p>
                        </div>
                      </div>: null}

                      {(content.credits)? 
                        <div className="row border-top pt-4 pb-4">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <p className="text-muted ">
                              {content.creditWord}
                            </p>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-10">
                            <p className="font-size-sm text-muted mb-0" dangerouslySetInnerHTML={{__html: content.credits}}>
                            </p>
                          </div>
                        </div>: null}

                      {(content.moreInfo)? 
                        <div className="row border-top pt-4 pb-4">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <p className="text-muted ">
                              {content.learnMoreWord}
                            </p>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-10">
                            <p className="font-size-sm text-muted mb-0" dangerouslySetInnerHTML={{__html: content.moreInfo}}>
                            </p>
                          </div>
                        </div>: null}
                      {(content.note)? 
                        <div className="row border-top pt-4 pb-4">
                          <div className="col-sm-4 col-md-4 col-lg-2">
                            <p className="text-muted ">
                              {content.noteWord}
                            </p>
                          </div>
                          <div className="col-sm-8 col-md-8 col-lg-10">
                            <p className="font-size-sm text-muted mb-0" dangerouslySetInnerHTML={{__html: content.note}}>
                            </p>
                          </div>
                        </div>: null}
                  </div>
                </div>
              </section>

              <Footer/>

            </div>
            </Page>)
  }
}

export default withRouter(PostPage);  