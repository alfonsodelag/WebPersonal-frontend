import React, { useState } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { Layout } from 'antd';
import useAuth from '../hooks/useAuth';
import MenuTop from '../components/Admin/MenuTop';
import MenuSider from '../components/Admin/MenuSider';
import AdminSignIn from '../pages/Admin/SignIn/SignIn';

import { getAccessTokenApi, getRefreshTokenApi } from '../api/auth';

import "./LayoutAdmin.scss";
import routes from '../config/routes';

export default function LayoutBasic(props) {
    const { routes } = props;
    const [menuCollapsed, setMenuCollapsed] = useState(false);
    const { Header, Content, Footer } = Layout;
    const { user, isLoading } = useAuth();

    // User is not logged in
    if (!user & !isLoading) {
        return (
            <>
                <Route path="/admin/login" component={AdminSignIn} />
                <Redirect to="/admin/login" />
            </>
        );
    }

    // User is logged in correctly
    if (user && !isLoading) {
        return (
            <Layout>
                <MenuSider menuCollapsed={menuCollapsed} />
                <Layout
                    className="layout-admin"
                    style={{ marginLeft: menuCollapsed ? "80px" : "200px" }}
                >
                    <Header className="layout-admin__header">
                        <MenuTop
                            menuCollapsed={menuCollapsed}
                            setMenuCollapsed={setMenuCollapsed}
                        />
                    </Header>
                    <Content className="layout-admin__content">
                        <LoadRoutes routes={routes} />
                    </Content>
                    <Footer className="layout-admin__footer">Alfonso De La Guardia 2020</Footer>
                </Layout>
            </Layout>
        );
    }

    return null;
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
