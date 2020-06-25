import React from 'react';
import { Layout, Tabs } from 'antd';
import { Redirect } from 'react-router-dom';
import Logo from '../../../assets/img/png/logo.png';
import RegisterForm from '../../../components/Admin/RegisterForm/RegisterForm';
import LoginForm from '../../../components/Admin/LoginForm';
import { getAccessTokenApi } from '../../../api/auth';

import './SignIn.scss';

export default function SignIn() {
    const { Content } = Layout;
    const { TabPane } = Tabs;

    if (getAccessTokenApi()) {
        return <Redirect to="/admin" />
    }
    return (
        <Layout className="sign-in">
            <Content className="sign-in__content">
                <h1 className="sign-in__content-logo">
                    <img src={Logo} alt=" logo" />
                </h1>
                <div className="sign-in__content-tabs">
                    <Tabs>
                        <TabPane tab={<span>Enter</span>} key="1" >
                            <LoginForm />
                        </TabPane>
                        <TabPane tab={<span>New User</span>} key="2">
                            <RegisterForm />
                        </TabPane>
                    </Tabs>
                </div>
            </Content>
        </Layout>
    );
}
