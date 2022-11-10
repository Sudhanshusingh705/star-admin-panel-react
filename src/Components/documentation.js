import React from 'react'
import { Link } from 'react-router-dom';

const documentation = () => {
  return (
    <div>
     
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Star Admin2 Dashboard</title>
        {/* plugins:css */}
        <link rel="stylesheet" to="../../vendors/feather/feather.css" />
        <link
          rel="stylesheet"
          to="../../vendors/mdi/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          to="../../vendors/ti-icons/css/themify-icons.css"
        />
        <link rel="stylesheet" to="../../vendors/typicons/typicons.css" />
        <link
          rel="stylesheet"
          to="../../vendors/simple-line-icons/css/simple-line-icons.css"
        />
        <link
          rel="stylesheet"
          to="../../vendors/css/vendor.bundle.base.css"
        />
        {/* endinject */}
        {/* plugin css for this page */}
        <link
          rel="stylesheet"
          to="../template/vendors/codemirror/codemirror.css"
        />
        <link
          rel="stylesheet"
          to="../template/vendors/codemirror/ambiance.css"
        />
        <link
          rel="stylesheet"
          to="../template/vendors/pwstabs/jquery.pwstabs.min.css"
        />
        {/* End plugin css for this page */}
        {/* inject:css */}
        <link
          rel="stylesheet"
          to="../../css/vertical-layout-light/style.css"
        />
        {/* endinject */}
        <link rel="shortcut icon" to="../../../../images/favicon.png" />
        <div className=" container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="main-panel w-100  documentation">
              <div className="content-wrapper">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-12 pt-5">
                      <Link className="btn btn-primary" to="../../index.js">
                        <i className="ti-home me-2" />
                        Back to home
                      </Link>
                    </div>
                  </div>
                  <div className="row pt-5 mt-5">
                    <div className="col-12 pt-5 text-center">
                      <i className="text-primary mdi mdi-file-document-box-multiple-outline display-1" />
                      <h3 className="text-primary fw-light mt-5">
                        The detailed documentation of Star Admin2 Template is
                        provided at
                        <Link
                          to="http://bootstrapdash.com/demo/star-admin-pro/docs/documentation.js"
                          target="_blank"
                          className="text-danger d-block text-truncate"
                        >
                          http://bootstrapdash.com/demo/star-admin-pro/docs/documentation.js
                        </Link>
                      </h3>
                      <h4 className="mt-4 fw-light text-primary">
                        In case you want to refer the documentation file, it is
                        available at
                        <span className="text-danger">
                          /docs/documentation.js
                        </span>
                        in the downloaded folder
                      </h4>
                    </div>
                  </div>
                </div>
              </div>
              {/* partial:../../partials/_footer.html */}
              <footer className="footer">
                <div className="d-sm-flex justify-content-center justify-content-sm-between">
                  <span className="text-muted text-center text-sm-left d-block d-sm-inline-block">
                    Premium{" "}
                    <Link to="https://www.bootstrapdash.com/" target="_blank">
                      Bootstrap admin template
                    </Link>{" "}
                    from BootstrapDash.
                  </span>
                  <span className="float-none float-sm-right d-block mt-1 mt-sm-0 text-center">
                    Copyright © 2021. All rights reserved.
                  </span>
                </div>
              </footer>
              {/* partial */}
            </div>
          </div>
        </div>
        {/* plugins:js */}
        {/* endinject */}
        {/* inject:js */}
        {/* endinject */}
        {/* Custom js for this page*/}
        {/* End custom js for this page*/}
      
    </div>
  );
}

export default documentation;