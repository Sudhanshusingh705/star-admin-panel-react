import React from 'react'
import { Link } from 'react-router-dom';

const typography = () => {
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
          {/* partial:../../partials/_navbar.js */}
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
                <Link className="navbar-brand brand-logo-mini" to="../../index.js"> 
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
            {/* partial:../../partials/_settings-panel.js */}
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
            {/* partial:../../partials/_sidebar.js */}
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
                          to="../../pages/tables/basic_table.js"
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
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Headings</h4>
                        <p className="card-description">
                          Add tags <code>&lt;h1&gt;</code> to{" "}
                          <code>&lt;h6&gt;</code> or class <code>.h1</code> to{" "}
                          <code>.h6</code>
                        </p>
                        <div className="template-demo">
                          <h1>h1. Heading</h1>
                          <h2>h2. Heading</h2>
                          <h3>h3. Heading</h3>
                          <h4>h4. Heading</h4>
                          <h5>h5. Heading</h5>
                          <h6>h6. Heading</h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">
                          Headings with secondary text
                        </h4>
                        <p className="card-description">
                          Add faded secondary text to headings
                        </p>
                        <div className="template-demo">
                          <h1>
                            h1. Heading
                            <small className="text-muted">Secondary text</small>
                          </h1>
                          <h2>
                            h2. Heading
                            <small className="text-muted">Secondary text</small>
                          </h2>
                          <h3>
                            h3. Heading
                            <small className="text-muted">Secondary text</small>
                          </h3>
                          <h4>
                            h4. Heading
                            <small className="text-muted">Secondary text</small>
                          </h4>
                          <h5>
                            h5. Heading
                            <small className="text-muted">Secondary text</small>
                          </h5>
                          <h6>
                            h6. Heading
                            <small className="text-muted">Secondary text</small>
                          </h6>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Display headings</h4>
                        <p className="card-description">
                          Add class <code>.display1</code> to{" "}
                          <code>.display-4</code>
                        </p>
                        <div className="template-demo">
                          <h1 className="display-1">Display 1</h1>
                          <h1 className="display-2">Display 2</h1>
                          <h1 className="display-3">Display 3</h1>
                          <h1 className="display-4">Display 4</h1>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 d-flex align-items-stretch">
                    <div className="row">
                      <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">Paragraph</h4>
                            <p className="card-description">
                              Write text in <code>&lt;p&gt;</code> tag
                            </p>
                            <p>
                              Lorem Ipsum is simply dummy text of the printing
                              Lorem Ipsum has been the industry's standard dummy
                              text ever since the 1500s, when an unknown printer
                              took a galley not only five centuries,
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12 grid-margin stretch-card">
                        <div className="card">
                          <div className="card-body">
                            <h4 className="card-title">Icon size</h4>
                            <p className="card-description">
                              Add class <code>.icon-lg</code>,{" "}
                              <code>.icon-md</code>, <code>.icon-sm</code>
                            </p>
                            <div className="row">
                              <div className="col-md-4 d-flex align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                  <i className="ti-package icon-lg text-warning" />
                                  <p className="mb-0 ms-1">Icon-lg</p>
                                </div>
                              </div>
                              <div className="col-md-4 d-flex align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                  <i className="ti-package icon-md text-success" />
                                  <p className="mb-0 ms-1">Icon-md</p>
                                </div>
                              </div>
                              <div className="col-md-4 d-flex align-items-center">
                                <div className="d-flex flex-row align-items-center">
                                  <i className="ti-package icon-sm text-danger" />
                                  <p className="mb-0 ms-1">Icon-sm</p>
                                </div>
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
                        <h4 className="card-title">Blockquotes</h4>
                        <p className="card-description">
                          Wrap content inside
                          <code>&lt;blockquote class="blockquote"&gt;</code>
                        </p>
                        <blockquote className="blockquote">
                          <p className="mb-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                          </p>
                        </blockquote>
                      </div>
                      <div className="card-body">
                        <blockquote className="blockquote blockquote-primary">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Integer posuere erat a ante.
                          </p>
                          <footer className="blockquote-footer">
                            Someone famous in{" "}
                            <cite title="Source Title">Source Title</cite>
                          </footer>
                        </blockquote>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Address</h4>
                        <p className="card-description">
                          Use <code>&lt;address&gt;</code> tag
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <address>
                              <p className="fw-bold">Star Admin2 inc.</p>
                              <p>695 lsom Ave,</p>
                              <p>Suite 00</p>
                              <p>San Francisco, CA 94107</p>
                            </address>
                          </div>
                          <div className="col-md-6">
                            <address className="text-primary">
                              <p className="fw-bold">E-mail</p>
                              <p className="mb-2">johndoe@examplemeail.com</p>
                              <p className="fw-bold">Web Address</p>
                              <p>www.starAdminPro.com</p>
                            </address>
                          </div>
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title">Lead</h4>
                        <p className="card-description">
                          Use class <code>.lead</code>
                        </p>
                        <p className="lead">
                          Vivamus sagittis lacus vel augue laoreet rutrum
                          faucibus dolor auctor.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Text colors</h4>
                        <p className="card-description">
                          Use class <code>.text-primary</code>,{" "}
                          <code>.text-secondary</code> etc. for text in theme
                          colors
                        </p>
                        <div className="row">
                          <div className="col-md-6">
                            <p className="text-primary">.text-primary</p>
                            <p className="text-success">.text-success</p>
                            <p className="text-danger">.text-danger</p>
                            <p className="text-warning">.text-warning</p>
                            <p className="text-info">.text-info</p>
                          </div>
                          <div className="col-md-6">
                            <p className="text-light bg-dark pl-1">
                              .text-light
                            </p>
                            <p className="text-secondary">.text-secondary</p>
                            <p className="text-dark">.text-dark</p>
                            <p className="text-muted">.text-muted</p>
                            <p className="text-white bg-dark pl-1">
                              .text-white
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Top aligned media</h4>
                        <div className="media">
                          <i className="ti-world icon-md text-info d-flex align-self-start me-3" />
                          <div className="media-body">
                            <p className="card-text">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Center aligned media</h4>
                        <div className="media">
                          <i className="ti-world icon-md text-info d-flex align-self-center me-3" />
                          <div className="media-body">
                            <p className="card-text">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bottom aligned media</h4>
                        <div className="media">
                          <i className="ti-world icon-md text-info d-flex align-self-end me-3" />
                          <div className="media-body">
                            <p className="card-text">
                              Cras sit amet nibh libero, in gravida nulla. Nulla
                              vel metus scelerisque.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Highlighted Text</h4>
                        <p className="card-description">
                          Wrap the text in <code>&lt;mark&gt;</code> to
                          highlight text
                        </p>
                        <p>
                          It is a long{" "}
                          <mark className="bg-warning text-white">
                            established
                          </mark>{" "}
                          fact that a reader will be distracted by the readable
                          content of a page when looking at its layout. The
                          point of using Lorem Ipsum is that it has a
                          more-or-less normal distribution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">List Unordered</h4>
                        <ul>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Bold text</h4>
                        <p className="card-description">
                          Use class<code>.fw-bold</code>
                        </p>
                        <p>
                          It is a long{" "}
                          <span className="fw-bold">established fact</span> that
                          a reader will be distracted by the readable content of
                          a page when looking at its layout. The point of using
                          Lorem Ipsum is that it has a more-or-less normal
                          distribution
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">List Ordered</h4>
                        <ol>
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit&gt;</li>
                        </ol>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title text-primary">Underline</h4>
                        <p className="card-description">
                          Wrap in <code>&lt;u&gt;</code> tag for underline
                        </p>
                        <p>
                          <u>
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </u>
                        </p>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-danger">Lowercase</h4>
                        <p className="card-description">
                          Use class <code>.text-lowercase</code>
                        </p>
                        <p className="text-lowercase">
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-warning">Uppercase</h4>
                        <p className="card-description">
                          Use class <code>.text-uppercase</code>
                        </p>
                        <p className="text-uppercase">
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Mute</h4>
                        <p className="card-description">
                          Use class <code>.text-muted</code>
                        </p>
                        <p className="text-muted">
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-success">Strike</h4>
                        <p className="card-description">
                          Wrap content in <code>&lt;del&gt;</code> tag
                        </p>
                        <p>
                          <del>
                            lorem ipsum dolor sit amet, consectetur mod tempor
                            incididunt ut labore et dolore magna aliqua.
                          </del>
                        </p>
                      </div>
                      <div className="card-body">
                        <h4 className="card-title text-info">Capitalized</h4>
                        <p className="card-description">
                          Use class <code>.text-capitalize</code>
                        </p>
                        <p className="text-capitalize">
                          lorem ipsum dolor sit amet, consectetur mod tempor
                          incididunt ut labore et dolore magna aliqua.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                          Add class <code>.list-ticked</code> to{" "}
                          <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-ticked">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit&gt;</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                          Add class <code>.list-arrow</code> to{" "}
                          <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-arrow">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit&gt;</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin grid-margin-md-0 stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">List with icon</h4>
                        <p className="card-description">
                          Add class <code>.list-star</code> to{" "}
                          <code>&lt;ul&gt;</code>
                        </p>
                        <ul className="list-star">
                          <li>Lorem ipsum dolor sit amet</li>
                          <li>Consectetur adipiscing elit</li>
                          <li>Integer molestie lorem at massa</li>
                          <li>Facilisis in pretium nisl aliquet</li>
                          <li>Nulla volutpat aliquam velit&gt;</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* content-wrapper ends */}
              {/* partial:../../partials/_footer.js */}
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
        {/* Custom js for this page*/}
        {/* End custom js for this page*/}
      </>
    </div>
  );
}

export default typography;