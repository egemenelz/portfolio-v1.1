import React from "react";
import { Link, NavLink } from "react-router-dom";
import './style.css'

const Navigation = () => {

    return (
        <header className="flex-row px-1">
            <Link to={'/'}>
                Egemen Eliz
            </Link>
            <nav className="ml-a">
                <NavLink exact="true" activeclassname="active" to="/">
                    <span>About Me</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/portfolio">
                    <span>Portfolio</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/contact">
                    <span>Contact</span>
                </NavLink>
                <NavLink exact="true" activeclassname="active" to="/resume">
                    <span>Resume</span>
                </NavLink>
            </nav>
        </header >
    );
}
export default Navigation;