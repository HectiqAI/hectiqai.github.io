import React from 'react';
import { Link } from "react-router-dom";

function NavBar(props){
  return (<nav class={`navbar navbar-expand-lg ${(props.dark)? "navbar-dark": "navbar-light" }`}>
            <div class={(props.boxes)? "container": "container-fuild"}>
              <Link class="navbar-brand" to="/">
                <img src="/assets/img/brand.png" class="navbar-brand-img" alt="..."/>
              </Link>

              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>

              <div class="collapse navbar-collapse" id="navbarCollapse">

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
                  <i class="fe fe-x"></i>
                </button>

                <a class="navbar-btn btn btn-sm btn-secondary lift ml-auto" href="https://www.hectiq.ai/" data-toggle="smooth-scroll" data-offset="0">
                  Contact
                </a> 
              </div>
            </div>
          </nav>)
}

export default NavBar;