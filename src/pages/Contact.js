import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/img/jpg/ADLG-logo2.png';

import './Contact.css';

export default function Contact() {
    return (

        <div className="login">
            <Link to="/">
                <img
                    className="login__logo"
                    src={Logo}
                    alt=""
                />
            </Link>

            <div className="login__container">
                <h1>Contact me</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" />
                    {/* <input value={email} onChange={event => setEmail(event.target.value)} type="email" /> */}
                    <h5>Password</h5>
                    <input type="email" />
                    {/* <input value={password} onChange={event => setPassword(event.target.value)} type="password" /> */}
                    <h5>Message</h5>
                    <textarea />
                    <button className="login__signInButton" type="submit">Send message</button>
                    {/* <button onClick={login} type="submit" className="login__signInButton">Sign In</button> */}
                </form>
            </div>
        </div>
    );
}
