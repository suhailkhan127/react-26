import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from "react-router-dom";

export default function Navbar(props) {
    // console.log("Navbar 4 Rendered"); 

  return (
    <header className="">
        <nav className={`navbar navbar-expand-lg navbar-${props.applyMode} bg-${props.applyMode}`}>
          <div className="container-fluid">
            {/* <Link className="navbar-brand" to="/">{props.title}</Link> */}
            <a className="navbar-brand" href="#">{props.title}</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"> 
                  {/* <Link to="/about" className="nav-link" >{props.homeNavlink}</Link> */}
                  <a href="#" className="nav-link" >{props.homeNavlink}</a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link" >TextForm</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="/">Action</a></li>
                    <li><a className="dropdown-item" href="/">Another action</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="/">Something else here</a></li>
                  </ul>
                </li>
              </ul>
              
              <form className="d-flex" role="search"> 
                <div className="form-check form-switch">
                  <input className="form-check-input" onClick={props.toggleMode}  type="checkbox" role="switch" id="switchCheckDefault" />
                  <label className={`form-check-label text-${props.applyMode==='light'?'dark':'light'}`} htmlFor="switchCheckDefault">Enable Dark Mode</label>
                </div>
                {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success" type="submit">Search</button> */}
              </form>
            </div>
          </div>
        </nav>
    </header>
  )
}


Navbar.propTypes  = {
    title: PropTypes.string.isRequired,
    homeNavlink: PropTypes.string
}


// Specifies the default values for props:
// Navbar.defaultProps = {
//   title: 'Stranger',
//   homeNavlink: 'Default Link Value'
// };






