import React from 'react';
import Logo from '../../../../assets/img/jpg/ADLG-logo.jpg';
import SocialLink from '../../Social Links'

import "./MyInfo.scss";

export default function MyInfo() {
    return (
        <div className="my-info">
            <img src={Logo} alt="Logo" />
            <h4>Let's make it happen.</h4>
            <div className="social-link">
                <SocialLink />
            </div>
        </div>
    )
}
