import React from 'react';
import Logo from '../../../../assets/img/png/logo.png';
import SocialLink from '../../Social Links'

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Logo} alt="Logo" />
            <h4>Entra al mundo del desarrollo web</h4>
            <SocialLink />
        </div>
    )
}
