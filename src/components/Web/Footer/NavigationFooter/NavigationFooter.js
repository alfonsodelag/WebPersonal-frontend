import React from 'react';
import { Row, Col } from 'antd';
import { Link } from "react-router-dom";
import {
    BookOutlined,
    CodepenOutlined,
    DatabaseOutlined,
    FolderViewOutlined,
    HddOutlined,
    AppstoreOutlined,
    UserAddOutlined
} from '@ant-design/icons';

import './NavigationFooter.scss'

export default function NavigationFooter() {
    return (
        <Row className="navigation-footer">
            <Col>
                <h3>Services offered</h3>
            </Col>

            <div className="render-lists">
                <Col md={12}>
                    <RenderListLeft />
                </Col>
                <Col md={12}>
                    <RenderListRight />
                </Col>
            </div>
        </Row>
    );
}

function RenderListLeft() {
    return (
        <ul className="services-list">
            <li>
                <a href="#">
                    <BookOutlined />Frontend Development
                </a>
            </li>
            <li>
                <a to="/contact">
                    <CodepenOutlined />React.js
                </a>
            </li>
            <li>
                <a to="/contact">
                    <DatabaseOutlined />Vue.js
                </a>
            </li>
            <li>
                <a to="/contact">
                    <FolderViewOutlined />CSS, SASS
                </a>
            </li>
        </ul>
    )
}

function RenderListRight() {
    return (
        <ul className="services-list">
            <li>
                <a href="#">
                    <HddOutlined /> Backend Development
                </a>
            </li>
            <li>
                <a to="/contact">
                    <AppstoreOutlined />Node.js
                </a>
            </li>
            <li>
                <a to="/contact">
                    <UserAddOutlined />Express.js
                </a>
            </li>
            <li>
                <a to="/contact">
                    <FolderViewOutlined />MongoDB
                </a>
            </li>
        </ul>
    )
}