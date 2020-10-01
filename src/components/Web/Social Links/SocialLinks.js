import React from "react";
// import { ReactComponent as YouTubeIcon } from "../../../assets/img/svg/youtube.svg";
// import { ReactComponent as TwitterIcon } from "../../../assets/img/svg/twitter.svg";
import { ReactComponent as GithubIcon } from "../../../assets/img/svg/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a
                href="https://www.github.com/alfonsodelag"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
            >
                <GithubIcon />
            </a>

            <a
                href="https://es.linkedin.com/in/alfonsodelaguardia"
                className="linkedin"
                target="_blank"
                rel="noopener noreferrer"
            >
                <LinkedinIcon />
            </a>
        </div>
    );
}
