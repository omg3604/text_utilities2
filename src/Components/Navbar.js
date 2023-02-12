import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
export default function Navbar(props) {


    return (
        <div>
            <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} bg-gradient`}>
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">{props.title}</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" to="/about">About</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className={`btn btn-outline-${props.mode==='dark'? 'light' : 'dark'} border border-${props.mode==='dark'? 'light' : 'dark'}`} type="submit">Search</button>
                        </form>
                        <div className={`custom-control custom-switch mx-2 border border-${props.mode==='dark'? 'light' : 'dark'} rounded px-2 pt-1`}>
                            <input type="checkbox" className="custom-control-input" onClick={props.toggleMode} id="customSwitch1"></input>
                                <label className={`custom-control-label text-${props.mode==='dark'? 'light' : 'dark'} px-1`} htmlFor="customSwitch1"><h6>Enable {props.mode==='dark'? 'light' : 'dark'} Mode</h6></label>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}

// Declaring the data types of props received by the Component, values of other types if passed raises an error in console.
// marking them as required, if marked props are not passed and no deaultprops are present and it raises an error.
Navbar.propTypes = {
    title: PropTypes.string.isRequired
}

// Initializing default proptype values to props , if no value has been provided to the component then these values will be used.
Navbar.defaultProps = {
    title: "Default title"
};