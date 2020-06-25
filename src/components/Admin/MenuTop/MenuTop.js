import React from 'react';
import { Button } from 'antd';
import { MenuFoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import Logo from '../../../assets/img/png/logo.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    const logoutUser = () => {
        logout();
        window.location.reload();
    }

    return (
        <div className="menu-top">
            <div className="menu-top__left" >
                <img
                    className="menu-top__left-logo"
                    src={Logo}
                    alt="Alfonso"
                />
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    <MenuFoldOutlined type={menuCollapsed ? "close" : "menu-fold"} />
                </Button>
            </div>
            <div className="menu-top__right" onClick={logoutUser}>
                <Button type="link">
                    <PoweroffOutlined type="poweroff" />
                </Button>
            </div>
        </div>
    )
}
