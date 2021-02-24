import React from 'react'
import "./Education.css"
import HeadingContent from './HeadingContent'
function Education() {
    return (
        <div id="education">
            <HeadingContent title="EDUCATION" />
            
            <div className="education__container">
                <div className="circle__container">
                    <div className="circle">
                        <p>2018<br/>&nbsp;&nbsp;&nbsp;&nbsp;-<br/>2022</p>
                    </div>
                </div>
                <div className="education__info">
                    <h2>HO CHI MINH UNIVERSITY OF FOOD INDUSTRY</h2>
                    <p>Ho Chi Minh City, Viet Nam</p>
                    <div className="line"></div>
                    <ul>
                        <li>GPA (10): <strong>7.17/10</strong></li>
                        <li>GPA (4): <strong>2.85/4</strong></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Education
