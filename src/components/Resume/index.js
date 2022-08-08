import React from "react";
import './style.css'
const Resume = () => {
    return (
        <section>
            <h1>Resume</h1>

            <h4>Download my <a>resume</a></h4>
            <div className="grid-container">
                <div className="res-grid-item1">
                    <h3>Front-end Proficiencies</h3>
                    <ol>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>jQuery</li>
                        <li>Responsive Design</li>
                        <li>React</li>
                        <li>Bootstrap</li>
                    </ol>
                </div>
                <div className="res-grid-item2">
                    <h3>Back-end Proficiencies</h3>
                    <ol>
                        <li>API's</li>
                        <li>Node</li>
                        <li>Express</li>
                        <li>MySQL, Seqolize</li>
                        <li>MongoDB, Mongoose</li>
                        <li>REST</li>
                        <li>GraphQL</li>
                    </ol>
                </div>
            </div>
        </section>

    );
}
export default Resume;