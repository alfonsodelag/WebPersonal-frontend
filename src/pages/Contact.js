import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/img/jpg/ADLG-logo2.png';
import { Form, Input, Button, notification } from "antd";


import './Contact.css';

export default function Contact() {
    return (

        <div className="contact">
            <div className="contact__container">
                <h1>Contáctame</h1>
                <form>
                    <h5>Email</h5>
                    <input type="email" />
                    {/* <input value={email} onChange={event => setEmail(event.target.value)} type="email" /> */}
                    <h5>Asunto</h5>
                    <input type="password" />
                    {/* <input value={password} onChange={event => setPassword(event.target.value)} type="password" /> */}
                    <h5>Mensaje</h5>
                    <textarea />
                    <Button
                        type="primary"
                        htmlType="submit"
                        className="contact__signInButton"
                    >Enviar mensaje</Button>
                    {/* <button onClick={contact} type="submit" className="contact__signInButton">Sign In</button> */}
                </form>
            </div>
        </div >
    );
}
