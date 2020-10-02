import React from "react";


export default function Footer(props){
  return (
        <footer className="py-0 py-md-0 pb-10 {{ includes.classList }}">
          <div className="container border-top border-gray-300 pt-8">
            <div className="row  mb-4">
              <div className="col-6">
                <p className="text-gray-700 mb-2">
                  A blog by Hectiq.ai
                </p>
              </div>

              <div className="col-6 ml-auto">
                <ul className="list-unstyled list-inline list-social mb-6 mb-md-0 text-right">
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="https://twitter.com/HectiqAI" className="text-decoration-none">
                      <img src="/assets/img/icons/social/twitter.svg" className="list-social-icon" alt="..."/>
                    </a>
                  </li>
                  <li className="list-inline-item list-social-item mr-3">
                    <a href="https://www.linkedin.com/company/10141301/" className="text-decoration-none">
                      <img src="/assets/img/icons/social/linkedin.svg" className="list-social-icon" alt="..."/>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </footer>)
}