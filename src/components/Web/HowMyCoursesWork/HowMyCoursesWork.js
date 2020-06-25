import React from 'react';
import { Row, Col, Card } from "antd";
import { UserOutlined } from '@ant-design/icons';

import "./HowMyCoursesWork.scss";

export default function HowMyCoursesWork() {
    return (
        <Row className="how-my-courses-work">
            <Col lg={24} className="how-my-courses-work__title">
                <h2>Cómo funcionan mis cursos?</h2>
                <h3>
                    Cada curso cuenta con contenido bajo la web de Udemy, activa las 24
                    horas al día, los 365 días del año
                </h3>
            </Col>

            <Col lg={4} />
            <Col lg={16}>
                <Row className="row-cards" >
                    <Col md={8}>
                        <CardInfo
                            icon="clock-circle"
                            title="Cursos y Clases"
                            description="Cursos entre 10 y 30 horas al día"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="key"
                            title="Accceso 24/7"
                            description="Accede en cualquier momento"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="message"
                            title="Aprendizaje colaborativo"
                            description="Aprende de los demás"
                        />
                    </Col>
                </Row>

                <Row className="row-cards" >
                    <Col md={8}>
                        <CardInfo
                            icon="user"
                            title="Mejora tu perfil"
                            description="Vuelve tu perfil más atractivo para las empresas"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="dollar"
                            title="Precios bajos"
                            description="Precios accesibles para ti"
                        />
                    </Col>
                    <Col md={8}>
                        <CardInfo
                            icon="message"
                            title="Certificados de finalización"
                            description="Demuestra que terminaste el curso"
                        />
                    </Col>
                </Row>
            </Col>
            <Col lg={4} />
        </Row>
    )
}

function CardInfo(props) {
    const { title, description } = props;
    const { Meta } = Card;

    return (
        <Card className="how-my-courses-work__card">
            <Meta title={title} description={description} />
        </Card>
    )
}
