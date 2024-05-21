import React from 'react'

const Footer = () => {
  return (
    <footer className="text-center">
      <div className="footer-above">
        <div className="container">
          <div className="row">
            <div className="footer-col col-md-4"></div>
            <div className="footer-col col-md-4">
              <h3>Around the Web</h3>
              <ul className="list-inline">
                <li>
                  <a
                    href="https://www.linkedin.com/in/jeremybadger"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/jbadge"
                    className="btn-social btn-outline"
                  >
                    <i className="fa fa-fw fa-github"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="footer-below">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              Thank you for checking out my webpage!
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
