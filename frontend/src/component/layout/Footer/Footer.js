import React from "react";
import PlayStore from "../../../images/playstore.png";
import AppStore from "../../../images/Appstore.png";
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import "./CSS/Fotter.css";

const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <p>Education is our first priority</p>
            </div>

            <div className="midFooter">
                <h1>साहित्य</h1>
                <p>Copyrights {new Date().getFullYear()} &copy; Saahitya</p>
            </div>

            <div className="rightFooter">
                <h4>Follow Us</h4>

                <Button href="https://www.linkedin.com/in/avinash-biradar-9279241aa/" target="_blank" className="btn_linkedin">
                    <LinkedInIcon />
                </Button>

                <Button href="https://github.com/avibiradar100" target="_blank" className="btn_gitHub">
                    <GitHubIcon/>
                </Button>
                 
            </div>
        </footer>
    );
};

export default Footer;