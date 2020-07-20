import React from "react";


export default function Footer(props){
  return (
        <footer class="py-0 py-md-0 pb-10 {{ includes.classList }}">
          <div class="container border-top border-gray-300 pt-8">
            <div class="row  mb-4">
              <div class="col-6">
                <p class="text-gray-700 mb-2">
                  A blog by Hectiq.ai
                </p>
              </div>

              <div class="col-6 ml-auto">
                <ul class="list-unstyled list-inline list-social mb-6 mb-md-0 text-right">
                  <li class="list-inline-item list-social-item mr-3">
                    <a href="https://twitter.com/HectiqAI" class="text-decoration-none">
                      <img src="/assets/img/icons/social/twitter.svg" class="list-social-icon" alt="..."/>
                    </a>
                  </li>
                  <li class="list-inline-item list-social-item mr-3">
                    <a href="https://www.linkedin.com/company/10141301/" class="text-decoration-none">
                      <img src="/assets/img/icons/social/linkedin.svg" class="list-social-icon" alt="..."/>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </footer>)
}