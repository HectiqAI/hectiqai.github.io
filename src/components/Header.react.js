import React from 'react';


function Header(props){
  return (<section class="pt-12 pt-md-14 pb-12 pb-md-15 bg-gray-900" style={{marginTop:-83}}>
            <div class="container">
              <div class="row justify-content-center">
                <div class="col-12 col-md-10 col-lg-7 text-center">
                  <h1 class="display-2 font-weight-bold text-white">
                    Blog posts
                  </h1>
                  <p class="lead text-white-75 mb-4">
                    Because we have something to say. 
                  </p>
                </div>
              </div>
            </div>
          </section>)
}

export default Header;
