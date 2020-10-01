import React from 'react';
import { Row, Col } from "antd";

import "./MainBanner.scss";

export default function MainBanner() {
    return (
        <div className="main-banner">
            <div className="main-banner__dark" />

            <Row>
                <Col lg={4}>

                </Col>
                <Col lg={16}>
                    <h2>
                        Hello, I'm <strong>Alfonso De La Guardia.</strong><br /> I'm a full-stack web developer.
                    </h2>
                </Col>
                <Col lg={4} />
            </Row>
        </div>
    )
}
