import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Link, useLocation } from 'react-router-dom'


export default function Navbar(props) {

    let location = useLocation();

    useEffect(() => {
        console.log(location.pathname);
    },[location]) 

  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <div className="navbar-brand">{props.title}</div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/textwork" ? "active" : " "}`} aria-current="page" to="/textwork">Home</Link>
          </li>
          <li className="nav-item">
            <Link className={`nav-link ${location.pathname === "/about" ? "active" : " "}`} to="/about">{props.aboutText}</Link>
          </li>
        </ul>
        <div className={`form-check form-switch text-${(props.mode)==="light"? "dark" : "light"}`}>
          <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable {(props.mode)==="light"? "dark" : "light"}mode</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string.isRequired
}

Navbar.defaultProps = {
    title : "Set title here",
    aboutText : "About Text here"
}