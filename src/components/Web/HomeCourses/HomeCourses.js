import React from 'react';
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import MongoDB from "../../../assets/img/png/mongoDB.png";
import ExpressJS from "../../../assets/img/png/Express.png";
import ReactJS from "../../../assets/img/png/react-logo.png";
import Nodejs from "../../../assets/img/png/node-logo.png";
import JavaScript from "../../../assets/img/png/javascript-logo.png";
import Php from "../../../assets/img/png/php-logo.png";

import "./HomeCourses.scss";

export default function HomeCourses() {
    return (
        <Row className="home-courses">
            <Col lg={24} className="home-courses__title" >
                <h2>Some of the technologies I work with</h2>
            </Col>
            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-courses">
                    <Col md={12}>
                        <CardCourse
                            image={MongoDB}
                            title="Express.js"
                            subtitle="It's a web application framework for Node.JS"
                            link="https://www.mongodb.com/"
                        />
                    </Col>

                    <Col md={12}>
                        <CardCourse
                            image={ExpressJS}
                            title="Express.js"
                            subtitle="It's a web application framework for Node.JS"
                            link="https://expressjs.com/"
                        />
                    </Col>
                </Row>

                <Row className="row-courses">
                    <Col md={12}>
                        <CardCourse
                            image={ReactJS}
                            title="React.js"
                            subtitle="JavaScript framework for JavaScript"
                            link="https://reactjs.org/"
                        />
                    </Col>

                    <Col md={12}>
                        <CardCourse
                            image={Nodejs}
                            title="Node.js"
                            subtitle=""
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
        <a href="{link}" garget="_blank" rel="noopener noreferrer">
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