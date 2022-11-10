import React from 'react'
import { Link } from 'react-router-dom';

const buttons = () => {
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
                <a className="navbar-brand brand-logo" href="../../index.html">
                  <img src="../../images/logo.svg" alt="logo" />
                </a>
                <a
                  className="navbar-brand brand-logo-mini"
                  href="../../index.html"
                >
                  <img src="../../images/logo-mini.svg" alt="logo" />
                </a>
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
                  </Link >
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
                  <a
                    className="nav-link active"
                    id="todo-tab"
                    data-bs-toggle="tab"
                    href="#todo-section"
                    role="tab"
                    aria-controls="todo-section"
                    aria-expanded="true"
                  >
                    TO DO LIST
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    id="chats-tab"
                    data-bs-toggle="tab"
                    href="#chats-section"
                    role="tab"
                    aria-controls="chats-section"
                  >
                    CHATS
                  </a>
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
                  <a className="nav-link" href="../../index.html">
                    <i className="mdi mdi-grid-large menu-icon" />
                    <span className="menu-title">Dashboard</span>
                  </a>
                </li>
                <li className="nav-item nav-category">UI Elements</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#ui-basic"
                    aria-expanded="false"
                    aria-controls="ui-basic"
                  >
                    <i className="menu-icon mdi mdi-floor-plan" />
                    <span className="menu-title">UI Elements</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="ui-basic">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/ui-features/buttons.html"
                        >
                          Buttons
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/ui-features/dropdowns.html"
                        >
                          Dropdowns
                        </a>
                      </li>
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/ui-features/typography.html"
                        >
                          Typography
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">Forms and Datas</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#form-elements"
                    aria-expanded="false"
                    aria-controls="form-elements"
                  >
                    <i className="menu-icon mdi mdi-card-text-outline" />
                    <span className="menu-title">Form elements</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="form-elements">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        <a
                          className="nav-link"
                          href="../../pages/forms/basic_elements.html"
                        >
                          Basic Elements
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#charts"
                    aria-expanded="false"
                    aria-controls="charts"
                  >
                    <i className="menu-icon mdi mdi-chart-line" />
                    <span className="menu-title">Charts</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="charts">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/charts/chartjs.html"
                        >
                          ChartJs
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#tables"
                    aria-expanded="false"
                    aria-controls="tables"
                  >
                    <i className="menu-icon mdi mdi-table" />
                    <span className="menu-title">Tables</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="tables">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/tables/basic-table.html"
                        >
                          Basic table
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#icons"
                    aria-expanded="false"
                    aria-controls="icons"
                  >
                    <i className="menu-icon mdi mdi-layers-outline" />
                    <span className="menu-title">Icons</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="icons">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/icons/mdi.html"
                        >
                          Mdi icons
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">pages</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="collapse"
                    href="#auth"
                    aria-expanded="false"
                    aria-controls="auth"
                  >
                    <i className="menu-icon mdi mdi-account-circle-outline" />
                    <span className="menu-title">User Pages</span>
                    <i className="menu-arrow" />
                  </a>
                  <div className="collapse" id="auth">
                    <ul className="nav flex-column sub-menu">
                      <li className="nav-item">
                        {" "}
                        <a
                          className="nav-link"
                          href="../../pages/samples/login.html"
                        >
                          {" "}
                          Login{" "}
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="nav-item nav-category">help</li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    href="http://bootstrapdash.com/demo/star-admin2-free/docs/documentation.html"
                  >
                    <i className="menu-icon mdi mdi-file-document" />
                    <span className="menu-title">Documentation</span>
                  </a>
                </li>
              </ul>
            </nav>
            {/* partial */}
            <div className="main-panel">
              <div className="content-wrapper">
                <div className="row">
                  <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">Single color buttons</h4>
                            <p className="card-description">
                              Add class{" "}
                              <code>
                                .btn-{"{"}color{"}"}
                              </code>{" "}
                              for buttons in theme colors
                            </p>
                            <div className="template-demo">
                              <button type="button" className="btn btn-primary">
                                Primary
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary"
                              >
                                Secondary
                              </button>
                              <button type="button" className="btn btn-success">
                                Success
                              </button>
                              <button type="button" className="btn btn-danger">
                                Danger
                              </button>
                              <button type="button" className="btn btn-warning">
                                Warning
                              </button>
                              <button type="button" className="btn btn-info">
                                Info
                              </button>
                              <button type="button" className="btn btn-light">
                                Light
                              </button>
                              <button type="button" className="btn btn-dark">
                                Dark
                              </button>
                              <button type="button" className="btn btn-link">
                                Link
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">Rounded buttons</h4>
                            <p className="card-description">
                              Add class <code>.btn-rounded</code>
                            </p>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-primary btn-rounded btn-fw"
                              >
                                Primary
                              </button>
                              <button
                                type="button"
                                className="btn btn-secondary btn-rounded btn-fw"
                              >
                                Secondary
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-rounded btn-fw"
                              >
                                Success
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-rounded btn-fw"
                              >
                                Danger
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-rounded btn-fw"
                              >
                                Warning
                              </button>
                              <button
                                type="button"
                                className="btn btn-info btn-rounded btn-fw"
                              >
                                Info
                              </button>
                              <button
                                type="button"
                                className="btn btn-light btn-rounded btn-fw"
                              >
                                Light
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark btn-rounded btn-fw"
                              >
                                Dark
                              </button>
                              <button
                                type="button"
                                className="btn btn-link btn-rounded btn-fw"
                              >
                                Link
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 grid-margin stretch-card">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">Outlined buttons</h4>
                            <p className="card-description">
                              Add class{" "}
                              <code>
                                .btn-outline-{"{"}color{"}"}
                              </code>{" "}
                              for outline buttons
                            </p>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-fw"
                              >
                                Primary
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-fw"
                              >
                                Secondary
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-success btn-fw"
                              >
                                Success
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-danger btn-fw"
                              >
                                Danger
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-warning btn-fw"
                              >
                                Warning
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-info btn-fw"
                              >
                                Info
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-light btn-fw"
                              >
                                Light
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-dark btn-fw"
                              >
                                Dark
                              </button>
                              <button
                                type="button"
                                className="btn btn-link btn-fw"
                              >
                                Link
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">Inverse buttons</h4>
                            <p className="card-description">
                              Add class{" "}
                              <code>
                                .btn-inverse-{"{"}color{"}"} for inverse buttons
                              </code>
                            </p>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-inverse-primary btn-fw"
                              >
                                Primary
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-secondary btn-fw"
                              >
                                Secondary
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-success btn-fw"
                              >
                                Success
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-danger btn-fw"
                              >
                                Danger
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-warning btn-fw"
                              >
                                Warning
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-info btn-fw"
                              >
                                Info
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-light btn-fw"
                              >
                                Light
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-dark btn-fw"
                              >
                                Dark
                              </button>
                              <button
                                type="button"
                                className="btn btn-link btn-fw"
                              >
                                Link
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-8 grid-margin stretch-card">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-7">
                          <div className="card-body">
                            <h4 className="card-title">Icon Buttons</h4>
                            <p className="card-description">
                              Add class <code>.btn-icon</code> for buttons with
                              only icons
                            </p>
                            <div className="template-demo d-flex justify-content-between flex-nowrap">
                              <button
                                type="button"
                                className="btn btn-primary btn-rounded btn-icon"
                              >
                                <i className="ti-home" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark btn-rounded btn-icon"
                              >
                                <i className="ti-world" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-danger btn-rounded btn-icon"
                              >
                                <i className="ti-email" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-info btn-rounded btn-icon"
                              >
                                <i className="ti-star" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-rounded btn-icon"
                              >
                                <i className="ti-location-pin" />
                              </button>
                            </div>
                            <div className="template-demo d-flex justify-content-between flex-nowrap">
                              <button
                                type="button"
                                className="btn btn-inverse-primary btn-rounded btn-icon"
                              >
                                <i className="ti-home" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-dark btn-icon"
                              >
                                <i className="ti-world" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-danger btn-icon"
                              >
                                <i className="ti-email" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-info btn-icon"
                              >
                                <i className="ti-star" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-inverse-success btn-icon"
                              >
                                <i className="ti-location-pin" />
                              </button>
                            </div>
                            <div className="template-demo d-flex justify-content-between flex-nowrap mt-4">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-heart text-danger" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-music-alt text-dark" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-star text-primary" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-bar-chart-alt text-info" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-stats-up text-success" />
                              </button>
                            </div>
                            <div className="template-demo d-flex justify-content-between flex-nowrap">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-heart" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-music-alt" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-star" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-bar-chart-alt" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-rounded btn-icon"
                              >
                                <i className="ti-stats-up" />
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-5">
                          <div className="card-body">
                            <h4 className="card-title">Button Size</h4>
                            <p className="card-description">
                              Use class{" "}
                              <code>
                                .btn-{"{"}size{"}"}
                              </code>
                            </p>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-lg"
                              >
                                btn-lg
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-md"
                              >
                                btn-md
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-sm"
                              >
                                btn-sm
                              </button>
                            </div>
                            <div className="template-demo mt-4">
                              <button
                                type="button"
                                className="btn btn-danger btn-lg"
                              >
                                btn-lg
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-md"
                              >
                                btn-md
                              </button>
                              <button
                                type="button"
                                className="btn btn-primary btn-sm"
                              >
                                btn-sm
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Block buttons</h4>
                        <p className="card-description">
                          Add class <code>.btn-block</code>
                        </p>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-info btn-lg btn-block"
                          >
                            Block buttons
                            <i className="ti-menu float-right" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-dark btn-lg btn-block"
                          >
                            Block buttons
                          </button>
                          <button
                            type="button"
                            className="btn btn-primary btn-lg btn-block"
                          >
                            <i className="ti-user" />
                            Block buttons
                          </button>
                          <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg btn-block"
                          >
                            Block buttons
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 grid-margin">
                    <div className="card">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">Button groups</h4>
                            <p className="card-description">
                              Wrap a series of buttons with <code>.btn</code>
                              in <code>.btn-group</code>
                            </p>
                            <div className="template-demo">
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  3
                                </button>
                              </div>
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-heart" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-calendar" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-time" />
                                </button>
                              </div>
                            </div>
                            <div className="template-demo">
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  1
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  2
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  3
                                </button>
                              </div>
                              <div
                                className="btn-group"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <i className="ti-heart" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <i className="ti-calendar" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-primary"
                                >
                                  <i className="ti-time" />
                                </button>
                              </div>
                            </div>
                            <div className="template-demo mt-4">
                              <div
                                className="btn-group-vertical"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-upload" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-split-v" />
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  <i className="ti-download" />
                                </button>
                              </div>
                              <div
                                className="btn-group-vertical"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Default
                                </button>
                                <div className="btn-group">
                                  <button
                                    type="button"
                                    className="btn btn-outline-secondary dropdown-toggle"
                                    data-bs-toggle="dropdown"
                                  >
                                    Dropdown
                                  </button>
                                  <div className="dropdown-menu">
                                    <Link className="dropdown-item">Go back</Link>
                                    <Link className="dropdown-item">Delete</Link>
                                    <Link className="dropdown-item">Swap</Link>
                                  </div>
                                </div>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Default
                                </button>
                              </div>
                              <div
                                className="btn-group-vertical"
                                role="group"
                                aria-label="Basic example"
                              >
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Top
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Middle
                                </button>
                                <button
                                  type="button"
                                  className="btn btn-outline-secondary"
                                >
                                  Bottom
                                </button>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="card-body">
                            <h4 className="card-title">
                              Button with text and icon
                            </h4>
                            <p className="card-description">
                              Wrap icon and text inside{" "}
                              <code>.btn-icon-text</code> and use{" "}
                              <code>.btn-icon-prepend</code>
                              or <code>.btn-icon-append</code> for icon tags
                            </p>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-primary btn-icon-text"
                              >
                                <i className="ti-file btn-icon-prepend" />
                                Submit
                              </button>
                              <button
                                type="button"
                                className="btn btn-dark btn-icon-text"
                              >
                                Edit
                                <i className="ti-file btn-icon-append" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-success btn-icon-text"
                              >
                                <i className="ti-alert btn-icon-prepend" />
                                Warning
                              </button>
                            </div>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-danger btn-icon-text"
                              >
                                <i className="ti-upload btn-icon-prepend" />
                                Upload
                              </button>
                              <button
                                type="button"
                                className="btn btn-info btn-icon-text"
                              >
                                Print
                                <i className="ti-printer btn-icon-append" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-warning btn-icon-text"
                              >
                                <i className="ti-reload btn-icon-prepend" />
                                Reset
                              </button>
                            </div>
                            <div className="template-demo mt-2">
                              <button
                                type="button"
                                className="btn btn-outline-primary btn-icon-text"
                              >
                                <i className="ti-file btn-icon-prepend" />
                                Submit
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-secondary btn-icon-text"
                              >
                                Edit
                                <i className="ti-file btn-icon-append" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-success btn-icon-text"
                              >
                                <i className="ti-alert btn-icon-prepend" />
                                Warning
                              </button>
                            </div>
                            <div className="template-demo">
                              <button
                                type="button"
                                className="btn btn-outline-danger btn-icon-text"
                              >
                                <i className="ti-upload btn-icon-prepend" />
                                Upload
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-info btn-icon-text"
                              >
                                Print
                                <i className="ti-printer btn-icon-append" />
                              </button>
                              <button
                                type="button"
                                className="btn btn-outline-warning btn-icon-text"
                              >
                                <i className="ti-reload btn-icon-prepend" />
                                Reset
                              </button>
                            </div>
                            <div className="template-demo mt-2">
                              <button className="btn btn-outline-dark btn-icon-text">
                                <i className="ti-apple btn-icon-prepend" />
                                <span className="d-inline-block text-left">
                                  <small className="fw-light d-block">
                                    Available on the
                                  </small>
                                  App Store
                                </span>
                              </button>
                              <button className="btn btn-outline-dark btn-icon-text">
                                <i className="ti-android btn-icon-prepend" />
                                <span className="d-inline-block text-left">
                                  <small className="fw-light d-block">
                                    Get it on the
                                  </small>
                                  Google Play
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Social Icon Buttons</h4>
                        <p className="card-description">
                          Add class <code>.btn-social-icon</code>
                        </p>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-facebook"
                          >
                            <i className="ti-facebook" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-youtube"
                          >
                            <i className="ti-youtube" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-twitter"
                          >
                            <i className="ti-twitter-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-dribbble"
                          >
                            <i className="ti-dribbble" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-linkedin"
                          >
                            <i className="ti-linkedin" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-outline-google"
                          >
                            <i className="ti-google" />
                          </button>
                        </div>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-social-icon btn-facebook"
                          >
                            <i className="ti-facebook" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-youtube"
                          >
                            <i className="ti-youtube" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-twitter"
                          >
                            <i className="ti-twitter-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-dribbble"
                          >
                            <i className="ti-dribbble" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-linkedin"
                          >
                            <i className="ti-linkedin" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-google"
                          >
                            <i className="ti-google" />
                          </button>
                        </div>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-social-icon btn-facebook btn-rounded"
                          >
                            <i className="ti-facebook" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-youtube btn-rounded"
                          >
                            <i className="ti-youtube" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-twitter btn-rounded"
                          >
                            <i className="ti-twitter-alt" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-dribbble btn-rounded"
                          >
                            <i className="ti-dribbble" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-linkedin btn-rounded"
                          >
                            <i className="ti-linkedin" />
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon btn-google btn-rounded"
                          >
                            <i className="ti-google" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6 grid-margin stretch-card">
                    <div className="card">
                      <div className="card-body">
                        <h4 className="card-title">Social button with text</h4>
                        <p className="card-description">
                          Add class <code>.btn-social-icon-text</code>
                        </p>
                        <div className="template-demo">
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-facebook"
                          >
                            <i className="ti-facebook" />
                            Facebook
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-youtube"
                          >
                            <i className="ti-youtube" />
                            Youtube
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-twitter"
                          >
                            <i className="ti-twitter-alt" />
                            Twitter
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-dribbble"
                          >
                            <i className="ti-dribbble" />
                            Dribbble
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-linkedin"
                          >
                            <i className="ti-linkedin" />
                            Linkedin
                          </button>
                          <button
                            type="button"
                            className="btn btn-social-icon-text btn-google"
                          >
                            <i className="ti-google" />
                            Google
                          </button>
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

export default buttons;