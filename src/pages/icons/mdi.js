import React from 'react'
import { Link } from 'react-router-dom';

const mdi = () => {
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
        <link
          rel="stylesheet"
          to="../../vendors/datatables.net-bs4/dataTables.bootstrap4.css"
        />
        <link rel="stylesheet" to="../../js/select.dataTables.min.css" />
        {/* inject:css */}
        <link
          rel="stylesheet"
          to="../../css/vertical-layout-light/style.css"
        />
        {/* endinject */}
        <link rel="shortcut icon" to="../../images/favicon.png" />
        <div className=" container-scroller">
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
                          to="../../pages/charts/chart.js"
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
                  <div className="col-lg-12 grid-margin">
                    <div className="card">
                      <div className="card-body">
                        <div className="row icons-list">
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-access-point" /> mdi
                            mdi-access-point
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-access-point-network" /> mdi
                            mdi-access-point-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account" /> mdi mdi-account
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-box" /> mdi
                            mdi-account-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-box-outline" /> mdi
                            mdi-account-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-card-details" /> mdi
                            mdi-account-card-details
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-check" /> mdi
                            mdi-account-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-circle" /> mdi
                            mdi-account-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-convert" /> mdi
                            mdi-account-convert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-key" /> mdi
                            mdi-account-key
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-minus" /> mdi
                            mdi-account-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-multiple" /> mdi
                            mdi-account-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-multiple-minus" /> mdi
                            mdi-account-multiple-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-multiple-outline" />{" "}
                            mdi mdi-account-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-multiple-plus" /> mdi
                            mdi-account-multiple-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-network" /> mdi
                            mdi-account-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-off" /> mdi
                            mdi-account-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-outline" /> mdi
                            mdi-account-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-plus" /> mdi
                            mdi-account-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-remove" /> mdi
                            mdi-account-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-search" /> mdi
                            mdi-account-search
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-settings" /> mdi
                            mdi-account-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-star" /> mdi
                            mdi-account-star
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-account-switch" /> mdi
                            mdi-account-switch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-adjust" /> mdi mdi-adjust
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-air-conditioner" /> mdi
                            mdi-air-conditioner
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airballoon" /> mdi
                            mdi-airballoon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airplane" /> mdi mdi-airplane
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airplane-landing" /> mdi
                            mdi-airplane-landing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airplane-off" /> mdi
                            mdi-airplane-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airplane-takeoff" /> mdi
                            mdi-airplane-takeoff
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-airplay" /> mdi mdi-airplay
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alarm" /> mdi mdi-alarm
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alarm-check" /> mdi
                            mdi-alarm-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alarm-multiple" /> mdi
                            mdi-alarm-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alarm-off" /> mdi
                            mdi-alarm-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alarm-plus" /> mdi
                            mdi-alarm-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-album" /> mdi mdi-albums
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert" /> mdi mdi-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert-box" /> mdi
                            mdi-alert-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert-circle" /> mdi
                            mdi-alert-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert-circle-outline" /> mdi
                            mdi-alert-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert-octagon" /> mdi
                            mdi-alert-octagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alert-outline" /> mdi
                            mdi-alert-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alpha" /> mdi mdi-alpha
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-alphabetical" /> mdi
                            mdi-alphabetical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-altimeter" /> mdi
                            mdi-altimeter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-amazon" /> mdi mdi-amazon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ambulance" /> mdi
                            mdi-ambulance
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-amplifier" /> mdi
                            mdi-amplifier
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-anchor" /> mdi mdi-anchor
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-android" /> mdi mdi-android
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-android-debug-bridge" /> mdi
                            mdi-android-debug-bridge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-android-studio" /> mdi
                            mdi-android-studio
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-animation" /> mdi
                            mdi-animation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple" /> mdi mdi-apple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-finder" /> mdi
                            mdi-apple-finder
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-ios" /> mdi
                            mdi-apple-ios
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-keyboard-caps" /> mdi
                            mdi-apple-keyboard-caps
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-keyboard-command" /> mdi
                            mdi-apple-keyboard-command
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-keyboard-control" /> mdi
                            mdi-apple-keyboard-control
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-keyboard-option" /> mdi
                            mdi-apple-keyboard-option
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-keyboard-shift" /> mdi
                            mdi-apple-keyboard-shift
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apple-safari" /> mdi
                            mdi-apple-safari
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-application" /> mdi
                            mdi-application
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-apps" /> mdi mdi-apps
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-archive" /> mdi mdi-archive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrange-bring-forward" /> mdi
                            mdi-arrange-bring-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrange-bring-to-front" /> mdi
                            mdi-arrange-bring-to-front
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrange-send-backward" /> mdi
                            mdi-arrange-send-backward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrange-send-to-back" /> mdi
                            mdi-arrange-send-to-back
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-all" /> mdi
                            mdi-arrow-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-bottom-left" /> mdi
                            mdi-arrow-bottom-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-bottom-right" /> mdi
                            mdi-arrow-bottom-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down" /> mdi
                            mdi-arrow-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down" /> mdi
                            mdi-arrow-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down-bold-circle" /> mdi
                            mdi-arrow-down-bold-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down-bold-circle-outline" />{" "}
                            mdi mdi-arrow-down-bold-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down-bold-hexagon-outline" />{" "}
                            mdi mdi-arrow-down-bold-hexagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down-drop-circle" /> mdi
                            mdi-arrow-down-drop-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-down-drop-circle-outline" />{" "}
                            mdi mdi-arrow-down-drop-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-expand" /> mdi
                            mdi-arrow-expand
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-expand-all" /> mdi
                            mdi-arrow-expand-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left" /> mdi
                            mdi-arrow-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-bold" /> mdi
                            mdi-arrow-left-bold
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-bold-circle" /> mdi
                            mdi-arrow-left-bold-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-bold-circle-outline" />{" "}
                            mdi mdi-arrow-left-bold-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-bold-hexagon-outline" />{" "}
                            mdi mdi-arrow-left-bold-hexagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-drop-circle" /> mdi
                            mdi-arrow-left-drop-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-left-drop-circle-outline" />{" "}
                            mdi mdi-arrow-left-drop-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right" /> mdi
                            mdi-arrow-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-bold" /> mdi
                            mdi-arrow-right-bold
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-bold-circle" />{" "}
                            mdi mdi-arrow-right-bold-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-bold-circle-outline" />{" "}
                            mdi mdi-arrow-right-bold-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-bold-hexagon-outline" />{" "}
                            mdi mdi-arrow-right-bold-hexagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-drop-circle" />{" "}
                            mdi mdi-arrow-right-drop-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-right-drop-circle-outline" />{" "}
                            mdi mdi-arrow-right-drop-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-top-left" /> mdi
                            mdi-arrow-top-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-top-right" /> mdi
                            mdi-arrow-top-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up" /> mdi mdi-arrow-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-bold" /> mdi
                            mdi-arrow-up-bold
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-bold-circle" /> mdi
                            mdi-arrow-up-bold-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-bold-circle-outline" />{" "}
                            mdi mdi-arrow-up-bold-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-bold-hexagon-outline" />{" "}
                            mdi mdi-arrow-up-bold-hexagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-drop-circle" /> mdi
                            mdi-arrow-up-drop-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-arrow-up-drop-circle-outline" />{" "}
                            mdi mdi-arrow-up-drop-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-assistant" /> mdi
                            mdi-assistant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-at" /> mdi mdi-at
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-attachment" /> mdi
                            mdi-attachment
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-audiobook" /> mdi
                            mdi-audiobook
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-auto-fix" /> mdi mdi-auto-fix
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-auto-upload" /> mdi
                            mdi-auto-upload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-autorenew" /> mdi
                            mdi-autorenew
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-av-timer" /> mdi mdi-av-timer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-baby" /> mdi mdi-baby
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-backburger" /> mdi
                            mdi-backburger
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-backspace" /> mdi
                            mdi-backspace
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-backup-restore" /> mdi
                            mdi-backup-restore
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bank" /> mdi mdi-bank
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-barcode" /> mdi mdi-barcode
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-barcode-scan" /> mdi
                            mdi-barcode-scan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-barley" /> mdi mdi-barley
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-barrel" /> mdi mdi-barrel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-basket" /> mdi mdi-basket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-basket-fill" /> mdi
                            mdi-basket-fill
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-basket-unfill" /> mdi
                            mdi-basket-unfill
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery" /> mdi mdi-battery
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-10" /> mdi
                            mdi-battery-10
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-20" /> mdi
                            mdi-battery-20
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-30" /> mdi
                            mdi-battery-30
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-40" /> mdi
                            mdi-battery-40
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-50" /> mdi
                            mdi-battery-50
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-60" /> mdi
                            mdi-battery-60
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-70" /> mdi
                            mdi-battery-70
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-80" /> mdi
                            mdi-battery-80
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-90" /> mdi
                            mdi-battery-90
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-alert" /> mdi
                            mdi-battery-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging" /> mdi
                            mdi-battery-charging
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-100" /> mdi
                            mdi-battery-charging-100
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-20" /> mdi
                            mdi-battery-charging-20
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-30" /> mdi
                            mdi-battery-charging-30
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-40" /> mdi
                            mdi-battery-charging-40
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-60" /> mdi
                            mdi-battery-charging-60
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-80" /> mdi
                            mdi-battery-charging-80
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-charging-90" /> mdi
                            mdi-battery-charging-90
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-minus" /> mdi
                            mdi-battery-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-negative" /> mdi
                            mdi-battery-negative
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-outline" /> mdi
                            mdi-battery-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-plus" /> mdi
                            mdi-battery-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-positive" /> mdi
                            mdi-battery-positive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-battery-unknown" /> mdi
                            mdi-battery-unknown
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-beach" /> mdi mdi-beach
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-beats" /> mdi mdi-beats
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-beer" /> mdi mdi-beer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-behance" /> mdi mdi-behance
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell" /> mdi mdi-bell
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-off" /> mdi mdi-bell-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-outline" /> mdi
                            mdi-bell-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-plus" /> mdi
                            mdi-bell-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-ring" /> mdi
                            mdi-bell-ring
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-ring-outline" /> mdi
                            mdi-bell-ring-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bell-sleep" /> mdi
                            mdi-bell-sleep
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-beta" /> mdi mdi-beta
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bible" /> mdi mdi-bible
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bike" /> mdi mdi-bike
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bing" /> mdi mdi-bing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-binoculars" /> mdi
                            mdi-binoculars
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bio" /> mdi mdi-bio
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-biohazard" /> mdi
                            mdi-biohazard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bitbucket" /> mdi
                            mdi-bitbucket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-black-mesa" /> mdi
                            mdi-black-mesa
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blackberry" /> mdi
                            mdi-blackberry
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blender" /> mdi mdi-blender
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blinds" /> mdi mdi-blinds
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-block-helper" /> mdi
                            mdi-block-helper
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blogger" /> mdi mdi-blogger
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth" /> mdi
                            mdi-bluetooth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth-audio" /> mdi
                            mdi-bluetooth-audio
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth-connect" /> mdi
                            mdi-bluetooth-connect
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth-off" /> mdi
                            mdi-bluetooth-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth-settings" /> mdi
                            mdi-bluetooth-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bluetooth-transfer" /> mdi
                            mdi-bluetooth-transfer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blur" /> mdi mdi-blur
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blur-linear" /> mdi
                            mdi-blur-linear
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blur-off" /> mdi mdi-blur-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-blur-radial" /> mdi
                            mdi-blur-radial
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bone" /> mdi mdi-bone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book" /> mdi mdi-book
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-minus" /> mdi
                            mdi-book-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-multiple" /> mdi
                            mdi-book-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-open" /> mdi
                            mdi-book-open
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-open-page-variant" /> mdi
                            mdi-book-open-page-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-open-variant" /> mdi
                            mdi-book-open-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-plus" /> mdi
                            mdi-book-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-book-variant" /> mdi
                            mdi-book-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark" /> mdi mdi-bookmark
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-check" /> mdi
                            mdi-bookmark-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-music" /> mdi
                            mdi-bookmark-music
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-outline" /> mdi
                            mdi-bookmark-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-plus" /> mdi
                            mdi-bookmark-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-plus-outline" /> mdi
                            mdi-bookmark-plus-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bookmark-remove" /> mdi
                            mdi-bookmark-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-boombox" /> mdi mdi-boombox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-all" /> mdi
                            mdi-border-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-bottom" /> mdi
                            mdi-border-bottom
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-color" /> mdi
                            mdi-border-color
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-horizontal" /> mdi
                            mdi-border-horizontal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-inside" /> mdi
                            mdi-border-inside
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-left" /> mdi
                            mdi-border-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-none" /> mdi
                            mdi-border-none
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-outside" /> mdi
                            mdi-border-outside
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-right" /> mdi
                            mdi-border-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-style" /> mdi
                            mdi-border-style
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-top" /> mdi
                            mdi-border-top
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-border-vertical" /> mdi
                            mdi-border-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bowl" /> mdi mdi-bowl
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bowling" /> mdi mdi-bowling
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-box" /> mdi mdi-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-box-cutter" /> mdi
                            mdi-box-cutter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-box-shadow" /> mdi
                            mdi-box-shadow
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bridge" /> mdi mdi-bridge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-briefcase" /> mdi
                            mdi-briefcase
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-briefcase-check" /> mdi
                            mdi-briefcase-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-briefcase-download" /> mdi
                            mdi-briefcase-download
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-briefcase-upload" /> mdi
                            mdi-briefcase-upload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-1" /> mdi
                            mdi-brightness-1
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-2" /> mdi
                            mdi-brightness-2
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-3" /> mdi
                            mdi-brightness-3
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-4" /> mdi
                            mdi-brightness-4
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-5" /> mdi
                            mdi-brightness-5
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-6" /> mdi
                            mdi-brightness-6
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-7" /> mdi
                            mdi-brightness-7
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brightness-auto" /> mdi
                            mdi-brightness-auto
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-broom" /> mdi mdi-broom
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-brush" /> mdi mdi-brush
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-buffer" /> mdi mdi-buffer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bug" /> mdi mdi-bug
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bulletin-board" /> mdi
                            mdi-bulletin-board
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bullhorn" /> mdi mdi-bullhorn
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bullseye" /> mdi mdi-bullseye
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-bus" /> mdi mdi-bus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cached" /> mdi mdi-cached
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cake" /> mdi mdi-cake
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cake-layered" /> mdi
                            mdi-cake-layered
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cake-variant" /> mdi
                            mdi-cake-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calculator" /> mdi
                            mdi-calculator
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar" /> mdi mdi-calendar
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-blank" /> mdi
                            mdi-calendar-blank
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-check" /> mdi
                            mdi-calendar-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-clock" /> mdi
                            mdi-calendar-clock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-multiple" /> mdi
                            mdi-calendar-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-multiple-check" />{" "}
                            mdi mdi-calendar-multiple-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-plus" /> mdi
                            mdi-calendar-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-remove" /> mdi
                            mdi-calendar-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-text" /> mdi
                            mdi-calendar-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-calendar-today" /> mdi
                            mdi-calendar-today
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-call-made" /> mdi
                            mdi-call-made
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-call-merge" /> mdi
                            mdi-call-merge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-call-missed" /> mdi
                            mdi-call-missed
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-call-received" /> mdi
                            mdi-call-received
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-call-split" /> mdi
                            mdi-call-split
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camcorder" /> mdi
                            mdi-camcorder
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camcorder-box" /> mdi
                            mdi-camcorder-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camcorder-box-off" /> mdi
                            mdi-camcorder-box-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camcorder-off" /> mdi
                            mdi-camcorder-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera" /> mdi mdi-camera
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-enhance" /> mdi
                            mdi-camera-enhance
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-front" /> mdi
                            mdi-camera-front
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-front-variant" /> mdi
                            mdi-camera-front-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-iris" /> mdi
                            mdi-camera-iris
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-off" /> mdi
                            mdi-camera-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-party-mode" /> mdi
                            mdi-camera-party-mode
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-rear" /> mdi
                            mdi-camera-rear
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-rear-variant" /> mdi
                            mdi-camera-rear-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-switch" /> mdi
                            mdi-camera-switch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-camera-timer" /> mdi
                            mdi-camera-timer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-candle" /> mdi mdi-candle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-candycane" /> mdi
                            mdi-candycane
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-car" /> mdi mdi-car
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-car-battery" /> mdi
                            mdi-car-battery
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-car-connected" /> mdi
                            mdi-car-connected
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-car-wash" /> mdi mdi-car-wash
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cards" /> mdi mdi-cards
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cards-outline" /> mdi
                            mdi-cards-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cards-playing-outline" /> mdi
                            mdi-cards-playing-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-carrot" /> mdi mdi-carrot
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cart" /> mdi mdi-cart
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cart-off" /> mdi mdi-cart-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cart-outline" /> mdi
                            mdi-cart-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cart-plus" /> mdi
                            mdi-cart-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-case-sensitive-alt" /> mdi
                            mdi-case-sensitive-alt
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cash" /> mdi mdi-cash
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cash-100" /> mdi mdi-cash-100
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cash-multiple" /> mdi
                            mdi-cash-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cash-usd" /> mdi mdi-cash-usd
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cast" /> mdi mdi-cast
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cast-connected" /> mdi
                            mdi-cast-connected
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-castle" /> mdi mdi-castle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cat" /> mdi mdi-cat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone" /> mdi
                            mdi-cellphone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-android" /> mdi
                            mdi-cellphone-android
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-basic" /> mdi
                            mdi-cellphone-basic
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-dock" /> mdi
                            mdi-cellphone-dock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-iphone" /> mdi
                            mdi-cellphone-iphone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-link" /> mdi
                            mdi-cellphone-link
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-link-off" /> mdi
                            mdi-cellphone-link-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cellphone-settings" /> mdi
                            mdi-cellphone-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-certificate" /> mdi
                            mdi-certificate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chair-school" /> mdi
                            mdi-chair-school
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-arc" /> mdi
                            mdi-chart-arc
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-areaspline" /> mdi
                            mdi-chart-areaspline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-bar" /> mdi
                            mdi-chart-bar
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-bubble" /> mdi
                            mdi-chart-bubble
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-gantt" /> mdi
                            mdi-chart-gantt
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-gantt" /> mdi
                            mdi-chart-gantt
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-histogram" /> mdi
                            mdi-chart-histogram
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-line" /> mdi
                            mdi-chart-line
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-pie" /> mdi
                            mdi-chart-pie
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chart-scatterplot-hexbin" />{" "}
                            mdi mdi-chart-scatterplot-hexbin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-check" /> mdi mdi-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-check-all" /> mdi
                            mdi-check-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-check-circle" /> mdi
                            mdi-check-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-check-circle-outline" /> mdi
                            mdi-check-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-blank" /> mdi
                            mdi-checkbox-blank
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-blank-circle" /> mdi
                            mdi-checkbox-blank-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-blank-circle-outline" />{" "}
                            mdi mdi-checkbox-blank-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-blank-outline" /> mdi
                            mdi-checkbox-blank-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-marked" /> mdi
                            mdi-checkbox-marked
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-marked-circle" /> mdi
                            mdi-checkbox-marked-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-marked-circle-outline" />{" "}
                            mdi mdi-checkbox-marked-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-marked-outline" />{" "}
                            mdi mdi-checkbox-marked-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-blank" />{" "}
                            mdi mdi-checkbox-multiple-blank
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-blank-circle" />{" "}
                            mdi mdi-checkbox-multiple-blank-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-blank-circle-outline" />{" "}
                            mdi mdi-checkbox-multiple-blank-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-blank-outline" />{" "}
                            mdi mdi-checkbox-multiple-blank-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-marked" />{" "}
                            mdi mdi-checkbox-multiple-marked
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-marked-circle" />{" "}
                            mdi mdi-checkbox-multiple-marked-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-marked-circle-outline" />{" "}
                            mdi mdi-checkbox-multiple-marked-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkbox-multiple-marked-outline" />{" "}
                            mdi mdi-checkbox-multiple-marked-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-checkerboard" /> mdi
                            mdi-checkerboard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chemical-weapon" /> mdi
                            mdi-chemical-weapon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chemical-weapon" /> mdi
                            mdi-chemical-weapon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-double-down" /> mdi
                            mdi-chevron-double-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-double-left" /> mdi
                            mdi-chevron-double-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-double-right" /> mdi
                            mdi-chevron-double-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-double-up" /> mdi
                            mdi-chevron-double-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-down" /> mdi
                            mdi-chevron-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-left" /> mdi
                            mdi-chevron-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-right" /> mdi
                            mdi-chevron-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chevron-up" /> mdi
                            mdi-chevron-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-chip" /> mdi mdi-chip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-church" /> mdi mdi-church
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cisco-webex" /> mdi
                            mdi-cisco-webex
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-city" /> mdi mdi-city
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard" /> mdi
                            mdi-clipboard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-account" /> mdi
                            mdi-clipboard-account
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-alert" /> mdi
                            mdi-clipboard-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-arrow-down" /> mdi
                            mdi-clipboard-arrow-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-arrow-left" /> mdi
                            mdi-clipboard-arrow-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-check" /> mdi
                            mdi-clipboard-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-outline" /> mdi
                            mdi-clipboard-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clipboard-text" /> mdi
                            mdi-clipboard-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clippy" /> mdi mdi-clippy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock" /> mdi mdi-clock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-alert" /> mdi
                            mdi-clock-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-end" /> mdi
                            mdi-clock-end
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-fast" /> mdi
                            mdi-clock-fast
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-in" /> mdi mdi-clock-in
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-out" /> mdi
                            mdi-clock-out
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-clock-start" /> mdi
                            mdi-clock-start
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close" /> mdi mdi-close
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-box" /> mdi
                            mdi-close-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-box-outline" /> mdi
                            mdi-close-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-circle" /> mdi
                            mdi-close-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-circle-outline" /> mdi
                            mdi-close-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-network" /> mdi
                            mdi-close-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-octagon" /> mdi
                            mdi-close-octagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-close-octagon-outline" /> mdi
                            mdi-close-octagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-closed-caption" /> mdi
                            mdi-closed-caption
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud" /> mdi mdi-cloud
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-check" /> mdi
                            mdi-cloud-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-circle" /> mdi
                            mdi-cloud-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-download" /> mdi
                            mdi-cloud-download
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-outline" /> mdi
                            mdi-cloud-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-print" /> mdi
                            mdi-cloud-print
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-print-outline" /> mdi
                            mdi-cloud-print-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-sync" /> mdi
                            mdi-cloud-sync
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cloud-upload" /> mdi
                            mdi-cloud-upload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-array" /> mdi
                            mdi-code-array
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-braces" /> mdi
                            mdi-code-braces
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-brackets" /> mdi
                            mdi-code-brackets
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-equal" /> mdi
                            mdi-code-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-greater-than" /> mdi
                            mdi-code-greater-than
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-greater-than-or-equal" />{" "}
                            mdi mdi-code-greater-than-or-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-less-than" /> mdi
                            mdi-code-less-than
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-less-than-or-equal" />{" "}
                            mdi mdi-code-less-than-or-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-not-equal" /> mdi
                            mdi-code-not-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-not-equal-variant" /> mdi
                            mdi-code-not-equal-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-parentheses" /> mdi
                            mdi-code-parentheses
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-string" /> mdi
                            mdi-code-string
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-code-tags" /> mdi
                            mdi-code-tags
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-codepen" /> mdi mdi-codepen
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-coffee" /> mdi mdi-coffee
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-coffee-to-go" /> mdi
                            mdi-coffee-to-go
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-coin" /> mdi mdi-coin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-collage" /> mdi mdi-collage
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-color-helper" /> mdi
                            mdi-color-helper
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment" /> mdi mdi-comment
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-account" /> mdi
                            mdi-comment-account
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-account-outline" />{" "}
                            mdi mdi-comment-account-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-alert" /> mdi
                            mdi-comment-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-alert-outline" /> mdi
                            mdi-comment-alert-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-check" /> mdi
                            mdi-comment-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-check-outline" /> mdi
                            mdi-comment-check-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-multiple-outline" />{" "}
                            mdi mdi-comment-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-outline" /> mdi
                            mdi-comment-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-plus-outline" /> mdi
                            mdi-comment-plus-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-processing" /> mdi
                            mdi-comment-processing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-processing-outline" />{" "}
                            mdi mdi-comment-processing-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-question-outline" />{" "}
                            mdi mdi-comment-question-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-remove-outline" /> mdi
                            mdi-comment-remove-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-text" /> mdi
                            mdi-comment-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-comment-text-outline" /> mdi
                            mdi-comment-text-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-compare" /> mdi mdi-compare
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-compass" /> mdi mdi-compass
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-compass-outline" /> mdi
                            mdi-compass-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-console" /> mdi mdi-console
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-contact-mail" /> mdi
                            mdi-contact-mail
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-copy" /> mdi
                            mdi-content-copy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-cut" /> mdi
                            mdi-content-cut
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-duplicate" /> mdi
                            mdi-content-duplicate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-paste" /> mdi
                            mdi-content-paste
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-save" /> mdi
                            mdi-content-save
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-save-all" /> mdi
                            mdi-content-save-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-content-save-settings" /> mdi
                            mdi-content-save-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-contrast" /> mdi mdi-contrast
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-contrast-box" /> mdi
                            mdi-contrast-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-contrast-circle" /> mdi
                            mdi-contrast-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cookie" /> mdi mdi-cookie
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-copyright" /> mdi
                            mdi-copyright
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-counter" /> mdi mdi-counter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cow" /> mdi mdi-cow
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-credit-card" /> mdi
                            mdi-credit-card
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-credit-card-multiple" /> mdi
                            mdi-credit-card-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-credit-card-off" /> mdi
                            mdi-credit-card-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-credit-card-scan" /> mdi
                            mdi-credit-card-scan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crop" /> mdi mdi-crop
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crop-free" /> mdi
                            mdi-crop-free
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crop-landscape" /> mdi
                            mdi-crop-landscape
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crop-portrait" /> mdi
                            mdi-crop-portrait
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crop-square" /> mdi
                            mdi-crop-square
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crosshairs" /> mdi
                            mdi-crosshairs
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crosshairs-gps" /> mdi
                            mdi-crosshairs-gps
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-crown" /> mdi mdi-crown
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cube" /> mdi mdi-cube
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cube-outline" /> mdi
                            mdi-cube-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cube-send" /> mdi
                            mdi-cube-send
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cube-unfolded" /> mdi
                            mdi-cube-unfolded
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cup" /> mdi mdi-cup
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cup-off" /> mdi mdi-cup-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cup-water" /> mdi
                            mdi-cup-water
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-btc" /> mdi
                            mdi-currency-btc
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-eur" /> mdi
                            mdi-currency-eur
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-gbp" /> mdi
                            mdi-currency-gbp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-inr" /> mdi
                            mdi-currency-inr
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-ngn" /> mdi
                            mdi-currency-ngn
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-rub" /> mdi
                            mdi-currency-rub
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-try" /> mdi
                            mdi-currency-try
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-currency-usd" /> mdi
                            mdi-currency-usd
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cursor-default" /> mdi
                            mdi-cursor-default
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cursor-default-outline" /> mdi
                            mdi-cursor-default-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cursor-move" /> mdi
                            mdi-cursor-move
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cursor-pointer" /> mdi
                            mdi-cursor-pointer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-cursor-text" /> mdi
                            mdi-cursor-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-database" /> mdi mdi-database
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-database-minus" /> mdi
                            mdi-database-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-database-plus" /> mdi
                            mdi-database-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-debug-step-into" /> mdi
                            mdi-debug-step-into
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-debug-step-out" /> mdi
                            mdi-debug-step-out
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-debug-step-over" /> mdi
                            mdi-debug-step-over
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-decimal-decrease" /> mdi
                            mdi-decimal-decrease
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-delete" /> mdi mdi-delete
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-delete-forever" /> mdi
                            mdi-delete-forever
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-delete-sweep" /> mdi
                            mdi-delete-sweep
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-delete-variant" /> mdi
                            mdi-delete-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-delta" /> mdi mdi-delta
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-deskphone" /> mdi
                            mdi-deskphone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-desktop-mac" /> mdi
                            mdi-desktop-mac
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-desktop-tower" /> mdi
                            mdi-desktop-tower
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-details" /> mdi mdi-details
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-deviantart" /> mdi
                            mdi-deviantart
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dialpad" /> mdi mdi-dialpad
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-diamond" /> mdi mdi-diamond
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-1" /> mdi mdi-dice-1
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-2" /> mdi mdi-dice-2
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-3" /> mdi mdi-dice-3
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-4" /> mdi mdi-dice-4
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-5" /> mdi mdi-dice-5
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-6" /> mdi mdi-dice-6
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-d20" /> mdi mdi-dice-d20
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-d4" /> mdi mdi-dice-d4
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-d6" /> mdi mdi-dice-d6
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dice-d8" /> mdi mdi-dice-d8
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dictionary" /> mdi
                            mdi-dictionary
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-directions" /> mdi
                            mdi-directions
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-directions-fork" /> mdi
                            mdi-directions-fork
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-discord" /> mdi mdi-discord
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-disqus" /> mdi mdi-disqus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-disqus-outline" /> mdi
                            mdi-disqus-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-division" /> mdi mdi-division
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-division-box" /> mdi
                            mdi-division-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dns" /> mdi mdi-dns
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-domain" /> mdi mdi-domain
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dots-horizontal" /> mdi
                            mdi-dots-horizontal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dots-vertical" /> mdi
                            mdi-dots-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-download" /> mdi mdi-download
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drag" /> mdi mdi-drag
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drag-horizontal" /> mdi
                            mdi-drag-horizontal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drag-vertical" /> mdi
                            mdi-drag-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drawing" /> mdi mdi-drawing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drawing-box" /> mdi
                            mdi-drawing-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dribbble" /> mdi mdi-dribbble
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dribbble-box" /> mdi
                            mdi-dribbble-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drone" /> mdi mdi-drone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dropbox" /> mdi mdi-dropbox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-drupal" /> mdi mdi-drupal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-duck" /> mdi mdi-duck
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-dumbbell" /> mdi mdi-dumbbell
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-earth" /> mdi mdi-earth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-earth-off" /> mdi
                            mdi-earth-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-edge" /> mdi mdi-edge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eject" /> mdi mdi-eject
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-elevation-decline" /> mdi
                            mdi-elevation-decline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-elevation-rise" /> mdi
                            mdi-elevation-rise
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-elevator" /> mdi mdi-elevator
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-email" /> mdi mdi-email
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-email-open" /> mdi
                            mdi-email-open
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-email-open-outline" /> mdi
                            mdi-email-open-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-email-outline" /> mdi
                            mdi-email-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-email-variant" /> mdi
                            mdi-email-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon" /> mdi mdi-emoticon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-cool" /> mdi
                            mdi-emoticon-cool
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-devil" /> mdi
                            mdi-emoticon-devil
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-happy" /> mdi
                            mdi-emoticon-happy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-neutral" /> mdi
                            mdi-emoticon-neutral
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-poop" /> mdi
                            mdi-emoticon-poop
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-sad" /> mdi
                            mdi-emoticon-sad
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-emoticon-tongue" /> mdi
                            mdi-emoticon-tongue
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-engine" /> mdi mdi-engine
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-engine-outline" /> mdi
                            mdi-engine-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-equal" /> mdi mdi-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-equal-box" /> mdi
                            mdi-equal-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eraser" /> mdi mdi-eraser
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eraser-variant" /> mdi
                            mdi-eraser-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-escalator" /> mdi
                            mdi-escalator
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ethernet" /> mdi mdi-ethernet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ethernet-cable" /> mdi
                            mdi-ethernet-cable
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ethernet-cable-off" /> mdi
                            mdi-ethernet-cable-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-etsy" /> mdi mdi-etsy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ev-station" /> mdi
                            mdi-ev-station
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-evernote" /> mdi mdi-evernote
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-exclamation" /> mdi
                            mdi-exclamation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-exit-to-app" /> mdi
                            mdi-exit-to-app
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-export" /> mdi mdi-export
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eye" /> mdi mdi-eye
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eye-off" /> mdi mdi-eye-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eyedropper" /> mdi
                            mdi-eyedropper
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-eyedropper-variant" /> mdi
                            mdi-eyedropper-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-face" /> mdi mdi-face
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-face-profile" /> mdi
                            mdi-face-profile
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-facebook" /> mdi mdi-facebook
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-facebook-box" /> mdi
                            mdi-facebook-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-facebook-messenger" /> mdi
                            mdi-facebook-messenger
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-factory" /> mdi mdi-factory
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fan" /> mdi mdi-fan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fast-forward" /> mdi
                            mdi-fast-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fax" /> mdi mdi-fax
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ferry" /> mdi mdi-ferry
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file" /> mdi mdi-file
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-chart" /> mdi
                            mdi-file-chart
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-check" /> mdi
                            mdi-file-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-cloud" /> mdi
                            mdi-file-cloud
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-delimited" /> mdi
                            mdi-file-delimited
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-document" /> mdi
                            mdi-file-document
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-document-box" /> mdi
                            mdi-file-document-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-excel" /> mdi
                            mdi-file-excel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-excel-box" /> mdi
                            mdi-file-excel-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-export" /> mdi
                            mdi-file-export
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-find" /> mdi
                            mdi-file-find
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-hidden" /> mdi
                            mdi-file-hidden
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-image" /> mdi
                            mdi-file-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-import" /> mdi
                            mdi-file-import
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-lock" /> mdi
                            mdi-file-lock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-multiple" /> mdi
                            mdi-file-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-music" /> mdi
                            mdi-file-music
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-outline" /> mdi
                            mdi-file-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-pdf" /> mdi mdi-file-pdf
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-pdf-box" /> mdi
                            mdi-file-pdf-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-powerpoint" /> mdi
                            mdi-file-powerpoint
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-powerpoint-box" /> mdi
                            mdi-file-powerpoint-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-restore" /> mdi
                            mdi-file-restore
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-send" /> mdi
                            mdi-file-send
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-tree" /> mdi
                            mdi-file-tree
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-video" /> mdi
                            mdi-file-video
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-word" /> mdi
                            mdi-file-word
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-word-box" /> mdi
                            mdi-file-word-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-file-xml" /> mdi mdi-file-xml
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-film" /> mdi mdi-film
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filmstrip" /> mdi
                            mdi-filmstrip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filmstrip-off" /> mdi
                            mdi-filmstrip-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filter" /> mdi mdi-filter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filter-outline" /> mdi
                            mdi-filter-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filter-remove" /> mdi
                            mdi-filter-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filter-remove-outline" /> mdi
                            mdi-filter-remove-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-filter-variant" /> mdi
                            mdi-filter-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fingerprint" /> mdi
                            mdi-fingerprint
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fire" /> mdi mdi-fire
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-firefox" /> mdi mdi-firefox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fish" /> mdi mdi-fish
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag" /> mdi mdi-flag
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag-checkered" /> mdi
                            mdi-flag-checkered
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag-outline" /> mdi
                            mdi-flag-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag-outline-variant" /> mdi
                            mdi-flag-outline-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag-triangle" /> mdi
                            mdi-flag-triangle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flag-variant" /> mdi
                            mdi-flag-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flash" /> mdi mdi-flash
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flash-auto" /> mdi
                            mdi-flash-auto
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flash-off" /> mdi
                            mdi-flash-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flashlight" /> mdi
                            mdi-flashlight
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flashlight-off" /> mdi
                            mdi-flashlight-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask" /> mdi mdi-flask
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-empty" /> mdi
                            mdi-flask-empty
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-empty-outline" /> mdi
                            mdi-flask-empty-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-outline" /> mdi
                            mdi-flask-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flattr" /> mdi mdi-flattr
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-empty" /> mdi
                            mdi-flask-empty
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-empty-outline" /> mdi
                            mdi-flask-empty-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flask-outline" /> mdi
                            mdi-flask-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flattr" /> mdi mdi-flattr
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flip-to-back" /> mdi
                            mdi-flip-to-back
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flip-to-front" /> mdi
                            mdi-flip-to-front
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-floppy" /> mdi mdi-floppy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-flower" /> mdi mdi-flower
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder" /> mdi mdi-folder
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-account" /> mdi
                            mdi-folder-account
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-download" /> mdi
                            mdi-folder-download
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-google-drive" /> mdi
                            mdi-folder-google-drive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-image" /> mdi
                            mdi-folder-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-lock" /> mdi
                            mdi-folder-lock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-lock-open" /> mdi
                            mdi-folder-lock-open
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-move" /> mdi
                            mdi-folder-move
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-multiple" /> mdi
                            mdi-folder-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-multiple-image" /> mdi
                            mdi-folder-multiple-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-multiple-outline" />{" "}
                            mdi mdi-folder-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-outline" /> mdi
                            mdi-folder-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-plus" /> mdi
                            mdi-folder-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-remove" /> mdi
                            mdi-folder-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-folder-upload" /> mdi
                            mdi-folder-upload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-food" /> mdi mdi-food
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-food-apple" /> mdi
                            mdi-food-apple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-food-fork-drink" /> mdi
                            mdi-food-fork-drink
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-food-off" /> mdi mdi-food-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-food-variant" /> mdi
                            mdi-food-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-football" /> mdi mdi-football
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-football-australian" /> mdi
                            mdi-football-australian
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-football-helmet" /> mdi
                            mdi-football-helmet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-align-center" /> mdi
                            mdi-format-align-center
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-align-justify" /> mdi
                            mdi-format-align-justify
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-align-left" /> mdi
                            mdi-format-align-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-align-right" /> mdi
                            mdi-format-align-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-annotation-plus" /> mdi
                            mdi-format-annotation-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-bold" /> mdi
                            mdi-format-bold
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-clear" /> mdi
                            mdi-format-clear
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-color-fill" /> mdi
                            mdi-format-color-fill
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-float-center" /> mdi
                            mdi-format-float-center
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-float-left" /> mdi
                            mdi-format-float-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-float-none" /> mdi
                            mdi-format-float-none
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-float-right" /> mdi
                            mdi-format-float-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-1" /> mdi
                            mdi-format-header-1
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-2" /> mdi
                            mdi-format-header-2
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-3" /> mdi
                            mdi-format-header-3
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-4" /> mdi
                            mdi-format-header-4
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-5" /> mdi
                            mdi-format-header-5
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-6" /> mdi
                            mdi-format-header-6
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-decrease" /> mdi
                            mdi-format-header-decrease
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-equal" /> mdi
                            mdi-format-header-equal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-increase" /> mdi
                            mdi-format-header-increase
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-header-pound" /> mdi
                            mdi-format-header-pound
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-horizontal-align-center" />{" "}
                            mdi mdi-format-horizontal-align-center
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-horizontal-align-left" />{" "}
                            mdi mdi-format-horizontal-align-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-horizontal-align-right" />{" "}
                            mdi mdi-format-horizontal-align-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-indent-decrease" /> mdi
                            mdi-format-indent-decrease
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-indent-increase" /> mdi
                            mdi-format-indent-increase
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-italic" /> mdi
                            mdi-format-italic
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-line-spacing" /> mdi
                            mdi-format-line-spacing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-line-style" /> mdi
                            mdi-format-line-style
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-line-weight" /> mdi
                            mdi-format-line-weight
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-list-bulleted" /> mdi
                            mdi-format-list-bulleted
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-list-bulleted-type" />{" "}
                            mdi mdi-format-list-bulleted-type
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-paint" /> mdi
                            mdi-format-paint
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-paragraph" /> mdi
                            mdi-format-paragraph
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-size" /> mdi
                            mdi-format-size
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-strikethrough" /> mdi
                            mdi-format-strikethrough
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-strikethrough-variant" />{" "}
                            mdi mdi-format-strikethrough-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-subscript" /> mdi
                            mdi-format-subscript
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-superscript" /> mdi
                            mdi-format-superscript
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-text" /> mdi
                            mdi-format-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-textdirection-l-to-r" />{" "}
                            mdi mdi-format-textdirection-l-to-r
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-textdirection-r-to-l" />{" "}
                            mdi mdi-format-textdirection-r-to-l
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-title" /> mdi
                            mdi-format-title
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-underline" /> mdi
                            mdi-format-underline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-vertical-align-bottom" />{" "}
                            mdi mdi-format-vertical-align-bottom
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-vertical-align-center" />{" "}
                            mdi mdi-format-vertical-align-center
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-vertical-align-top" />{" "}
                            mdi mdi-format-vertical-align-top
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-wrap-inline" /> mdi
                            mdi-format-wrap-inline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-wrap-square" /> mdi
                            mdi-format-wrap-square
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-wrap-tight" /> mdi
                            mdi-format-wrap-tight
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-format-wrap-top-bottom" /> mdi
                            mdi-format-wrap-top-bottom
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-forum" /> mdi mdi-forum
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-forward" /> mdi mdi-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-foursquare" /> mdi
                            mdi-foursquare
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fridge" /> mdi mdi-fridge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fullscreen" /> mdi
                            mdi-fullscreen
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-fullscreen-exit" /> mdi
                            mdi-fullscreen-exit
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-function" /> mdi mdi-function
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gamepad" /> mdi mdi-gamepad
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gamepad-variant" /> mdi
                            mdi-gamepad-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gas-cylinder" /> mdi
                            mdi-gas-cylinder
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gas-station" /> mdi
                            mdi-gas-station
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gate" /> mdi mdi-gate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gauge" /> mdi mdi-gauge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gavel" /> mdi mdi-gavel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gender-female" /> mdi
                            mdi-gender-female
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gender-male" /> mdi
                            mdi-gender-male
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gender-male-female" /> mdi
                            mdi-gender-male-female
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gender-transgender" /> mdi
                            mdi-gender-transgender
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ghost" /> mdi mdi-ghost
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gift" /> mdi mdi-gift
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-git" /> mdi mdi-git
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-github-box" /> mdi
                            mdi-github-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-github-circle" /> mdi
                            mdi-github-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glass-flute" /> mdi
                            mdi-glass-flute
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glass-mug" /> mdi
                            mdi-glass-mug
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glass-stange" /> mdi
                            mdi-glass-stange
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glass-tulip" /> mdi
                            mdi-glass-tulip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glassdoor" /> mdi
                            mdi-glassdoor
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-glasses" /> mdi mdi-glasses
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gmail" /> mdi mdi-gmail
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-gnome" /> mdi mdi-gnome
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google" /> mdi mdi-google
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-cardboard" /> mdi
                            mdi-google-cardboard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-chrome" /> mdi
                            mdi-google-chrome
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-circles" /> mdi
                            mdi-google-circles
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-circles-communities" />{" "}
                            mdi mdi-google-circles-communities
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-circles-extended" />{" "}
                            mdi mdi-google-circles-extended
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-circles-group" /> mdi
                            mdi-google-circles-group
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-controller" /> mdi
                            mdi-google-controller
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-controller-off" /> mdi
                            mdi-google-controller-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-drive" /> mdi
                            mdi-google-drive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-earth" /> mdi
                            mdi-google-earth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-glass" /> mdi
                            mdi-google-glass
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-maps" /> mdi
                            mdi-google-maps
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-nearby" /> mdi
                            mdi-google-nearby
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-pages" /> mdi
                            mdi-google-pages
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-physical-web" /> mdi
                            mdi-google-physical-web
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-play" /> mdi
                            mdi-google-play
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-plus" /> mdi
                            mdi-google-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-plus-box" /> mdi
                            mdi-google-plus-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-translate" /> mdi
                            mdi-google-translate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-google-wallet" /> mdi
                            mdi-google-wallet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-grease-pencil" /> mdi
                            mdi-grease-pencil
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-grid" /> mdi mdi-grid
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-grid-off" /> mdi mdi-grid-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-group" /> mdi mdi-group
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-grid-off" /> mdi mdi-grid-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-group" /> mdi mdi-group
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-guitar-electric" /> mdi
                            mdi-guitar-electric
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-guitar-pick" /> mdi
                            mdi-guitar-pick
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-guitar-pick-outline" /> mdi
                            mdi-guitar-pick-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-guitar-pick-outline" /> mdi
                            mdi-guitar-pick-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hackernews" /> mdi
                            mdi-hackernews
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hand-pointing-right" /> mdi
                            mdi-hand-pointing-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hanger" /> mdi mdi-hanger
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-harddisk" /> mdi mdi-harddisk
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headphones" /> mdi
                            mdi-headphones
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headphones-box" /> mdi
                            mdi-headphones-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headphones-settings" /> mdi
                            mdi-headphones-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headset" /> mdi mdi-headset
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headset-dock" /> mdi
                            mdi-headset-dock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-headset-off" /> mdi
                            mdi-headset-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart" /> mdi mdi-heart
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart-box" /> mdi
                            mdi-heart-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart-box-outline" /> mdi
                            mdi-heart-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart-broken" /> mdi
                            mdi-heart-broken
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart-outline" /> mdi
                            mdi-heart-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-heart-pulse" /> mdi
                            mdi-heart-pulse
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-help" /> mdi mdi-help
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-help-circle" /> mdi
                            mdi-help-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-help-circle-outline" /> mdi
                            mdi-help-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hexagon" /> mdi mdi-hexagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hexagon-outline" /> mdi
                            mdi-hexagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-highway" /> mdi mdi-highway
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-history" /> mdi mdi-history
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hololens" /> mdi mdi-hololens
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-home" /> mdi mdi-home
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-home-map-marker" /> mdi
                            mdi-home-map-marker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-home-modern" /> mdi
                            mdi-home-modern
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-home-variant" /> mdi
                            mdi-home-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hops" /> mdi mdi-hops
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hospital" /> mdi mdi-hospital
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hospital-building" /> mdi
                            mdi-hospital-building
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hospital-marker" /> mdi
                            mdi-hospital-marker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-hotel" /> mdi mdi-hotel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-houzz" /> mdi mdi-houzz
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-houzz-box" /> mdi
                            mdi-houzz-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human" /> mdi mdi-human
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-child" /> mdi
                            mdi-human-child
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-female" /> mdi
                            mdi-human-female
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-greeting" /> mdi
                            mdi-human-greeting
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-handsdown" /> mdi
                            mdi-human-handsdown
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-handsup" /> mdi
                            mdi-human-handsup
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-male" /> mdi
                            mdi-human-male
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-male-female" /> mdi
                            mdi-human-male-female
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-human-pregnant" /> mdi
                            mdi-human-pregnant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image" /> mdi mdi-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-album" /> mdi
                            mdi-image-album
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-area" /> mdi
                            mdi-image-area
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-area-close" /> mdi
                            mdi-image-area-close
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-broken" /> mdi
                            mdi-image-broken
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-broken-variant" /> mdi
                            mdi-image-broken-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter" /> mdi
                            mdi-image-filter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-black-white" />{" "}
                            mdi mdi-image-filter-black-white
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-center-focus" />{" "}
                            mdi mdi-image-filter-center-focus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-center-focus-weak" />{" "}
                            mdi mdi-image-filter-center-focus-weak
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-drama" /> mdi
                            mdi-image-filter-drama
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-frames" /> mdi
                            mdi-image-filter-frames
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-hdr" /> mdi
                            mdi-image-filter-hdr
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-none" /> mdi
                            mdi-image-filter-none
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-tilt-shift" />{" "}
                            mdi mdi-image-filter-tilt-shift
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-filter-vintage" /> mdi
                            mdi-image-filter-vintage
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-image-multiple" /> mdi
                            mdi-image-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-import" /> mdi mdi-import
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-inbox" /> mdi mdi-inbox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-incognito" /> mdi
                            mdi-incognito
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-information" /> mdi
                            mdi-information
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-information-outline" /> mdi
                            mdi-information-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-information-variant" /> mdi
                            mdi-information-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-instagram" /> mdi
                            mdi-instagram
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-instapaper" /> mdi
                            mdi-instapaper
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-internet-explorer" /> mdi
                            mdi-internet-explorer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-invert-colors" /> mdi
                            mdi-invert-colors
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-jeepney" /> mdi mdi-jeepney
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-jira" /> mdi mdi-jira
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-jsfiddle" /> mdi mdi-jsfiddle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-json" /> mdi mdi-json
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keg" /> mdi mdi-keg
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-kettle" /> mdi mdi-kettle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key" /> mdi mdi-key
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key-change" /> mdi
                            mdi-key-change
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key-minus" /> mdi
                            mdi-key-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key-plus" /> mdi mdi-key-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key-remove" /> mdi
                            mdi-key-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-key-variant" /> mdi
                            mdi-key-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard" /> mdi mdi-keyboard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-backspace" /> mdi
                            mdi-keyboard-backspace
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-caps" /> mdi
                            mdi-keyboard-caps
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-close" /> mdi
                            mdi-keyboard-close
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-off" /> mdi
                            mdi-keyboard-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-return" /> mdi
                            mdi-keyboard-return
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-tab" /> mdi
                            mdi-keyboard-tab
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-keyboard-variant" /> mdi
                            mdi-keyboard-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-kodi" /> mdi mdi-kodi
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-label" /> mdi mdi-label
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-label-outline" /> mdi
                            mdi-label-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lambda" /> mdi mdi-lambda
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lan" /> mdi mdi-lan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lan-connect" /> mdi
                            mdi-lan-connect
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lan-disconnect" /> mdi
                            mdi-lan-disconnect
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lan-pending" /> mdi
                            mdi-lan-pending
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-c" /> mdi
                            mdi-language-c
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-cpp" /> mdi
                            mdi-language-cpp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-csharp" /> mdi
                            mdi-language-csharp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-css3" /> mdi
                            mdi-language-css3
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-html5" /> mdi
                            mdi-language-html5
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-javascript" /> mdi
                            mdi-language-javascript
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-php" /> mdi
                            mdi-language-php
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-python" /> mdi
                            mdi-language-python
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-language-python-text" /> mdi
                            mdi-language-python-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-laptop" /> mdi mdi-laptop
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-laptop-chromebook" /> mdi
                            mdi-laptop-chromebook
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-laptop-mac" /> mdi
                            mdi-laptop-mac
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-laptop-windows" /> mdi
                            mdi-laptop-windows
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lastfm" /> mdi mdi-lastfm
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-launch" /> mdi mdi-launch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-layers" /> mdi mdi-layers
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-layers-off" /> mdi
                            mdi-layers-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lead-pencil" /> mdi
                            mdi-lead-pencil
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-leaf" /> mdi mdi-leaf
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-off" /> mdi mdi-led-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-on" /> mdi mdi-led-on
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-outline" /> mdi
                            mdi-led-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-variant-off" /> mdi
                            mdi-led-variant-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-variant-on" /> mdi
                            mdi-led-variant-on
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-led-variant-outline" /> mdi
                            mdi-led-variant-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-library" /> mdi mdi-library
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-library-books" /> mdi
                            mdi-library-books
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-library-music" /> mdi
                            mdi-library-music
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-library-plus" /> mdi
                            mdi-library-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lightbulb" /> mdi
                            mdi-lightbulb
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lightbulb-outline" /> mdi
                            mdi-lightbulb-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-link" /> mdi mdi-link
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-link-off" /> mdi mdi-link-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-link-variant" /> mdi
                            mdi-link-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-link-variant-off" /> mdi
                            mdi-link-variant-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-linkedin" /> mdi mdi-linkedin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-linkedin-box" /> mdi
                            mdi-linkedin-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-linux" /> mdi mdi-linux
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lock" /> mdi mdi-lock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lock-open" /> mdi
                            mdi-lock-open
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lock-open-outline" /> mdi
                            mdi-lock-open-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lock-outline" /> mdi
                            mdi-lock-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lock-plus" /> mdi
                            mdi-lock-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-login" /> mdi mdi-login
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-login-variant" /> mdi
                            mdi-login-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-logout" /> mdi mdi-logout
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-logout-variant" /> mdi
                            mdi-logout-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-looks" /> mdi mdi-looks
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-loupe" /> mdi mdi-loupe
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-lumx" /> mdi mdi-lumx
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-magnet" /> mdi mdi-magnet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-magnet-on" /> mdi
                            mdi-magnet-on
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-magnify" /> mdi mdi-magnify
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-magnify-minus" /> mdi
                            mdi-magnify-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-magnify-plus" /> mdi
                            mdi-magnify-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mail-ru" /> mdi mdi-mail-ru
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map" /> mdi mdi-map
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker" /> mdi
                            mdi-map-marker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-circle" /> mdi
                            mdi-map-marker-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-minus" /> mdi
                            mdi-map-marker-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-multiple" /> mdi
                            mdi-map-marker-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-off" /> mdi
                            mdi-map-marker-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-plus" /> mdi
                            mdi-map-marker-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-map-marker-radius" /> mdi
                            mdi-map-marker-radius
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-margin" /> mdi mdi-margin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-markdown" /> mdi mdi-markdown
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-marker" /> mdi mdi-marker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-marker-check" /> mdi
                            mdi-marker-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-material-ui" /> mdi
                            mdi-material-ui
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-math-compass" /> mdi
                            mdi-math-compass
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-matrix" /> mdi mdi-matrix
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-maxcdn" /> mdi mdi-maxcdn
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-medium" /> mdi mdi-medium
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-memory" /> mdi mdi-memory
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-menu" /> mdi mdi-menu
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-menu-down" /> mdi
                            mdi-menu-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-menu-left" /> mdi
                            mdi-menu-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-menu-right" /> mdi
                            mdi-menu-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-menu-up" /> mdi mdi-menu-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message" /> mdi mdi-message
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-alert" /> mdi
                            mdi-message-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-draw" /> mdi
                            mdi-message-draw
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-image" /> mdi
                            mdi-message-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-outline" /> mdi
                            mdi-message-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-plus" /> mdi
                            mdi-message-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-processing" /> mdi
                            mdi-message-processing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-reply" /> mdi
                            mdi-message-reply
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-reply-text" /> mdi
                            mdi-message-reply-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-text" /> mdi
                            mdi-message-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-text-outline" /> mdi
                            mdi-message-text-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-message-video" /> mdi
                            mdi-message-video
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-meteor" /> mdi mdi-meteor
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone" /> mdi
                            mdi-microphone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone-off" /> mdi
                            mdi-microphone-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone-outline" /> mdi
                            mdi-microphone-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone-settings" /> mdi
                            mdi-microphone-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone-variant" /> mdi
                            mdi-microphone-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microphone-variant-off" /> mdi
                            mdi-microphone-variant-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microscope" /> mdi
                            mdi-microscope
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-microsoft" /> mdi
                            mdi-microsoft
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minecraft" /> mdi
                            mdi-minecraft
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minus" /> mdi mdi-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minus-box" /> mdi
                            mdi-minus-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minus-circle" /> mdi
                            mdi-minus-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minus-circle-outline" /> mdi
                            mdi-minus-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-minus-network" /> mdi
                            mdi-minus-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mixcloud" /> mdi mdi-mixcloud
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-monitor" /> mdi mdi-monitor
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-monitor-multiple" /> mdi
                            mdi-monitor-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-more" /> mdi mdi-more
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-motorbike" /> mdi
                            mdi-motorbike
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mouse" /> mdi mdi-mouse
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mouse-off" /> mdi
                            mdi-mouse-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mouse-variant" /> mdi
                            mdi-mouse-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-mouse-variant-off" /> mdi
                            mdi-mouse-variant-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-move-resize" /> mdi
                            mdi-move-resize
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-move-resize-variant" /> mdi
                            mdi-move-resize-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-movie" /> mdi mdi-movie
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-multiplication" /> mdi
                            mdi-multiplication
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-multiplication-box" /> mdi
                            mdi-multiplication-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-box" /> mdi
                            mdi-music-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-box-outline" /> mdi
                            mdi-music-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-circle" /> mdi
                            mdi-music-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note" /> mdi
                            mdi-music-note
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-bluetooth" /> mdi
                            mdi-music-note-bluetooth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-bluetooth-off" />{" "}
                            mdi mdi-music-note-bluetooth-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-eighth" /> mdi
                            mdi-music-note-eighth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-half" /> mdi
                            mdi-music-note-half
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-off" /> mdi
                            mdi-music-note-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-quarter" /> mdi
                            mdi-music-note-quarter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-sixteenth" /> mdi
                            mdi-music-note-sixteenth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-music-note-whole" /> mdi
                            mdi-music-note-whole
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nature" /> mdi mdi-nature
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nature-people" /> mdi
                            mdi-nature-people
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-navigation" /> mdi
                            mdi-navigation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-near-me" /> mdi mdi-near-me
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-needle" /> mdi mdi-needle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-new-box" /> mdi mdi-new-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-newspaper" /> mdi
                            mdi-newspaper
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nfc" /> mdi mdi-nfc
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nfc-tap" /> mdi mdi-nfc-tap
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nfc-variant" /> mdi
                            mdi-nfc-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nodejs" /> mdi mdi-nodejs
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-note" /> mdi mdi-note
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-note-outline" /> mdi
                            mdi-note-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-note-plus" /> mdi
                            mdi-note-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-note-plus-outline" /> mdi
                            mdi-note-plus-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-note-text" /> mdi
                            mdi-note-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-notification-clear-all" /> mdi
                            mdi-notification-clear-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric" /> mdi mdi-numeric
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-0-box" /> mdi
                            mdi-numeric-0-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-0-box-multiple-outline" />{" "}
                            mdi mdi-numeric-0-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-0-box-outline" /> mdi
                            mdi-numeric-0-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-1-box" /> mdi
                            mdi-numeric-1-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-1-box-multiple-outline" />{" "}
                            mdi mdi-numeric-1-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-1-box-outline" /> mdi
                            mdi-numeric-1-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-2-box" /> mdi
                            mdi-numeric-2-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-2-box-multiple-outline" />{" "}
                            mdi mdi-numeric-2-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-2-box-outline" /> mdi
                            mdi-numeric-2-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-3-box" /> mdi
                            mdi-numeric-3-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-3-box-multiple-outline" />{" "}
                            mdi mdi-numeric-3-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-3-box-outline" /> mdi
                            mdi-numeric-3-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-4-box" /> mdi
                            mdi-numeric-4-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-4-box-multiple-outline" />{" "}
                            mdi mdi-numeric-4-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-4-box-outline" /> mdi
                            mdi-numeric-4-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-5-box" /> mdi
                            mdi-numeric-5-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-5-box-multiple-outline" />{" "}
                            mdi mdi-numeric-5-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-5-box-outline" /> mdi
                            mdi-numeric-5-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-6-box" /> mdi
                            mdi-numeric-6-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-6-box-multiple-outline" />{" "}
                            mdi mdi-numeric-6-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-6-box-outline" /> mdi
                            mdi-numeric-6-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-7-box" /> mdi
                            mdi-numeric-7-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-7-box-multiple-outline" />{" "}
                            mdi mdi-numeric-7-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-7-box-outline" /> mdi
                            mdi-numeric-7-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-8-box" /> mdi
                            mdi-numeric-8-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-8-box-multiple-outline" />{" "}
                            mdi mdi-numeric-8-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-8-box-outline" /> mdi
                            mdi-numeric-8-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-box" /> mdi
                            mdi-numeric-9-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-box-multiple-outline" />{" "}
                            mdi mdi-numeric-9-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-box-outline" /> mdi
                            mdi-numeric-9-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-plus-box" /> mdi
                            mdi-numeric-9-plus-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-plus-box-multiple-outline" />{" "}
                            mdi mdi-numeric-9-plus-box-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-numeric-9-plus-box-outline" />{" "}
                            mdi mdi-numeric-9-plus-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-nutrition" /> mdi
                            mdi-nutrition
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-octagon" /> mdi mdi-octagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-octagon-outline" /> mdi
                            mdi-octagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-odnoklassniki" /> mdi
                            mdi-odnoklassniki
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-office" /> mdi mdi-office
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-oil" /> mdi mdi-oil
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-oil-temperature" /> mdi
                            mdi-oil-temperature
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-omega" /> mdi mdi-omega
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-onedrive" /> mdi mdi-onedrive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-opacity" /> mdi mdi-opacity
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-open-in-app" /> mdi
                            mdi-open-in-app
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-open-in-new" /> mdi
                            mdi-open-in-new
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-openid" /> mdi mdi-openid
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-opera" /> mdi mdi-opera
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ornament" /> mdi mdi-ornament
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ornament-variant" /> mdi
                            mdi-ornament-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-owl" /> mdi mdi-owl
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-package" /> mdi mdi-package
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-package-down" /> mdi
                            mdi-package-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-package-up" /> mdi
                            mdi-package-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-package-variant" /> mdi
                            mdi-package-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-package-variant-closed" /> mdi
                            mdi-package-variant-closed
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-page-first" /> mdi
                            mdi-page-first
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-page-last" /> mdi
                            mdi-page-last
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-palette" /> mdi mdi-palette
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-palette-advanced" /> mdi
                            mdi-palette-advanced
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panda" /> mdi mdi-panda
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pandora" /> mdi mdi-pandora
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panorama" /> mdi mdi-panorama
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panorama-fisheye" /> mdi
                            mdi-panorama-fisheye
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panorama-horizontal" /> mdi
                            mdi-panorama-horizontal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panorama-vertical" /> mdi
                            mdi-panorama-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-panorama-wide-angle" /> mdi
                            mdi-panorama-wide-angle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-paper-cut-vertical" /> mdi
                            mdi-paper-cut-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-paperclip" /> mdi
                            mdi-paperclip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-parking" /> mdi mdi-parking
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pause" /> mdi mdi-pause
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pause-circle" /> mdi
                            mdi-pause-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pause-circle-outline" /> mdi
                            mdi-pause-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pause-octagon" /> mdi
                            mdi-pause-octagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pause-octagon-outline" /> mdi
                            mdi-pause-octagon-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-paw" /> mdi mdi-paw
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-paw-off" /> mdi mdi-paw-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pen" /> mdi mdi-pen
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pencil" /> mdi mdi-pencil
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pencil-box" /> mdi
                            mdi-pencil-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pencil-box-outline" /> mdi
                            mdi-pencil-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pencil-lock" /> mdi
                            mdi-pencil-lock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pencil-off" /> mdi
                            mdi-pencil-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-percent" /> mdi mdi-percent
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pharmacy" /> mdi mdi-pharmacy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone" /> mdi mdi-phone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-bluetooth" /> mdi
                            mdi-phone-bluetooth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-classic" /> mdi
                            mdi-phone-classic
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-forward" /> mdi
                            mdi-phone-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-hangup" /> mdi
                            mdi-phone-hangup
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-in-talk" /> mdi
                            mdi-phone-in-talk
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-incoming" /> mdi
                            mdi-phone-incoming
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-log" /> mdi
                            mdi-phone-log
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-minus" /> mdi
                            mdi-phone-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-missed" /> mdi
                            mdi-phone-missed
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-outgoing" /> mdi
                            mdi-phone-outgoing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-paused" /> mdi
                            mdi-phone-paused
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-plus" /> mdi
                            mdi-phone-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-settings" /> mdi
                            mdi-phone-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-phone-voip" /> mdi
                            mdi-phone-voip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pi" /> mdi mdi-pi
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pi-box" /> mdi mdi-pi-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pig" /> mdi mdi-pig
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pill" /> mdi mdi-pill
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pin" /> mdi mdi-pin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pin-off" /> mdi mdi-pin-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pine-tree" /> mdi
                            mdi-pine-tree
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pine-tree-box" /> mdi
                            mdi-pine-tree-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pinterest" /> mdi
                            mdi-pinterest
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pinterest-box" /> mdi
                            mdi-pinterest-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pizza" /> mdi mdi-pizza
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play" /> mdi mdi-play
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play-box-outline" /> mdi
                            mdi-play-box-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play-circle" /> mdi
                            mdi-play-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play-circle-outline" /> mdi
                            mdi-play-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play-pause" /> mdi
                            mdi-play-pause
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-play-protected-content" /> mdi
                            mdi-play-protected-content
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playlist-check" /> mdi
                            mdi-playlist-check
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playlist-minus" /> mdi
                            mdi-playlist-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playlist-play" /> mdi
                            mdi-playlist-play
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playlist-plus" /> mdi
                            mdi-playlist-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playlist-remove" /> mdi
                            mdi-playlist-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-playstation" /> mdi
                            mdi-playstation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus" /> mdi mdi-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-box" /> mdi mdi-plus-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-circle" /> mdi
                            mdi-plus-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-circle-multiple-outline" />{" "}
                            mdi mdi-plus-circle-multiple-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-circle-outline" /> mdi
                            mdi-plus-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-network" /> mdi
                            mdi-plus-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-plus-one" /> mdi mdi-plus-one
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pocket" /> mdi mdi-pocket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pokeball" /> mdi mdi-pokeball
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-polaroid" /> mdi mdi-polaroid
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-poll" /> mdi mdi-poll
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-poll-box" /> mdi mdi-poll-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-polymer" /> mdi mdi-polymer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pool" /> mdi mdi-pool
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-popcorn" /> mdi mdi-popcorn
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pot" /> mdi mdi-pot
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pot-mix" /> mdi mdi-pot-mix
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pound" /> mdi mdi-pound
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pound-box" /> mdi
                            mdi-pound-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-power" /> mdi mdi-power
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-power-settings" /> mdi
                            mdi-power-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-power-socket" /> mdi
                            mdi-power-socket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-presentation" /> mdi
                            mdi-presentation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-presentation-play" /> mdi
                            mdi-presentation-play
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-printer" /> mdi mdi-printer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-printer-3d" /> mdi
                            mdi-printer-3d
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-printer-alert" /> mdi
                            mdi-printer-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-priority-high" /> mdi
                            mdi-priority-high
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-priority-low" /> mdi
                            mdi-priority-low
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-professional-hexagon" /> mdi
                            mdi-professional-hexagon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-projector" /> mdi
                            mdi-projector
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-projector-screen" /> mdi
                            mdi-projector-screen
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-pulse" /> mdi mdi-pulse
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-puzzle" /> mdi mdi-puzzle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-qqchat" /> mdi mdi-qqchat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-qrcode" /> mdi mdi-qrcode
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-qrcode-scan" /> mdi
                            mdi-qrcode-scan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-quadcopter" /> mdi
                            mdi-quadcopter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-quality-high" /> mdi
                            mdi-quality-high
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-quicktime" /> mdi
                            mdi-quicktime
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radar" /> mdi mdi-radar
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radiator" /> mdi mdi-radiator
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radio" /> mdi mdi-radio
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radio-handheld" /> mdi
                            mdi-radio-handheld
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radio-tower" /> mdi
                            mdi-radio-tower
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radioactive" /> mdi
                            mdi-radioactive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radiobox-blank" /> mdi
                            mdi-radiobox-blank
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-radiobox-marked" /> mdi
                            mdi-radiobox-marked
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ray-end" /> mdi mdi-ray-end
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ray-end-arrow" /> mdi
                            mdi-ray-end-arrow
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ray-start-end" /> mdi
                            mdi-ray-start-end
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ray-vertex" /> mdi
                            mdi-ray-vertex
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-read" /> mdi mdi-read
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-receipt" /> mdi mdi-receipt
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-record" /> mdi mdi-record
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-record-rec" /> mdi
                            mdi-record-rec
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-recycle" /> mdi mdi-recycle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-reddit" /> mdi mdi-reddit
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-redo" /> mdi mdi-redo
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-redo-variant" /> mdi
                            mdi-redo-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-refresh" /> mdi mdi-refresh
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-regex" /> mdi mdi-regex
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-relative-scale" /> mdi
                            mdi-relative-scale
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-reload" /> mdi mdi-reload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-remote" /> mdi mdi-remote
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rename-box" /> mdi
                            mdi-rename-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-repeat" /> mdi mdi-repeat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-repeat-off" /> mdi
                            mdi-repeat-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-repeat-once" /> mdi
                            mdi-repeat-once
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-replay" /> mdi mdi-replay
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-reply" /> mdi mdi-reply
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-reply-all" /> mdi
                            mdi-reply-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-reproduction" /> mdi
                            mdi-reproduction
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-resize-bottom-right" /> mdi
                            mdi-resize-bottom-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-responsive" /> mdi
                            mdi-responsive
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rewind" /> mdi mdi-rewind
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ribbon" /> mdi mdi-ribbon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-road" /> mdi mdi-road
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-road-variant" /> mdi
                            mdi-road-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rocket" /> mdi mdi-rocket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rotate-3d" /> mdi
                            mdi-rotate-3d
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rotate-left" /> mdi
                            mdi-rotate-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rotate-left-variant" /> mdi
                            mdi-rotate-left-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rotate-right" /> mdi
                            mdi-rotate-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rotate-right-variant" /> mdi
                            mdi-rotate-right-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rounded-corner" /> mdi
                            mdi-rounded-corner
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-router-wireless" /> mdi
                            mdi-router-wireless
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-routes" /> mdi mdi-routes
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rowing" /> mdi mdi-rowing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rss" /> mdi mdi-rss
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-rss-box" /> mdi mdi-rss-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ruler" /> mdi mdi-ruler
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-run" /> mdi mdi-run
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sale" /> mdi mdi-sale
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-satellite" /> mdi
                            mdi-satellite
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-satellite-variant" /> mdi
                            mdi-satellite-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-saxophone" /> mdi
                            mdi-saxophone
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-scale" /> mdi mdi-scale
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-scale-balance" /> mdi
                            mdi-scale-balance
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-scale-bathroom" /> mdi
                            mdi-scale-bathroom
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-school" /> mdi mdi-school
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-screen-rotation" /> mdi
                            mdi-screen-rotation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-screen-rotation-lock" /> mdi
                            mdi-screen-rotation-lock
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-screwdriver" /> mdi
                            mdi-screwdriver
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-script" /> mdi mdi-script
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sd" /> mdi mdi-sd
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seal" /> mdi mdi-seal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-flat" /> mdi
                            mdi-seat-flat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-flat-angled" /> mdi
                            mdi-seat-flat-angled
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-individual-suite" /> mdi
                            mdi-seat-individual-suite
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-legroom-extra" /> mdi
                            mdi-seat-legroom-extra
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-legroom-normal" /> mdi
                            mdi-seat-legroom-normal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-legroom-reduced" /> mdi
                            mdi-seat-legroom-reduced
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-recline-extra" /> mdi
                            mdi-seat-recline-extra
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-seat-recline-normal" /> mdi
                            mdi-seat-recline-normal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-security" /> mdi mdi-security
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-security-network" /> mdi
                            mdi-security-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-select" /> mdi mdi-select
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-select-all" /> mdi
                            mdi-select-all
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-select-inverse" /> mdi
                            mdi-select-inverse
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-select-off" /> mdi
                            mdi-select-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-selection" /> mdi
                            mdi-selection
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-send" /> mdi mdi-send
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-serial-port" /> mdi
                            mdi-serial-port
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server" /> mdi mdi-server
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-minus" /> mdi
                            mdi-server-minus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-network" /> mdi
                            mdi-server-network
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-network-off" /> mdi
                            mdi-server-network-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-off" /> mdi
                            mdi-server-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-plus" /> mdi
                            mdi-server-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-remove" /> mdi
                            mdi-server-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-server-security" /> mdi
                            mdi-server-security
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-settings" /> mdi mdi-settings
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-settings-box" /> mdi
                            mdi-settings-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shape-circle-plus" /> mdi
                            mdi-shape-circle-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shape-plus" /> mdi
                            mdi-shape-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shape-polygon-plus" /> mdi
                            mdi-shape-polygon-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shape-rectangle-plus" /> mdi
                            mdi-shape-rectangle-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shape-square-plus" /> mdi
                            mdi-shape-square-plus
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-share" /> mdi mdi-share
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-share-variant" /> mdi
                            mdi-share-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shield" /> mdi mdi-shield
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shield-outline" /> mdi
                            mdi-shield-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shopping" /> mdi mdi-shopping
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shopping-music" /> mdi
                            mdi-shopping-music
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shredder" /> mdi mdi-shredder
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shuffle" /> mdi mdi-shuffle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shuffle-disabled" /> mdi
                            mdi-shuffle-disabled
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-shuffle-variant" /> mdi
                            mdi-shuffle-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sigma" /> mdi mdi-sigma
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sigma-lower" /> mdi
                            mdi-sigma-lower
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sign-caution" /> mdi
                            mdi-sign-caution
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-signal" /> mdi mdi-signal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-signal-variant" /> mdi
                            mdi-signal-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-silverware" /> mdi
                            mdi-silverware
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-silverware-fork" /> mdi
                            mdi-silverware-fork
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-silverware-spoon" /> mdi
                            mdi-silverware-spoon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-silverware-variant" /> mdi
                            mdi-silverware-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sim" /> mdi mdi-sim
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sim-alert" /> mdi
                            mdi-sim-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sim-off" /> mdi mdi-sim-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sitemap" /> mdi mdi-sitemap
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-backward" /> mdi
                            mdi-skip-backward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-forward" /> mdi
                            mdi-skip-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-next" /> mdi
                            mdi-skip-next
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-next-circle" /> mdi
                            mdi-skip-next-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-next-circle-outline" />{" "}
                            mdi mdi-skip-next-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-previous" /> mdi
                            mdi-skip-previous
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-previous-circle" /> mdi
                            mdi-skip-previous-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skip-previous-circle-outline" />{" "}
                            mdi mdi-skip-previous-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skype" /> mdi mdi-skype
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-skype-business" /> mdi
                            mdi-skype-business
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-slack" /> mdi mdi-slack
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sleep" /> mdi mdi-sleep
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sleep-off" /> mdi
                            mdi-sleep-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-smoking" /> mdi mdi-smoking
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-smoking-off" /> mdi
                            mdi-smoking-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-snapchat" /> mdi mdi-snapchat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-snowman" /> mdi mdi-snowman
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-soccer" /> mdi mdi-soccer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sofa" /> mdi mdi-sofa
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort" /> mdi mdi-sort
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort-alphabetical" /> mdi
                            mdi-sort-alphabetical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort-ascending" /> mdi
                            mdi-sort-ascending
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort-descending" /> mdi
                            mdi-sort-descending
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort-numeric" /> mdi
                            mdi-sort-numeric
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sort-variant" /> mdi
                            mdi-sort-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-soundcloud" /> mdi
                            mdi-soundcloud
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-source-branch" /> mdi
                            mdi-source-branch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-source-fork" /> mdi
                            mdi-source-fork
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-source-merge" /> mdi
                            mdi-source-merge
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-source-pull" /> mdi
                            mdi-source-pull
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-speaker" /> mdi mdi-speaker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-speaker-off" /> mdi
                            mdi-speaker-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-speedometer" /> mdi
                            mdi-speedometer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-spellcheck" /> mdi
                            mdi-spellcheck
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-spotify" /> mdi mdi-spotify
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-spotlight" /> mdi
                            mdi-spotlight
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-spotlight-beam" /> mdi
                            mdi-spotlight-beam
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-spray" /> mdi mdi-spray
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-square-inc" /> mdi
                            mdi-square-inc
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-square-inc-cash" /> mdi
                            mdi-square-inc-cash
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stairs" /> mdi mdi-stairs
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-star" /> mdi mdi-star
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-star-circle" /> mdi
                            mdi-star-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-star-half" /> mdi
                            mdi-star-half
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-star-off" /> mdi mdi-star-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-star-outline" /> mdi
                            mdi-star-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-steam" /> mdi mdi-steam
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-steering" /> mdi mdi-steering
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-step-backward" /> mdi
                            mdi-step-backward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-step-backward-2" /> mdi
                            mdi-step-backward-2
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-step-forward" /> mdi
                            mdi-step-forward
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-step-forward-2" /> mdi
                            mdi-step-forward-2
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stethoscope" /> mdi
                            mdi-stethoscope
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sticker" /> mdi mdi-sticker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stocking" /> mdi mdi-stocking
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stop" /> mdi mdi-stop
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stop-circle" /> mdi
                            mdi-stop-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stop-circle-outline" /> mdi
                            mdi-stop-circle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-store" /> mdi mdi-store
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-store-24-hour" /> mdi
                            mdi-store-24-hour
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-stove" /> mdi mdi-stove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-subdirectory-arrow-left" />{" "}
                            mdi mdi-subdirectory-arrow-left
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-subdirectory-arrow-right" />{" "}
                            mdi mdi-subdirectory-arrow-right
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-subway" /> mdi mdi-subway
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sunglasses" /> mdi
                            mdi-sunglasses
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-surround-sound" /> mdi
                            mdi-surround-sound
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-swap-horizontal" /> mdi
                            mdi-swap-horizontal
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-swap-vertical" /> mdi
                            mdi-swap-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-swim" /> mdi mdi-swim
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-switch" /> mdi mdi-switch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sword" /> mdi mdi-sword
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sync" /> mdi mdi-sync
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sync-alert" /> mdi
                            mdi-sync-alert
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-sync-off" /> mdi mdi-sync-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tab" /> mdi mdi-tab
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tab-unselected" /> mdi
                            mdi-tab-unselected
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table" /> mdi mdi-table
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-column-plus-after" />{" "}
                            mdi mdi-table-column-plus-after
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-column-plus-before" />{" "}
                            mdi mdi-table-column-plus-before
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-column-remove" /> mdi
                            mdi-table-column-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-column-width" /> mdi
                            mdi-table-column-width
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-edit" /> mdi
                            mdi-table-edit
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-large" /> mdi
                            mdi-table-large
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-row-height" /> mdi
                            mdi-table-row-height
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-row-plus-after" /> mdi
                            mdi-table-row-plus-after
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-row-plus-before" /> mdi
                            mdi-table-row-plus-before
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-table-row-remove" /> mdi
                            mdi-table-row-remove
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tablet" /> mdi mdi-tablet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tablet-android" /> mdi
                            mdi-tablet-android
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tablet-ipad" /> mdi
                            mdi-tablet-ipad
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tag" /> mdi mdi-tag
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tag-faces" /> mdi
                            mdi-tag-faces
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tag-multiple" /> mdi
                            mdi-tag-multiple
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tag-outline" /> mdi
                            mdi-tag-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tag-text-outline" /> mdi
                            mdi-tag-text-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-target" /> mdi mdi-target
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-taxi" /> mdi mdi-taxi
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-teamviewer" /> mdi
                            mdi-teamviewer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-telegram" /> mdi mdi-telegram
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-television" /> mdi
                            mdi-television
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-television-guide" /> mdi
                            mdi-television-guide
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-temperature-celsius" /> mdi
                            mdi-temperature-celsius
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-temperature-fahrenheit" /> mdi
                            mdi-temperature-fahrenheit
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-temperature-kelvin" /> mdi
                            mdi-temperature-kelvin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tennis" /> mdi mdi-tennis
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tent" /> mdi mdi-tent
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-terrain" /> mdi mdi-terrain
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-test-tube" /> mdi
                            mdi-test-tube
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-text-shadow" /> mdi
                            mdi-text-shadow
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-text-to-speech" /> mdi
                            mdi-text-to-speech
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-text-to-speech-off" /> mdi
                            mdi-text-to-speech-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-textbox" /> mdi mdi-textbox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-texture" /> mdi mdi-texture
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-theater" /> mdi mdi-theater
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-theme-light-dark" /> mdi
                            mdi-theme-light-dark
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thermometer" /> mdi
                            mdi-thermometer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thermometer-lines" /> mdi
                            mdi-thermometer-lines
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thumb-down" /> mdi
                            mdi-thumb-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thumb-down-outline" /> mdi
                            mdi-thumb-down-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thumb-up" /> mdi mdi-thumb-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thumb-up-outline" /> mdi
                            mdi-thumb-up-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-thumbs-up-down" /> mdi
                            mdi-thumbs-up-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ticket" /> mdi mdi-ticket
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ticket-account" /> mdi
                            mdi-ticket-account
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ticket-confirmation" /> mdi
                            mdi-ticket-confirmation
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tie" /> mdi mdi-tie
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timelapse" /> mdi
                            mdi-timelapse
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timer" /> mdi mdi-timer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timer-10" /> mdi mdi-timer-10
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timer-3" /> mdi mdi-timer-3
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timer-off" /> mdi
                            mdi-timer-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timer-sand" /> mdi
                            mdi-timer-sand
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-timetable" /> mdi
                            mdi-timetable
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-toggle-switch" /> mdi
                            mdi-toggle-switch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-toggle-switch-off" /> mdi
                            mdi-toggle-switch-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooltip" /> mdi mdi-tooltip
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooltip-edit" /> mdi
                            mdi-tooltip-edit
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooltip-image" /> mdi
                            mdi-tooltip-image
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooltip-outline" /> mdi
                            mdi-tooltip-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooltip-text" /> mdi
                            mdi-tooltip-text
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tooth" /> mdi mdi-tooth
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tor" /> mdi mdi-tor
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-traffic-light" /> mdi
                            mdi-traffic-light
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-train" /> mdi mdi-train
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tram" /> mdi mdi-tram
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-transcribe" /> mdi
                            mdi-transcribe
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-transcribe-close" /> mdi
                            mdi-transcribe-close
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-transfer" /> mdi mdi-transfer
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-translate" /> mdi
                            mdi-translate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tree" /> mdi mdi-tree
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trello" /> mdi mdi-trello
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trending-down" /> mdi
                            mdi-trending-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trending-neutral" /> mdi
                            mdi-trending-neutral
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trending-up" /> mdi
                            mdi-trending-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-triangle" /> mdi mdi-triangle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-triangle-outline" /> mdi
                            mdi-triangle-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trophy" /> mdi mdi-trophy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trophy-award" /> mdi
                            mdi-trophy-award
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trophy-outline" /> mdi
                            mdi-trophy-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trophy-variant" /> mdi
                            mdi-trophy-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-trophy-variant-outline" /> mdi
                            mdi-trophy-variant-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-truck" /> mdi mdi-truck
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-truck-delivery" /> mdi
                            mdi-truck-delivery
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tshirt-crew" /> mdi
                            mdi-tshirt-crew
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tshirt-v" /> mdi mdi-tshirt-v
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tumblr" /> mdi mdi-tumblr
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tumblr-reblog" /> mdi
                            mdi-tumblr-reblog
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tune" /> mdi mdi-tune
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-tune-vertical" /> mdi
                            mdi-tune-vertical
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-twitch" /> mdi mdi-twitch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-twitter" /> mdi mdi-twitter
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-twitter-box" /> mdi
                            mdi-twitter-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-twitter-circle" /> mdi
                            mdi-twitter-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-twitter-retweet" /> mdi
                            mdi-twitter-retweet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ubuntu" /> mdi mdi-ubuntu
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-umbraco" /> mdi mdi-umbraco
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-umbrella" /> mdi mdi-umbrella
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-umbrella-outline" /> mdi
                            mdi-umbrella-outline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-undo" /> mdi mdi-undo
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-undo-variant" /> mdi
                            mdi-undo-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-ungroup" /> mdi mdi-ungroup
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-untappd" /> mdi mdi-untappd
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-upload" /> mdi mdi-upload
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-usb" /> mdi mdi-usb
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-arrange-above" /> mdi
                            mdi-vector-arrange-above
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-arrange-below " /> mdi
                            mdi-vector-arrange-below
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-circle" /> mdi
                            mdi-vector-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-circle-variant" /> mdi
                            mdi-vector-circle-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-combine" /> mdi
                            mdi-vector-combine
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-curve" /> mdi
                            mdi-vector-curve
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-difference" /> mdi
                            mdi-vector-difference
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-difference-ab" /> mdi
                            mdi-vector-difference-ab
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-difference-ba" /> mdi
                            mdi-vector-difference-ba
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-intersection" /> mdi
                            mdi-vector-intersection
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-line" /> mdi
                            mdi-vector-line
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-point" /> mdi
                            mdi-vector-point
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-polygon" /> mdi
                            mdi-vector-polygon
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-polyline " /> mdi
                            mdi-vector-polyline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-rectangle" /> mdi
                            mdi-vector-rectangle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-selection " /> mdi
                            mdi-vector-selection
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-square" /> mdi
                            mdi-vector-square
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-triangle" /> mdi
                            mdi-vector-triangle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vector-union" /> mdi
                            mdi-vector-union
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vibrate " /> mdi mdi-vibrate
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-video" /> mdi mdi-video
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-video-off" /> mdi
                            mdi-video-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-video-switch" /> mdi
                            mdi-video-switch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-agenda" /> mdi
                            mdi-view-agenda
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-array" /> mdi
                            mdi-view-array
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-carousel" /> mdi
                            mdi-view-carousel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-column" /> mdi
                            mdi-view-column
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-dashboard" /> mdi
                            mdi-view-dashboard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-day" /> mdi mdi-view-day
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-grid" /> mdi
                            mdi-view-grid
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-headline" /> mdi
                            mdi-view-headline
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-list" /> mdi
                            mdi-view-list
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-module" /> mdi
                            mdi-view-module
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-quilt" /> mdi
                            mdi-view-quilt
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-stream" /> mdi
                            mdi-view-stream
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-view-week" /> mdi
                            mdi-view-week
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vimeo " /> mdi mdi-vimeo
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-violin" /> mdi mdi-violin
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vk" /> mdi mdi-vk
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vk-box" /> mdi mdi-vk-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vk-circle" /> mdi
                            mdi-vk-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vlc" /> mdi mdi-vlc
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-voice" /> mdi mdi-voice
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-voicemail" /> mdi
                            mdi-voicemail
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-volume-high" /> mdi
                            mdi-volume-high
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-volume-low" /> mdi
                            mdi-volume-low
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-volume-medium" /> mdi
                            mdi-volume-medium
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-volume-off" /> mdi
                            mdi-volume-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-vpn" /> mdi mdi-vpn
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-walk" /> mdi mdi-walk
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wallet" /> mdi mdi-wallet
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wallet-giftcard" /> mdi
                            mdi-wallet-giftcard
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wallet-membership" /> mdi
                            mdi-wallet-membership
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wallet-travel" /> mdi
                            mdi-wallet-travel
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wan" /> mdi mdi-wan
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-watch" /> mdi mdi-watch
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-watch-export" /> mdi
                            mdi-watch-export
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-watch-import" /> mdi
                            mdi-watch-import
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-water" /> mdi mdi-water
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-water-off" /> mdi
                            mdi-water-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-water-percent" /> mdi
                            mdi-water-percent
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-water-pump" /> mdi
                            mdi-water-pump
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-watermark" /> mdi
                            mdi-watermark
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-cloudy" /> mdi
                            mdi-weather-cloudy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-fog" /> mdi
                            mdi-weather-fog
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-hail" /> mdi
                            mdi-weather-hail
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-lightning" /> mdi
                            mdi-weather-lightning
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-night" /> mdi
                            mdi-weather-night
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-partlycloudy" /> mdi
                            mdi-weather-partlycloudy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-pouring" /> mdi
                            mdi-weather-pouring
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-rainy" /> mdi
                            mdi-weather-rainy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-snowy" /> mdi
                            mdi-weather-snowy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-sunny" /> mdi
                            mdi-weather-sunny
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-sunset " /> mdi
                            mdi-weather-sunset
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-sunset-down" /> mdi
                            mdi-weather-sunset-down
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-sunset-up" /> mdi
                            mdi-weather-sunset-up
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-windy" /> mdi
                            mdi-weather-windy
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weather-windy-variant" /> mdi
                            mdi-weather-windy-variant
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-web" /> mdi mdi-web
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-webcam" /> mdi mdi-webcam
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-webhook" /> mdi mdi-webhook
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wechat" /> mdi mdi-wechat
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weight" /> mdi mdi-weight
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-weight-kilogram" /> mdi
                            mdi-weight-kilogrammdi-whatsapp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-whatsapp" /> mdi mdi-whatsapp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wheelchair-accessibility " />{" "}
                            mdi mdi-wheelchair-accessibility
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-white-balance-auto" /> mdi
                            mdi-white-balance-auto
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-white-balance-incandescent " />{" "}
                            mdi mdi-white-balance-incandescent
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-white-balance-iridescent" />{" "}
                            mdi mdi-white-balance-iridescent
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-white-balance-sunny" /> mdi
                            mdi-white-balance-sunny
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wifi" /> mdi mdi-wifi
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wifi-off" /> mdi mdi-wifi-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wii" /> mdi mdi-wii
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wikipedia" /> mdi
                            mdi-wikipedia
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-close" /> mdi
                            mdi-window-close
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-closed" /> mdi
                            mdi-window-closed
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-maximize" /> mdi
                            mdi-window-maximize
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-minimize" /> mdi
                            mdi-window-minimize
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-open" /> mdi
                            mdi-window-open
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-window-restore" /> mdi
                            mdi-window-restore
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-windows" /> mdi mdi-windows
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wordpress" /> mdi
                            mdi-wordpress
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-worker" /> mdi mdi-worker
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wrap " /> mdi mdi-wrap
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wrench" /> mdi mdi-wrench
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-wunderlist" /> mdi
                            mdi-wunderlist
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xaml" /> mdi mdi-xaml
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xbox" /> mdi mdi-xbox
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xbox-controller" /> mdi
                            mdi-xbox-controller
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xbox-controller-off" /> mdi
                            mdi-xbox-controller-off
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xda" /> mdi mdi-xda
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xing" /> mdi mdi-xing
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xing-box" /> mdi mdi-xing-box
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xing-circle" /> mdi
                            mdi-xing-circle
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-xml" /> mdi mdi-xml
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-yeast" /> mdi mdi-yeast
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-yelp" /> mdi mdi-yelp
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-youtube-play" /> mdi
                            mdi-youtube-play
                          </div>
                          <div className="col-sm-6 col-md-4 col-lg-3">
                            <i className="mdi mdi-zip-box" /> mdi mdi-zip-box
                          </div>
                        </div>
                      </div>
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

export default mdi;