import * as React from "react";
import PropTypes from 'prop-types';

class ErrorPage extends React.Component {

  render() {
    return (<div class="container d-flex flex-column">
              <div class="row align-items-center justify-content-center no-gutters min-vh-100">
                <div class="col-12 col-md-5 col-lg-4 py-8 py-md-11">
                  
                  <h1 class="display-3 font-weight-bold text-center">
                    {this.props.title}
                  </h1>

                  <p class="mb-5 text-center text-muted">
                    {this.props.description}
                  </p>

                  <div class="text-center">
                    <a class="btn btn-primary" href="/">
                      Back to safety
                    </a>
                  </div>

                </div>
              </div>
            </div>)
  }
}

ErrorPage.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
}


export default ErrorPage;