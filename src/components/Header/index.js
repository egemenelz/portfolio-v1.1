import React from "react";
import { Link } from "react-router-dom";
import './style.css'

const Header = () => {
    return (
        <section className="text-zone">
            <article id="about-me" class="about-me">
                <h1>Hi, My name is Egemen Eliz.</h1>
                <p>
                    I'm a web designer / developer based in Miami, Florida. I have a passion for web development and love to
                    create
                    for web and mobile devices.
                    <Link to={'/contact'} className='flat-button'>CONTACT ME</Link>
                </p>
            </article>
        </section>
    );
}
export default Header;