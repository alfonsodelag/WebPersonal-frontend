import React, { useState, useEffect } from 'react';
import { Menu } from "antd";
import { Link } from "react-router-dom";
import SocialLinks from "../Social Links";
import { getMenuApi } from "../../../api/menu";
import Logo from "../../../assets/img/jpg/ADLG-Logo.jpg";

import "./MenuTop.scss";

export default function MenuTop() {

    const [menuData, setMenuData] = useState([]);
    // const [isOpen, setIsOpen] = useState([]);

    // handleToggle = () => {
    //     this.setState({ isOpen: !this.state.isOpen })
    // }

    useEffect(() => {
        getMenuApi().then(response => {
            console.log("response", response)
            const arrayMenu = [];
            response.menu.forEach(item => {
                console.log("item", item)
                item.active && arrayMenu.push(item)
            });
            setMenuData(arrayMenu);
        })
    }, []);


    return (
        <Menu className="menu-top-web" mode="horizontal">
            <Menu.Item className="menu-top-web__logo">
                <Link to={"/"}>
                    <img src={Logo} className="" alt="Logo2" />
                </Link>
            </Menu.Item>

            {menuData.map(item => {
                const external = item.url.indexOf("http") === 0;
                if (external) {
                    return (
                        <Menu.Item key={item._id} className="menu-top-web__item">
                            <a href={item.url} target="_blank" rel="noopener noreferrer">{item.title}</a>
                        </Menu.Item>
                    )
                }
                return (
                    <Menu.Item key={item._id} className="menu-top-web__item" >
                        <Link to={item.url}>{item.title}</Link>
                    </Menu.Item>
                )
            })}
            <SocialLinks />
        </Menu>
    )
}
