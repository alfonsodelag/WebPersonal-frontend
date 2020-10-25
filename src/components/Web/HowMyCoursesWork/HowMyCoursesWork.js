import React from 'react';
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import WhatsApp from "../../../assets/img/png/WHATSAPP.PNG";
import Instagram from "../../../assets/img/png/INSTAGRAM.PNG";
import Amazon from "../../../assets/img/png/AMAZON.PNG";
import BeachResort from "../../../assets/img/png/BEACHRESORT.PNG";

import "./HowMyCoursesWork.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title" >
                <h2>My projects</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={12}>
                        <a href="https://whatsapp-mern-bbe12.web.app/">
                            <CardCourse
                                image={WhatsApp}
                                title="Chat Rooms Project (MERN Stack)"
                                subtitle="A webapp similar to WhatsApp where you can chat with others and create your own room. 
                                Project created with: MongoDB, Express.Js, React.js, Node.js, Google Firebase, Material-ui, Heroku"
                            />
                        </a>
                    </Col>

                    <Col md={12}>
                        <a href="https://instagram-clone-react-ed5a4.web.app/">
                            <CardCourse
                                image={Instagram}
                                title="Social Media Project (MERN Stack)"
                                subtitle="A Social Media webapp similar to Instagram where you can upload your favorite images.
                                Project created with: MongoDB, Express.Js, React.js, Node.js, Google Firebase, Material-ui, Heroku"
                            />
                        </a>
                    </Col>
                </Row>

                <Row className="row-courses">
                    <Col md={12}>
                        <a href="https://clone-8a0d8.web.app/">
                            <CardCourse
                                image={Amazon}
                                title="eCommerce Project"
                                subtitle="A website similar to Amazon where you can choose from a number of products.
                                Project created with: ReactJs, Google Firebase, Axios, Material-ui"
                            />
                        </a>
                    </Col>

                    <Col md={12}>
                        <a href="https://beach-resort-alfonsodelaguardia.netlify.app/services">
                            <CardCourse
                                image={BeachResort}
                                title="Beach Resort Project"
                                subtitle="A website where you can choose your favorite room for your holidays.
                                Project created with: ReactJs, Google Firebase, Axios, Material-ui"
                            />
                        </a>
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more see-more">
                {/* <Link to="/courses">
                    <Button>See more</Button>
                </Link> */}
            </Col>
        </Row>
    )
}

function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} garget="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}
