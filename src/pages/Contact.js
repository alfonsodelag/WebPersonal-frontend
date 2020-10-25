import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/img/jpg/ADLG-logo2.png';
import { Form, Input, Button, notification } from "antd";
import emailjs from "emailjs-com"



import './Contact.css';

export default function Contact() {

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('gmail', 'template_86lswb7', e.target, 'user_gHyLFGKROwPEZksKaeA3e')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    }

    return (
        <div className="contact">
            <div className="contact__container">
                <h1>Contact Me</h1>
                <form onSubmit={sendEmail}>
                    <h5>Email</h5>
                    <input type="email" />
                    {/* <input value={email} onChange={event => setEmail(event.target.value)} type="email" /> */}
                    <h5>Subject</h5>
                    <input type="text" />
                    {/* <input value={password} onChange={event => setPassword(event.target.value)} type="password" /> */}
                    <h5>Message</h5>
                    <textarea />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="contact__signInButton"
                    >Send Message</Button>
                    {/* <button onClick={contact} type="submit" className="contact__signInButton">Sign In</button> */}
                </form>
            </div>
        </div >
    );
}
