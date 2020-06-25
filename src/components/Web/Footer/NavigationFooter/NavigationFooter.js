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
                <h3>Servicios ofrecidos para los usuarios</h3>
            </Col>

            <Col md={12}>
                <RenderListLeft />
            </Col>
            <Col md={12}>
                <RenderListRight />
            </Col>
        </Row>
    );
}

function RenderListLeft() {
    return (
        <ul>
            <li>
                <a href="#">
                    <BookOutlined />Cursos Online
                </a>
            </li>
            <li>
                <a to="/contact">
                    <CodepenOutlined />Desarrollo Web
                </a>
            </li>
            <li>
                <a to="/contact">
                    <DatabaseOutlined />Base de Datos
                </a>
            </li>
            <li>
                <a to="/contact">
                    <FolderViewOutlined /> Politica de Privacidad
                </a>
            </li>
        </ul>
    )
}

function RenderListRight() {
    return (
        <ul>
            <li>
                <a href="#">
                    <HddOutlined /> Sistemas / Servidores
                </a>
            </li>
            <li>
                <a to="/contact">
                    <AppstoreOutlined /> CMS
                </a>
            </li>
            <li>
                <a to="/contact">
                    <UserAddOutlined /> Portfolio
                </a>
            </li>
            <li>
                <a to="/contact">
                    <FolderViewOutlined /> Política de Cookies
                </a>
            </li>
        </ul>
    )
}