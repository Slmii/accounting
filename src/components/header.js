import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <nav className="navbar sticky-top navbar-expand-md navbar-dark bg-dark">        
        <Link to='/' style={{ color: 'white' }} className="navbar-brand" >
            Home
        </Link>
        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#collapsingNavbar" aria-controls="collapsingNavbar" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsingNavbar">
            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/add" activeClassName="is-active" >Create</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/account" activeClassName="is-active">My Account</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/about" activeClassName="is-active">About</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/help" activeClassName="is-active">Help</NavLink>
                </li>
            </ul>
        </div>        
    </nav>
);

export default Header;