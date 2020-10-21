import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Row, Col } from 'antd';
import MenuTop from "../components/Web/MenuTop";
import Footer from "../components/Web/Footer";

import "./LayoutBasic.scss";
import routes from '../config/routes';

export default function LayoutBasic(props) {
    const { routes } = props;

    console.log(routes);

    return (
        <>
            <Row>
                <Col lg={4} />
                <Col className="MenuTop" lg={24}>
                    <MenuTop />
                </Col>
                <Col lg={4} />
            </Row>
            <LoadRoutes routes={routes} />
            <Footer />
        </>
    )
}

function LoadRoutes({ routes }) {
    return (
        <Switch>
            {routes.map((route, index) => (
                <Route
                    key={index}
                    path={route.path}
                    exact={route.exact}
                    component={route.component}
                />
            ))}
        </Switch>
    )
}
