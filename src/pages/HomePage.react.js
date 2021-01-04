import React from "react";
import {withRouter, Redirect} from "react-router-dom";
import i18n from 'i18next';

import data from "../posts/posts.react";

import { TextCard, MainCard, RowPost, Footer} from "../components";
import Page from "../components/page";
import SubHero from "../components/subhero";
import {ConcaveCurve, RightCircle, CircleLg  } from "../components/curves";

const getLanguage = () => {
  return i18n.language ||
    (typeof window !== 'undefined' && window.localStorage.i18nextLng) ||
    'en';
};

function HomePage(props){

  const result = data.filter(o => !o.hide);

  const metadata = {
      title: "Hectiq Ai Blog",
      twitter:  process.env.REACT_APP_TWITTER,
      description: "",
      siteURL: process.env.REACT_APP_MAIN_URL
  }

  if (!["en", "fr"].includes(props.match.params.lang)){
    return <Redirect to="/en"/>
  }
  i18n.changeLanguage(props.match.params.lang)

  return (<Page metadata={metadata} location={props.location}>  
            <div className="bg-gray-200 overflow-hidden text-dark position-relative">
            <section>
              <SubHero title={"Blog"}/>   
              <RightCircle/> 
              <CircleLg lg speed={10} startOpacity={0.2} endOpacity={0.01} radius={50} cx={250} cy={100} grad={{x1: "0", y1: "100", x2:"300", y2: "200"}}/>  
              <CircleLg lg speed={-60} startOpacity={0.4} endOpacity={0.01} radius={30} cx={120} cy={250} grad={{x1: "120", y1: "100", x2:"200", y2: "200"}}/>  

              <CircleLg md speed={20} startOpacity={0.3} endOpacity={0.01} radius={50} cx={250} cy={120} grad={{x1: "0", y1: "100", x2:"300", y2: "200"}}/>  
              <CircleLg md speed={-20} startOpacity={0.4} endOpacity={0.01} radius={20} cx={60} cy={120} grad={{x1: "0", y1: "0", x2:"100", y2: "100"}}/>  

              <CircleLg sm speed={20} startOpacity={0.3} endOpacity={0.01} radius={80} cx={250} cy={120} grad={{x1: "0", y1: "100", x2:"300", y2: "200"}}/>  
              <CircleLg xs speed={50} startOpacity={0.3} endOpacity={0.01} radius={60} cx={150} cy={320} grad={{x1: "0", y1: "100", x2:"300", y2: "200"}}/>  
            </section> 
          </div>
          <ConcaveCurve color="text-white"/>
          <div>
            <section className="py-8 py-md-10 mt-n12">
              <div className="container">
                <div className="row" >
                  {(result.slice(0,1).map(({date, dateFR, title, titleFR, summaryFR, excerpt, excerptFR, ...props}, key)=>{

                    return (<MainCard key={key} 
                                date={getLanguage()==="fr"? dateFR|| date: date} 
                                title={getLanguage()==="fr"? titleFR||title: title} 
                                excerpt={getLanguage()==="fr"? excerptFR|| summaryFR || excerpt: excerpt} {...props} />)
                  }))}
                  {(result.slice(1,4).map(({date, dateFR, title, titleFR, summaryFR, excerpt, excerptFR, ...props}, key)=>{
                    return (<TextCard key={key} 
                      date={getLanguage()==="fr"? dateFR|| date: date} 
                      title={getLanguage()==="fr"? titleFR||title: title} 
                      excerpt={getLanguage()==="fr"? excerptFR || summaryFR || excerpt: excerpt} {...props} />)
                  }))}
                </div>

                <div className="list-group list-group-flush mt-6">  
                  {(result.slice(4).map(({date, dateFR, title, titleFR, summaryFR, excerpt, excerptFR, ...props}, key)=>{
                    return (<RowPost key={key} date={getLanguage()==="fr"? dateFR|| date: date} 
                      title={getLanguage()==="fr"? titleFR||title: title}                            
                        excerpt={getLanguage()==="fr"? excerptFR || summaryFR || excerpt: excerpt} {...props} />)
                  }))}
                </div>

              </div>
            </section>

            

            <Footer/>
          </div>
        </Page>)
  
}

export default withRouter(HomePage);