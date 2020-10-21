import React from 'react';
import { Row, Col, Card, Avatar } from "antd";
import AvatarPersona from "../../../assets/img/png/no-avatar.png";

import "./ReviewCourses.scss";

export default function ReviewsCourses() {
    return (
        <Row className="reviews-courses ">
            <Row className="width">
                <Col lg={4} />
                <Col lg={16} className="reviews-courses__title">
                    <h2>Recomendaciones</h2>
                </Col>
                <Col lg={4} />
            </Row>

            <Row>
                <Col lg={4} />
                <Col lg={16}>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Jesús López"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="David Samudio"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Agustín Martínez"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                    </Row>
                    <Row className="row-cards">
                        <Col md={8}>
                            <CardReview
                                name="Mark González"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Juancho Domingo"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                        <Col md={8}>
                            <CardReview
                                name="Jaime R. Bravo"
                                subtitle="Alumno de Alfonso"
                                avatar={AvatarPersona}
                                review="Me encantó el curso. Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.  Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu."
                            />
                        </Col>
                    </Row>

                </Col>
                <Col lg={4} />
            </Row>
        </Row>
    )
}

function CardReview(props) {
    const { name, subtitle, avatar, review } = props;
    const { Meta } = Card;

    return (
        <Card className="reviews-courses__card">
            <p>{review}</p>
            <Meta
                avatar={<Avatar src={avatar} />}
                title={name}
                description={subtitle}
            />
        </Card>
    )


}
