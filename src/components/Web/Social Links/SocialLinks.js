import React from "react";
import { WhatsAppOutlined } from "@ant-design/icons";
import { ReactComponent as GithubIcon } from "../../../assets/img/svg/github.svg";
import { ReactComponent as LinkedinIcon } from "../../../assets/img/svg/linkedin.svg";

import "./SocialLinks.scss";

export default function SocialLinks() {
    return (
        <div className="social-links">
            <a href="https://api.whatsapp.com/send?phone=+34603330911&text=Contactar%20a%20Alfonso"
                className="whatsapp"
                target="_blank"
                rel="noopener noreferrer">
                <WhatsAppOutlined />
            </a>

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
