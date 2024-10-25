import React from 'react'
import PropTypes from 'prop-types'
// import { Link } from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  bg-${props.mode} border-body`} data-bs-theme={props.mode}  >
    <div className="container-fluid">
      <a className="navbar-brand" href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-Link active" aria-current="page" href="/">Home</a>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-Link" to="/about">{props.aboutText}</Link>
          </li> */}
        </ul>
        <div id='onModeChange' style={{display:"none"}}>
            <button type='button' onClick={() => props.colorChange("#252551","primary")} className="btn btn-outline-primary mx-1">Color Blue</button>
            <button type='button' onClick={() => props.colorChange("#254c25","success")} className="btn btn-outline-success mx-1">Color Green</button>
            <button type='button' onClick={() => props.colorChange("#7f7f2d","warning")} className="btn btn-outline-warning mx-1">Color Yellow</button>
            <button type='button' onClick={() => props.colorChange("#5a2a2a","danger")} className="btn btn-outline-danger mx-1">Color Red</button>
          </div>
        <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`} >
  <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{props.modeText}</label>
</div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes = {title:PropTypes.string,
                   aboutText:PropTypes.string}

//when we don't supply our props in app.js these default props come in handy
// Navbar.defaultProps = {
//     title: "Enter title here",
//     aboutText: "Enter about us here"
// }                   