import React from 'react'
import "./About.css"
import HeadingContent from './HeadingContent'
import Cv from './cv_vie.pdf';
import CvE from './MY_CV_ENG.pdf';
import GetAppIcon from '@material-ui/icons/GetApp';
import RoomIcon from '@material-ui/icons/Room';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import PublicIcon from '@material-ui/icons/Public';
function About() {
    const avatar = "https://scontent.fdad2-1.fna.fbcdn.net/v/t1.0-9/104987441_1220902914909250_2174423459197449014_o.jpg?_nc_cat=107&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=jCh2hhV7xS8AX8H4L3k&_nc_ht=scontent.fdad2-1.fna&oh=6c494099228e93fd06aedaf79613d798&oe=60827C78";
    return (
        <div id="about">
            <HeadingContent title="ABOUT ME" />
            <div className="about__container">
                <div className="about__avatar">
                    <div className="about__avatar__container" style={{backgroundImage: `url(${avatar})`}}>
                    </div>
                </div>
                <div className="about__summary">
                    <div className="about__summary__info">
                        <h4>SUMMARY</h4>
                        <p>I'm <strong>Tran Dong Py</strong> - a third-year student at Ho Chi Minh University of Food Industry and my major is Management Information System.
                            I have background knowledge about <strong>Web Development, Database Design</strong></p>
                        <p>Learning new languages and technologies is what I am passionate about.
                            I enjoy working in a professional, dynamic environment and challenge myself.</p>
                    </div>
                    <div className="about__summary--btn">
                        <div className="download__icon"><GetAppIcon/></div>
                        <a href={Cv} download> MY CV (Vietnamese)</a>
                    </div><!--
                    <div className="about__summary--btn">
                        <div className="download__icon"><GetAppIcon/></div>
                        <a href={CvE} download> MY CV (English)</a>
                    </div>--!>
                </div>
                <div className="about__contact">
                    <h4>CONTACT INFO</h4>
                    <ul>
                        <li><RoomIcon/><p>HCM City</p></li>
                        <li><PhoneIcon/><p>+84 333 966 708</p></li>
                        <li><EmailIcon/><p><a href="mailto:tramdongpy@gmail.com">tramdongpy@gmail.com</a></p></li>
                        <li><PublicIcon/><p><a href="https://trandongpy.tk"> trandongpy.tk</a></p></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default About
