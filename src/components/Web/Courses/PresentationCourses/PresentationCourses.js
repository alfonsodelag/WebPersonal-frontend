import React from 'react';
import AcademyLogo from "../../../../assets/img/png/academy-logo.png";

import "./PresentationCourses.scss";

export default function PresentationCourses() {
    return (
        <div className="presentation-courses">
            <img src={AcademyLogo} alt="Cursos de Alfonso" />
            <p>En esta academia as a encontrar los mejores cursos online sobre desarrollo web</p>
            <p>Echales un vistazo y aprovecha las ofertas!</p>
        </div>
    )
}
