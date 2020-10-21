import React from 'react';
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import MongoDB from "../../../assets/img/png/mongoDB.png";
import ExpressJS from "../../../assets/img/png/Express.png";
import ReactJS from "../../../assets/img/png/react-logo.png";
import Nodejs from "../../../assets/img/png/node-logo.png";

import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title" >
                <h2>Some of my favorite technologies to work with</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses courses-list">
                    <Col md={12} className="justify-center">
                        <CardCourse
                            image={MongoDB}
                            title="MongoDB"
                            subtitle="MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era."
                            link="https://www.mongodb.com/"
                        />
                    </Col>

                    <Col md={12} className="justify-center">
                        <CardCourse
                            image={ExpressJS}
                            title="Express.js"
                            subtitle="Fast, unopinionated, minimalist web framework for Node.js"
                            link="https://expressjs.com/"
                        />
                    </Col>
                </Row>

                <Row className="row-courses">
                    <Col md={12} className="justify-center">
                        <CardCourse
                            image={ReactJS}
                            title="React.js"
                            subtitle="A JavaScript library for building user interfaces"
                            link="https://reactjs.org/"
                        />
                    </Col>

                    <Col md={12} className="justify-center">
                        <CardCourse
                            image={Nodejs}
                            title="Node.js"
                            subtitle="Node.js® is a JavaScript runtime built on Chrome's V8 JavaScript engine."
                            link="https://nodejs.org/en/"
                        />
                    </Col>
                </Row>
            </Col>
        </Row>
    )
}

function CardCourse(props) {
    const { image, title, subtitle, link } = props;
    const { Meta } = Card;

    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card
                className="home-courses__card images"
                cover={<img src={image} alt={title} />}
            // actions={[<Button>Enter</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}