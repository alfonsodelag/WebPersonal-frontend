import React from 'react';
import ADLGLogo from "../../../../assets/img/jpg/ADLG-Logo.jpg";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
    return (
        <div className="presentation-courses">
            <img src={ADLGLogo} alt="Alfonso's projects" />
            <p>Here you will find more information about the Projects I've been working on</p>
            <p>Check them out! I'm sure you'll find them fun and interesting!</p>
        </div>
    )
}
