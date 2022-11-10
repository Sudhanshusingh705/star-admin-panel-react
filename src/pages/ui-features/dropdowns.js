import React from 'react'
import { Link } from 'react-router-dom';

const dropdowns = () => {
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
        {/* Plugin css for this page */}
        {/* End plugin css for this page */}
        {/* inject:css */}
        <link
          rel="stylesheet"
          to="../../css/vertical-layout-light/style.css"
        />
        {/* endinject */}
        <link rel="shortcut icon" to="../../images/favicon.png" />
        <div className="container-scroller">
          {/* partial:../../partials/_navbar.html */}
          <nav className="navbar default-layout col-lg-12 col-12 p-0 fixed-top d-flex align-items-top flex-row">
            <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-start">
              <div className="me-3">
                <button
                  className="navbar-toggler navbar-toggler align-self-center"
                  type="button"
                  data-bs-toggle="minimize"
                >
                  <span className="icon-menu" />
                </button>
              </div>
              <div>
                <Link className="navbar-brand brand-logo" to="../../index.js">
                  <img src="../../images/logo.svg" alt="logo" />
                </Link>
                <Link
                  className="navbar-brand brand-logo-mini"
                  to="../../index.js"
                >
                  <img src="../../images/logo-mini.svg" alt="logo" />
                </Link>
              </div>
            </div>
            <div className="navbar-menu-wrapper d-flex align-items-top">
              <ul className="navbar-nav">
                <li className="nav-item font-weight-semibold d-none d-lg-block ms-0">
                  <h1 className="welcome-text">
                    Good Morning,{" "}
                    <span className="text-black fw-bold">John Doe</span>
                  </h1>
                  <h3 className="welcome-sub-text">
                    Your performance summary this week{" "}
                  </h3>
                </li>
              </ul>
              <ul className="navbar-nav ms-auto">
                <li className="nav-item dropdown d-none d-lg-block">
                  <Link
                    className="nav-link dropdown-bordered dropdown-toggle dropdown-toggle-split"
                    id="messageDropdown"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    {" "}
                    Select Category{" "}
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="messageDropdown"
                  >
                    <Link className="dropdown-item py-3">
                      <p className="mb-0 font-weight-medium float-left">
                        Select category
                      </p>
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item preview-item">
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Bootstrap Bundle{" "}
                        </p>
                        <p className="fw-light small-text mb-0">
                          This is a Bundle featuring 16 unique dashboards
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item">
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Angular Bundle
                        </p>
                        <p className="fw-light small-text mb-0">
                          Everything you’ll ever need for your Angular projects
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item">
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          VUE Bundle
                        </p>
                        <p className="fw-light small-text mb-0">
                          Bundle of 6 Premium Vue Admin Dashboard
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item">
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          React Bundle
                        </p>
                        <p className="fw-light small-text mb-0">
                          Bundle of 8 Premium React Admin Dashboard
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <div
                    id="datepicker-popup"
                    className="input-group date datepicker navbar-date-picker"
                  >
                    <span className="input-group-addon input-group-prepend border-right">
                      <span className="icon-calendar input-group-text calendar-icon" />
                    </span>
                    <input type="text" className="form-control" />
                  </div>
                </li>
                <li className="nav-item">
                  <form className="search-form" action="#">
                    <i className="icon-search" />
                    <input
                      type="search"
                      className="form-control"
                      placeholder="Search Here"
                      title="Search here"
                    />
                  </form>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link count-indicator"
                    id="notificationDropdown"
                    to="#"
                    data-bs-toggle="dropdown"
                  >
                    <i className="icon-mail icon-lg" />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="notificationDropdown"
                  >
                    <Link className="dropdown-item py-3 border-bottom">
                      <p className="mb-0 font-weight-medium float-left">
                        You have 4 new notifications{" "}
                      </p>
                      <span className="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </Link>
                    <Link className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-alert m-auto text-primary" />
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Application Error
                        </h6>
                        <p className="fw-light small-text mb-0"> Just now </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-settings m-auto text-primary" />
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          Settings
                        </h6>
                        <p className="fw-light small-text mb-0">
                          {" "}
                          Private message{" "}
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item py-3">
                      <div className="preview-thumbnail">
                        <i className="mdi mdi-airballoon m-auto text-primary" />
                      </div>
                      <div className="preview-item-content">
                        <h6 className="preview-subject fw-normal text-dark mb-1">
                          New user registration
                        </h6>
                        <p className="fw-light small-text mb-0"> 2 days ago </p>
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link
                    className="nav-link count-indicator"
                    id="countDropdown"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <i className="icon-bell" />
                    <span className="count" />
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown preview-list pb-0"
                    aria-labelledby="countDropdown"
                  >
                    <Link className="dropdown-item py-3">
                      <p className="mb-0 font-weight-medium float-left">
                        You have 7 unread mails{" "}
                      </p>
                      <span className="badge badge-pill badge-primary float-right">
                        View all
                      </span>
                    </Link>
                    <div className="dropdown-divider" />
                    <Link className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="../../images/faces/face10.jpg"
                          alt="img"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Marian Garner{" "}
                        </p>
                        <p className="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="../../images/faces/face12.jpg"
                          alt="img"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          David Grey{" "}
                        </p>
                        <p className="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </Link>
                    <Link className="dropdown-item preview-item">
                      <div className="preview-thumbnail">
                        <img
                          src="../../images/faces/face1.jpg"
                          alt="img"
                          className="img-sm profile-pic"
                        />
                      </div>
                      <div className="preview-item-content flex-grow py-2">
                        <p className="preview-subject ellipsis font-weight-medium text-dark">
                          Travis Jenkins{" "}
                        </p>
                        <p className="fw-light small-text mb-0">
                          {" "}
                          The meeting is cancelled{" "}
                        </p>
                      </div>
                    </Link>
                  </div>
                </li>
                <li className="nav-item dropdown d-none d-lg-block user-dropdown">
                  <Link
                    className="nav-link"
                    id="UserDropdown"
                    to="#"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      className="img-xs rounded-circle"
                      src="../../images/faces/face8.jpg"
                      alt="Profile img"
                    />{" "}
                  </Link>
                  <div
                    className="dropdown-menu dropdown-menu-right navbar-dropdown"
                    aria-labelledby="UserDropdown"
                  >
                    <div className="dropdown-header text-center">
                      <img
                        className="img-md rounded-circle"
                        src="../../images/faces/face8.jpg"
                        alt="Profile img"
                      />
                      <p className="mb-1 mt-3 font-weight-semibold">
                        Allen Moreno
                      </p>
                      <p className="fw-light text-muted mb-0">
                        allenmoreno@gmail.com
                      </p>
                    </div>
                    <Link className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-account-outline text-primary me-2" />{" "}
                      My Profile{" "}
                      <span className="badge badge-pill badge-danger">1</span>
                    </Link>
                    <Link className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-message-text-outline text-primary me-2" />{" "}
                      Messages
                    </Link>
                    <Link className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-calendar-check-outline text-primary me-2" />{" "}
                      Activity
                    </Link>
                    <Link className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-help-circle-outline text-primary me-2" />{" "}
                      FAQ
                    </Link>
                    <Link className="dropdown-item">
                      <i className="dropdown-item-icon mdi mdi-power text-primary me-2" />
                      Sign Out
                    </Link>
                  </div>
                </li>
              </ul>
              <button
                className="navbar-toggler navbar-toggler-right d-lg-none align-self-center"
                type="button"
                data-bs-toggle="offcanvas"
              >
                <span className="mdi mdi-menu" />
              </button>
            </div>
          </nav>
          {/* partial */}
          <div className="container-fluid page-body-wrapper">
            {/* partial:../../partials/_settings-panel.html */}
            <div className="theme-setting-wrapper">
              <div id="settings-trigger">
                <i className="ti-settings" />
              </div>
              <div id="theme-settings" className="settings-panel">
                <i className="settings-close ti-close" />
                <p className="settings-heading">SIDEBAR SKINS</p>
                <div
                  className="sidebar-bg-options selected"
                  id="sidebar-light-theme"
                >
                  <div className="img-ss rounded-circle bg-light border me-3" />
                  Light
                </div>
                <div className="sidebar-bg-options" id="sidebar-dark-theme">
                  <div className="img-ss rounded-circle bg-dark border me-3" />
                  Dark
                </div>
                <p className="settings-heading mt-2">HEADER SKINS</p>
                <div className="color-tiles mx-0 px-4">
                  <div className="tiles success" />
                  <div className="tiles warning" />
                  <div className="tiles danger" />
                  <div className="tiles info" />
                  <div className="tiles dark" />
                  <div className="tiles default" />
                </div>
              </div>
            </div>
            <div id="right-sidebar" className="settings-panel">
              <i className="settings-close ti-close" />
              <ul
                className="nav nav-tabs border-top"
                id="setting-panel"
                role="tablist"
              >
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    id="todo-tab"
                    data-bs-toggle="tab"
                    to="#todo-section"
                    role="tab"
                    aria-controls="todo-section"
                    aria-expanded="true"
                  >
                    TO DO LIST
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    id="chats-tab"
                    data-bs-toggle="tab"
                    to="#chats-section"
                    role="tab"
                    aria-controls="chats-section"
                  >
                    CHATS
                  </Link>
                </li>
              </ul>
              <div className="tab-content" id="setting-content">
                <div
                  className="tab-pane fade show active scroll-wrapper"
                  id="todo-section"
                  role="tabpanel"
                  aria-labelledby="todo-section"
                >
                  <div className="add-items d-flex px-3 mb-0">
                    <form className="form w-100">
                      <div className="form-group d-flex">
                        <input
                          type="text"
                          className="form-control todo-list-input"
                          placeholder="Add To-do"
                        />
                        <button
                          type="submit"
                          className="add btn btn-primary todo-list-add-btn"
                          id="add-task"
                        >
                          Add
                        </button>
                      </div>
                    </form>
                  </div>
                  <div className="list-wrapper px-3">
                    <ul className="d-flex flex-column-reverse todo-list">
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Team review meeting at 3.00 PM
                          </label>
                        </div>
                        <i className="remove ti-close" />
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Prepare for presentation
                          </label>
                        </div>
                        <i className="remove ti-close" />
                      </li>
                      <li>
                        <div className="form-check">
                          <label className="form-check-label">
                            <input className="checkbox" type="checkbox" />
                            Resolve all the low priority tickets due today
                          </label>
                        </div>
                        <i className="remove ti-close" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked=""
                            />
                            Schedule meeting for next week
                          </label>
                        </div>
                        <i className="remove ti-close" />
                      </li>
                      <li className="completed">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input
                              className="checkbox"
                              type="checkbox"
                              defaultChecked=""
                            />
                            Project review
                          </label>
                        </div>
                        <i className="remove ti-close" />
                      </li>
                    </ul>
                  </div>
                  <h4 className="px-3 text-muted mt-5 fw-light mb-0">Events</h4>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="ti-control-record text-primary me-2" />
                      <span>Feb 11 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Creating component page build a js
                    </p>
                    <p className="text-gray mb-0">
                      The total number of sessions
                    </p>
                  </div>
                  <div className="events pt-4 px-3">
                    <div className="wrapper d-flex mb-2">
                      <i className="ti-control-record text-primary me-2" />
                      <span>Feb 7 2018</span>
                    </div>
                    <p className="mb-0 font-weight-thin text-gray">
                      Meeting with Alisa
                    </p>
                    <p className="text-gray mb-0 ">Call Sarah Graves</p>
                  </div>
                </div>
                {/* To do section tab ends */}
                <div
                  className="tab-pane fade"
                  id="chats-section"
                  role="tabpanel"
                  aria-labelledby="chats-section"
                >
                  <div className="d-flex align-items-center justify-content-between border-bottom">
                    <p className="settings-heading border-top-0 mb-3 pl-3 pt-0 border-bottom-0 pb-0">
                      Friends
                    </p>
                    <small className="settings-heading border-top-0 mb-3 pt-0 border-bottom-0 pb-0 pr-3 fw-normal">
                      See All
                    </small>
                  </div>
                  <ul className="chat-list">
                    <li className="list active">
                      <div className="profile">
                        <img src="../../images/faces/face1.jpg" alt="img" />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Thomas Douglas</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">19 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="../../images/faces/face2.jpg" alt="img" />
                        <span className="offline" />
                      </div>
                      <div className="info">
                        <div className="wrapper d-flex">
                          <p>Catherine</p>
                        </div>
                        <p>Away</p>
                      </div>
                      <div className="badge badge-success badge-pill my-auto mx-2">
                        4
                      </div>
                      <small className="text-muted my-auto">23 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="../../images/faces/face3.jpg" alt="img" />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Daniel Russell</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">14 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="../../images/faces/face4.jpg" alt="img" />
                        <span className="offline" />
                      </div>
                      <div className="info">
                        <p>James Richardson</p>
                        <p>Away</p>
                      </div>
                      <small className="text-muted my-auto">2 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="../../images/faces/face5.jpg" alt="img" />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Madeline Kennedy</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">5 min</small>
                    </li>
                    <li className="list">
                      <div className="profile">
                        <img src="../../images/faces/face6.jpg" alt="img" />
                        <span className="online" />
                      </div>
                      <div className="info">
                        <p>Sarah Graves</p>
                        <p>Available</p>
                      </div>
                      <small className="text-muted my-auto">47 min</small>
                    </li>
                  </ul>
                </div>
                {/* chat tab ends */}
              </div>
            </div>
            {/* partial */}
            {/* partial:../../partials/_sidebar.html */}
            <nav className="sidebar sidebar-offcanvas" id="sidebar">
              <ul className="nav">
                <li className="nav-item">
                  <Link className="nav-link" to="../../index.js">
                    <i className="mdi mdi-grid-large menu-icon" />
                    <span className="menu-title">Dashboard</span>
                  </Link>
                </li>
                <li className="nav-item nav-category">UI Elements</li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="menu-icon mdi mdi-floor-plan" />
                    <span className="menu-title">UI Elements</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/ui-features/buttons.js"
                        >
                          Buttons
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/ui-features/dropdowns.js"
                        >
                          Dropdowns
                        </Link>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/ui-features/typography.js"
                        >
                          Typography
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">Forms and Datas</li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="menu-icon mdi mdi-card-text-outline" />
                    <span className="menu-title">Form elements</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <Link
                          className="nav-link"
                          to="../../pages/forms/basic_elements.js"
                        >
                          Basic Elements
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#charts"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="menu-icon mdi mdi-chart-line" />
                    <span className="menu-title">Charts</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/charts/chartjs.js"
                        >
                          ChartJs
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#tables"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="menu-icon mdi mdi-table" />
                    <span className="menu-title">Tables</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/tables/basic-table.js"
                        >
                          Basic table
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="menu-icon mdi mdi-layers-outline" />
                    <span className="menu-title">Icons</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/icons/mdi.js"
                        >
                          Mdi icons
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">pages</li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    data-bs-toggle="collapse"
                    to="#auth"
                    aria-expanded="false"
                    aria-controls="auth"
                  >
                    <i className="menu-icon mdi mdi-account-circle-outline" />
                    <span className="menu-title">User Pages</span>
                    <i className="menu-arrow" />
                  </Link>
                  <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <Link
                          className="nav-link"
                          to="../../pages/samples/login.js"
                        >
                          {" "}
                          Login{" "}
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">help</li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.js"
                  >
                    <i className="menu-icon mdi mdi-file-document" />
                    <span className="menu-title">Documentation</span>
                  </Link>
                </li>
              </ul>
            </nav>
            {/* partial */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-lg-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Dropdown menu</h4>
                        <div className="row">
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-primary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton1"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-secondary dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton2"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton2"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-danger dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton3"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton3"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-warning dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton4"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton4"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-light dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton8"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton8"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-success dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton5"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton5"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-info dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton6"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton6"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-3 dropdown-menu-static-demo">
                            <div className="dropdown">
                              <button
                                className="btn btn-dark dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton7"
                                data-bs-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="true"
                              >
                                Dropdown
                              </button>
                              <div
                                className="dropdown-menu show"
                                aria-labelledby="dropdownMenuButton7"
                              >
                                <h6 className="dropdown-header">Settings</h6>
                                <Link className="dropdown-item" to="#">
                                  Action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Another action
                                </Link>
                                <Link className="dropdown-item" to="#">
                                  Something else here
                                </Link>
                                <div className="dropdown-divider" />
                                <Link className="dropdown-item" to="#">
                                  Separated link
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Split button dropdowns</h4>
                        <p className="card-description">
                          Wrap two buttons in <code>.btn-group</code> and add{" "}
                          <code>.dropdown-toggle-split</code> to the toggling
                          button
                        </p>
                        <div className="template-demo">
                          <div className="btn-group">
                            <button type="button" className="btn btn-primary">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton1"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton1"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-danger">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton2"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton2"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-success">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-success dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton3"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton3"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-secondary">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton4"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton4"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-info">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-info dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton5"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton5"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group">
                            <button type="button" className="btn btn-warning">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                              id="dropdownMenuSplitButton6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSplitButton6"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Icon dropdowns</h4>
                        <p className="card-description">
                          Add icon tags instead of text
                        </p>
                        <div className="row">
                          <div className="col-12">
                            <div className="template-demo d-flex justify-content-between flex-wrap">
                              <div className="dropdown">
                                <button
                                  className="btn btn-warning dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuIconButton1"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-world" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton1"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn btn-danger dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuIconButton2"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-cup" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton2"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-outline-info dropdown-toggle"
                                  id="dropdownMenuIconButton3"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-time" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton3"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="template-demo d-flex justify-content-between flex-wrap">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success dropdown-toggle"
                                  id="dropdownMenuIconButton4"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-heart" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton4"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-warning dropdown-toggle"
                                  id="dropdownMenuIconButton5"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-power-off" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton5"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  className="btn btn-primary dropdown-toggle"
                                  type="button"
                                  id="dropdownMenuIconButton6"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-lock" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton6"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-12">
                            <div className="template-demo d-flex justify-content-between flex-wrap">
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-dark dropdown-toggle"
                                  id="dropdownMenuIconButton7"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-user" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton7"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-info dropdown-toggle"
                                  id="dropdownMenuIconButton8"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-bell" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton8"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                              <div className="dropdown">
                                <button
                                  type="button"
                                  className="btn btn-success dropdown-toggle"
                                  id="dropdownMenuIconButton9"
                                  data-bs-toggle="dropdown"
                                  aria-haspopup="true"
                                  aria-expanded="false"
                                >
                                  <i className="ti-user" />
                                </button>
                                <div
                                  className="dropdown-menu"
                                  aria-labelledby="dropdownMenuIconButton9"
                                >
                                  <h6 className="dropdown-header">Settings</h6>
                                  <Link className="dropdown-item" to="#">
                                    Action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Another action
                                  </Link>
                                  <Link className="dropdown-item" to="#">
                                    Something else here
                                  </Link>
                                  <div className="dropdown-divider" />
                                  <Link className="dropdown-item" to="#">
                                    Separated link
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Dropup variation</h4>
                        <p className="card-description">
                          Add class <code>.dropup</code>
                        </p>
                        <div className="template-demo">
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-primary">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-primary dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton1"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton1"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-danger">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-danger dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton2"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton2"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-success">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-success dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton3"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton3"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-secondary">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-secondary dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton4"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton4"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-info">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-info dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton5"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton5"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="btn-group dropup">
                            <button type="button" className="btn btn-warning">
                              Dropdown
                            </button>
                            <button
                              type="button"
                              className="btn btn-warning dropdown-toggle dropdown-toggle-split"
                              id="dropupMenuSplitButton6"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            ></button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropupMenuSplitButton6"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Dropdown sizes</h4>
                        <p className="card-description">
                          Add class{" "}
                          <code>
                            .btn-{"{"}size{"}"}
                          </code>{" "}
                          to dropdown buttons
                        </p>
                        <div className="template-demo mt-5">
                          <div className="dropdown">
                            <button
                              className="btn btn-danger btn-lg dropdown-toggle"
                              type="button"
                              id="dropdownMenuSizeButton1"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSizeButton1"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn btn-danger dropdown-toggle"
                              type="button"
                              id="dropdownMenuSizeButton2"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSizeButton2"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                          <div className="dropdown">
                            <button
                              className="btn btn-danger btn-sm dropdown-toggle"
                              type="button"
                              id="dropdownMenuSizeButton3"
                              data-bs-toggle="dropdown"
                              aria-haspopup="true"
                              aria-expanded="false"
                            >
                              Dropdown
                            </button>
                            <div
                              className="dropdown-menu"
                              aria-labelledby="dropdownMenuSizeButton3"
                            >
                              <h6 className="dropdown-header">Settings</h6>
                              <Link className="dropdown-item" to="#">
                                Action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Another action
                              </Link>
                              <Link className="dropdown-item" to="#">
                                Something else here
                              </Link>
                              <div className="dropdown-divider" />
                              <Link className="dropdown-item" to="#">
                                Separated link
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
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
            {/* main-panel ends */}
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

export default dropdowns;