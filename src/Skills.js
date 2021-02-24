import React from 'react'
import HeadingContent from './HeadingContent'
import "./Skills.css"
function Skills() {
    return (
        <div id="skills">
            <HeadingContent title="SKILLS" />
            <div className="skills__container">
                <div className="skills__box">
                    <div className="skills__box__section">
                        <h2>PROGRAMMING LANGUAGES</h2>
                        <ul>
                            <li>C#, Java</li>
                            <li>HTML, CSS</li>
                        </ul>
                        <br/>
                        <h2>FRAMEWORKS & PLATFORMS</h2>
                        <ul>
                            <li>ASP.NET, ASP.NET MVC</li>
                            <li>jQuery, Bootstrap</li>
                            <li>LINQ to SQL</li>
                        </ul>
                    </div>
                </div>
                <div className="skills__box">
                    <div className="skills__box__section">
                        <h2>DATABASE MANAGEMENT SYSTEMS</h2>
                        <ul>
                            <li>MS SQL Server</li>
                            <li>Oracle</li>
                        </ul>
                        <br/>
                        <h2>IDE</h2>
                        <ul>
                            <li>Visual Studio 2012 & 2013</li>
                            <li>Visual Studio Code</li>
                            <li>Netbeans</li>
                        </ul>
                    </div>
                </div>
                <div className="skills__box">
                    <div className="skills__box__section">
                        <h2>FOREIGN LANGUAGE</h2>
                        <ul>
                            <li>English</li>
                        </ul>
                        <br/>
                        <h2>OTHERS</h2>
                        <ul>
                            <li>Understanding about OOP, database design, deploy website ...</li>
                            <li>Soft skill: Time management, self-learning, teamwork</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Skills
