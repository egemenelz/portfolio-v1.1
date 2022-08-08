import React from "react";
import Navigation from '../Navigation';
import Footer from '../Footer';
import { Outlet } from "react-router-dom";
import './style.css'

const Layout = () => {
    return (
        <div className="App">
            <Navigation />
            <div className="page">
                <span className="tags top-tags-html">&lt;html&gt;</span>
                <span className="tags top-tags">&lt;body&gt;</span>

                <Outlet />
                <span className="tags bottom-tags">
                    &lt;/body&gt;
                    <br />
                    <span className="tags bottom-tag-html">&lt;/html&gt;</span>
                </span>
            </div>

            <Footer />
        </div>
    )
}

export default Layout;