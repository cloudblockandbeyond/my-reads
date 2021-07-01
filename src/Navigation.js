import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const element = (
        <div className="app-header">
            <nav className="navbar navbar-expand-sm navbar-dark">
                <Link className="navbar-brand" to={ { pathname: "/about" } }>
                    <img className="img-fluid img-thumbnail app-logo" src={ `${process.env.PUBLIC_URL}/applogo.png` } alt="applogo"></img>
                </Link>
                <h4 className="text-white">MyReads</h4>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="collapsibleNavbar">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to={ { pathname: "/" }}>Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={ { pathname: "/search" }}>Search</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    );

    return element;
};

export default Navigation;
