import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import {
    faGithub
} from '@fortawesome/free-brands-svg-icons'
import coffeeBR from "../../assets/images/coffee-br.png"
import musicFind from "../../assets/images/music-find.png"
import runBuddy from "../../assets/images/run-buddy.png"
import techBlog from "../../assets/images/tech-blog.png"
import weatherDash from "../../assets/images/weather-dashboard.png"
import workday from "../../assets/images/workday-scheduler.png"
import './style.css'


const Project = () => {
    return (
        <section id="projects">
            <h1>Projects</h1>
            <div className="grid-container">
                <div className="grid-item1">
                    <div className="image-container">
                        <img src={coffeeBR} className="image-effect project-image" alt="project-image" />
                        <div className="image_overlay">
                            <div className="image_icon">
                                <a href="/#" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                            </div>
                            <div className="image_title">
                                <a href="https://github.com/Abstrack5/Coffee-br" target="_blank" rel="noopener noreferrer">Coffee BR</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item2">
                    <div className="image-container">
                        <img src={musicFind} className="image-effect project-image" alt="Music Find Image" />
                        <div className="image_overlay">
                            <div className="image_icon"><a href="https://github.com/justjulio95/music-find" target="blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                            </a>
                            </div>
                            <div className="image_title"><a href="https://justjulio95.github.io/music-find/" target="_blank" rel="noopener noreferrer">Music
                                Find</a></div>
                        </div>
                    </div>

                </div>
                <div className="grid-item3">
                    <div className="image-container">
                        <img src={runBuddy} className="image-effect project-image" alt="Run Buddy Image" />
                        <div className="image_overlay">
                            <div className="image_icon">
                                <a href="https://github.com/egemenelz/RunBuddy" target="blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                            </div>
                            <div className="image_title">
                                <a href="https://egemenelz.github.io/RunBuddy/" target="_blank" rel="noopener noreferrer">RUN BUDDY APP</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item1">
                    <div className="image-container">
                        <img src={techBlog} className="image-effect project-image" alt="Tech blog image" />
                        <div className="image_overlay">
                            <div className="image_icon">
                                <a href="https://github.com/egemenelz/tech-blog" target="blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                            </div>
                            <div className="image_title">
                                <a href="https://fierce-journey-75657.herokuapp.com/" target="_blank" rel="noopener noreferrer">Tech Blog</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item2">
                    <div className="image-container">
                        <img src={weatherDash} className="image-effect project-image" alt="weather dashboard img" />
                        <div className="image_overlay">
                            <div className="image_icon">
                                <a href="https://github.com/egemenelz/Weather-Dashboard" target="blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                            </div>
                            <div className="image_title">
                                <a href="https://egemenelz.github.io/Weather-Dashboard/" target="_blank" rel="noopener noreferrer" >Weather Dashboard</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="grid-item3">
                    <div className="image-container">
                        <img src={workday} className="image-effect project-image" alt="Workday Scheduler Image" />
                        <div className="image_overlay">
                            <div className="image_icon">
                                <a href="https://github.com/egemenelz/Work-Day-Scheduler" target="blank" rel="noopener noreferrer">
                                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e" />
                                </a>
                            </div>
                            <div className="image_title">
                                <a href="https://egemenelz.github.io/Work-Day-Scheduler/" target="_blank" rel="noopener noreferrer">Workday Scheduler</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Project;