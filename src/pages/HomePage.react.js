import * as React from "react";

import data from "../posts/posts.react";

import {NavBar, Header, TextCard, MainCard, RowPost, Footer} from "../components";

class HomePage extends React.Component {

  render() {
    const result = data.filter(o => !o.hide);
    return (<div>
              <NavBar boxes dark/>
              <Header/>
              <section class="py-8 py-md-11 mt-n10 mt-md-n14">
                <div class="container">
                  <div class="row" >
                    {(result.slice(0,1).map(({date, title, excerpt, ...props})=>{
                      return (<MainCard date={date} title={title} excerpt={excerpt} {...props} />)
                    }))}
                    {(result.slice(1,4).map(({date, title, excerpt, ...props}, i)=>{
                      return (<TextCard date={date} title={title} excerpt={excerpt} {...props} />)
                    }))}
                  </div>

                  <div class="list-group list-group-flush mt-6">  
                    {(result.slice(4).map(({date, title, excerpt, ...props}, i)=>{
                      return (<RowPost  date={date} title={title} excerpt={excerpt} {...props} />)
                    }))}
                  </div>

                </div>
              </section>

              

              <Footer/>
            </div>)
  }
}

export default HomePage;