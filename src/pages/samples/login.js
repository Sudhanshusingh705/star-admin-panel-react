import React from 'react'
import { Link } from 'react-router-dom';

const login = () => {
  return (
    <div>
      <>
        {/* Required meta tags */}
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Star Admin2 </title>
        {/* plugins:css */}
        <link rel="stylesheet" href="../../vendors/feather/feather.css" />
        <link
          rel="stylesheet"
          href="../../vendors/mdi/css/materialdesignicons.min.css"
        />
        <link
          rel="stylesheet"
          href="../../vendors/ti-icons/css/themify-icons.css"
        />
        <link rel="stylesheet" href="../../vendors/typicons/typicons.css" />
        <link
          rel="stylesheet"
          href="../../vendors/simple-line-icons/css/simple-line-icons.css"
        />
        <link
          rel="stylesheet"
          href="../../vendors/css/vendor.bundle.base.css"
        />
        {/* endinject */}
        {/* Plugin css for this page */}
        {/* End plugin css for this page */}
        {/* inject:css */}
        <link
          rel="stylesheet"
          href="../../css/vertical-layout-light/style.css"
        />
        {/* endinject */}
        <link rel="shortcut icon" href="../../images/favicon.png" />
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper full-page-wrapper">
            <div className="content-wrapper d-flex align-items-center auth px-0">
              <div className="row w-100 mx-0">
                <div className="col-lg-4 mx-auto">
                  <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                    <div className="brand-logo">
                      <img src="../../images/logo.svg" alt="logo" />
                    </div>
                    <h4>Hello! let's get started</h4>
                    <h6 className="fw-light">Sign in to continue.</h6>
                    <form className="pt-3">
                      <div className="form-group">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          id="exampleInputEmail1"
                          placeholder="Username"
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          id="exampleInputPassword1"
                          placeholder="Password"
                        />
                      </div>
                      <div className="mt-3">
                        <a
                          className="btn btn-block btn-primary btn-lg font-weight-medium auth-form-btn"
                          href="../../index.html"
                        >
                          SIGN IN
                        </a>
                      </div>
                      <div className="my-2 d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <label className="form-check-label text-muted">
                            <input
                              type="checkbox"
                              className="form-check-input"
                            />
                            Keep me signed in
                          </label>
                        </div>
                        <Link to="#" className="auth-link text-black">
                          Forgot password?
                        </Link>
                      </div>
                      <div className="mb-2">
                        <button
                          type="button"
                          className="btn btn-block btn-facebook auth-form-btn"
                        >
                          <i className="ti-facebook me-2" />
                          Connect using facebook
                        </button>
                      </div>
                      <div className="text-center mt-4 fw-light">
                        Don't have an account?{" "}
                        <a href="register.html" className="text-primary">
                          Create
                        </a>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            {/* content-wrapper ends */}
          </div>
          {/* page-body-wrapper ends */}
        </div>
        {/* container-scroller */}
        {/* plugins:js */}
        {/* endinject */}
        {/* Plugin js for this page */}
        {/* End plugin js for this page */}
        {/* inject:js */}
        {/* endinject */}
      </>
    </div>
  );
}

export default login;