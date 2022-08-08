import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    faLinkedin,
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import './style.css'

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <ul className="flex-row">
                <li className="mx-2">
                    <p> &copy;{currentYear} Egemen Eliz</p>

                </li>
                <li className="mx-2">
                    <a href="https://www.linkedin.com/in/egemeneliz/" target="blank">
                        <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" />
                    </a>
                </li>
                <li className="mx-2">
                    <a href="https://github.com/egemenelz" target="blank">
                        <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                    </a>
                </li>
            </ul>
        </footer>
    );
}
export default Footer;