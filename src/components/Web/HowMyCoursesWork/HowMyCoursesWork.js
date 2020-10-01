import React from 'react';
import { Row, Col, Card, Button } from "antd";
import { Link } from "react-router-dom";
import MusicLibrary from "../../../assets/img/png/musiclibrary.png";
import ExpressJS from "../../../assets/img/png/Express.png";
import ReactJS from "../../../assets/img/png/react-logo.png";
import Nodejs from "../../../assets/img/png/node-logo.png";
import JavaScript from "../../../assets/img/png/javascript-logo.png";
import Php from "../../../assets/img/png/php-logo.png";

// import "./HomeCourses.scss";

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
                        <CardCourse
                            image={MusicLibrary}
                            title="Music Library"
                            subtitle="A website to look for your favorite music!"
                            link="https://courses.agustinnavarrogaldon.com/react-native-expo"
                        />
                    </Col>

                    <Col md={12}>
                        <CardCourse
                            image={ExpressJS}
                            title="Express.js"
                            subtitle="It's a web application framework for Node.JS"
                            link="https://courses.agustinnavarrogaldon.com/react-native-expo"
                        />
                    </Col>
                </Row>

                <Row className="row-courses">
                    <Col md={12}>
                        <CardCourse
                            image={MusicLibrary}
                            title="Music Library"
                            subtitle="A website to look for your favorite music!"
                            link="https://courses.agustinnavarrogaldon.com/react-native-expo"
                        />
                    </Col>

                    <Col md={12}>
                        <CardCourse
                            image={ExpressJS}
                            title="Express.js"
                            subtitle="It's a web application framework for Node.JS"
                            link="https://courses.agustinnavarrogaldon.com/react-native-expo"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
            <Col lg={24} className="home-courses__more">
                <Link to="/courses">
                    <Button>Ver más</Button>
                </Link>
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
                className="home-courses__card"
                cover={<img src={image} alt={title} />}
                actions={[<Button>Enter</Button>]}
            >
                <Meta title={title} description={subtitle} />
            </Card>
        </a>
    )
}