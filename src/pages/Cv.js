import React from 'react'
import { Link } from "react-router-dom"
import Logo from '../assets/img/jpg/ADLG-logo2.png';
import MyPhoto from '../assets/img/jpg/alfonso.jpg';
import './Cv.css'

import './Contact.css';

export default function Cv() {
    return (
        <div id="cv" class="instaFade">
            <div class="mainDetails">
                <div id="headshot" class="quickFade">
                    <img src={MyPhoto} alt="Alfonso De La Guardia" />
                </div>

                <div id="name">
                    <h1 class="quickFade delayTwo">Alfonso De La Guardia</h1>
                    <h2 class="quickFade delayThree">Software Developer</h2>
                </div>

                <div id="contactDetails" class="quickFade delayFour">
                    <ul>
                        <li>email: <a href="mailto:alfonsodelag1@gmail.com" target="_blank">alfonsodelag1@gmail.com</a></li>
                        <li>mobile: 603 330 911</li>
                        <li>github: www.github.com/alfonsodelag</li>
                    </ul>
                </div>
                <div class="clear"></div>
            </div>

            <div id="mainArea" class="quickFade delayFive">
                <section>
                    <article>
                        <div class="sectionTitle">
                            <h1>Personal Profile</h1>
                        </div>

                        <div class="sectionContent">
                            <p>Coming from a background in Business Administration, I decided to become a developer, since I've always been interested in software and technological solutions and the business opportunities these offer. I am now a FullStack JavaScript Developer, with excellent soft skills and teamwork abilities. I am passionate about programming and developing my professional career. I believe perseverance, enthusiasm and team-work are the key to developing good projects..</p>
                        </div>
                    </article>
                    <div class="clear"></div>
                </section>

                <section>
                    <div class="sectionTitle">
                        <h1>Work Experience</h1>
                    </div>

                    <div class="sectionContent">
                        <article>
                            <h2>Sales and Marketing Intern at EGI Group</h2>
                            <p class="subDetails">03/2019 - 08/2019</p>
                            <div>
                                <p>Responsibilities :</p>
                                <ul>
                                    <li>Contact candidates to attend our events</li>
                                    <li>CRM Management</li>
                                    <li>Preparing proposals for clients</li>
                                    <li>Meeting with clients to show them our solutions</li>
                                </ul>
                            </div>
                        </article>

                        <article>
                            <h2>Account Manager at Ecomsa Telecomunicaciones</h2>
                            <p class="subDetails">02/2011 - 09/2017</p>
                            <p>Responsibilities :</p>
                            <ul>
                                <li>Getting certifications for the solutions we sell</li>
                                <li>Finding new business opportunities</li>
                                <li>Customer service and CRM development</li>
                                <li>Preparing proposals for clients</li>
                                <li>Meeting with clients to show them our solutions</li>
                            </ul>
                        </article>
                    </div>
                    <div class="clear"></div>
                </section>


                <section>
                    <div class="sectionTitle">
                        <h1>Key Skills</h1>
                    </div>

                    <div class="sectionContent">
                        <ul class="keySkills">
                            <li>Bilingual</li>
                            <li>Fast-learner</li>
                            <li>Driven</li>
                            <li>Collaborative</li>
                            <li>Team Worker</li>
                            <li>Creative</li>
                            <li>Hard Working</li>
                            <li>Creative</li>
                            <li>Perseverance</li>
                            <li>Enthusiastic</li>
                        </ul>
                    </div>
                    <div class="clear"></div>
                </section>


                <section>
                    <div class="sectionTitle">
                        <h1>Education</h1>
                    </div>

                    <div class="sectionContent">
                        <article>
                            <h2>Universidad de Barcelona, Spain</h2>
                            <p class="subDetails">2017-2018</p>
                            <p>Master in management and creation of innovative and technology-based companies</p>
                        </article>

                        <article>
                            <h2>University of Arkansas, USA</h2>
                            <p class="subDetails">2007-2011</p>
                            <p>Bachelor of Science in Business Administration</p>
                        </article>
                    </div>
                    <div class="clear"></div>
                </section>
            </div>
        </div>

    );
}
