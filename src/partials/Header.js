import React from "react";
import { Link } from "react-router-dom";

const Header =  () => (
            <nav className="navbar navbar-expand-md navbar-light" style={{backgroundColor: "#80FF00"}}>
            <Link to="/"><a className="navbar-brand" style={{color: "#fff"}}>Green Energy</a></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarResponsive">
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to="/"><a className="nav-link">Home</a></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-item" to="/about">
                            <a className="nav-link">
                                About
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/services">
                            <a className="nav-link">
                                Services
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/projects">
                            <a className="nav-link">
                                Projects
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/contact">
                            <a className="nav-link">
                                Contact
                            </a>
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/careers">
                            <a className="nav-link">
                                Careers
                            </a>
                        </Link>
                    </li>
        
        
                </ul>
            </div>
        </nav>
    )


export default Header;