import React from 'react'
import './Background.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import GitHubIcon from '@material-ui/icons/GitHub';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import InstagramIcon from '@material-ui/icons/Instagram';
function Background() {
    return (
        <div className="background">
            <div className="background__img"></div>
            <div className="background__content">
                <h1>I'm Tran Dong Py</h1>
                <p>My goal is being a Full Stack developer <WhatshotIcon /></p>
                <div className="socialMedia__container">
                    <div className="socialMedia">
                        <a href="https://facebook.com/trandongpy" target="_blank" rel="noreferrer" title="Facebook"><FacebookIcon /></a>
                    </div>
                    <div className="socialMedia">
                        <a href="https://www.instagram.com/trandongpy_26_08/" target="_blank" rel="noreferrer" title="Instagram"><InstagramIcon /></a>
                    </div>
                    <div className="socialMedia">
                        <a href="https://github.com/dongpytran" target="_blank" rel="noreferrer" title="Github"><GitHubIcon /></a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Background
