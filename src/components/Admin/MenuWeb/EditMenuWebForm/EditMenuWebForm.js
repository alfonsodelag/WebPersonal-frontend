import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from "antd";
import { FontColorsOutlined, LinkOutlined } from '@ant-design/icons';
import { updateMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditMenuWebForm.scss";

export default function EditMenuWebForm(props) {
    const { setIsVisibleModal, setReloadMenuWeb, menu } = props;
    const [menuWebData, setMenuWebData] = useState({ menu });

    useEffect(() => {
        setMenuWebData(menu);
    }, [menu]);

    const editMenu = event => {
        if (!menuWebData.title || !menuWebData.url) {
            notification["error"]({
                message: "Todos los cambios son obligatorios."
            })
        } else {
            const accessToken = getAccessTokenApi();

            updateMenuApi(accessToken, menuWebData._id, menuWebData)
                .then(response => {
                    notification["success"]({
                        message: response
                    });
                    setIsVisibleModal(false);
                    setReloadMenuWeb(true);
                })
                .catch(() => {
                    notification["error"]({
                        message: "Error del Servidor. Intentelo más tarde"
                    })
                })
        }
    }


    return (
        <div className="edit-menu-web-form">
            <EditForm
                menuWebData={menuWebData}
                setMenuWebData={setMenuWebData}
                editMenu={editMenu}
            />
        </div>
    );
}

function EditForm(props) {
    const { menuWebData, setMenuWebData, editMenu, menu } = props;


    return (
        <Form className="form-edit" onFinish={editMenu}>
            <Form.Item>
                <Input
                    prefix={<FontColorsOutlined />}
                    placeholder="Titulo"
                    value={menuWebData.title}
                    onChange={e => setMenuWebData({ ...menuWebData, title: e.target.value })}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<LinkOutlined />}
                    placeholder="Url"
                    value={menuWebData.url}
                    onChange={e => setMenuWebData({ ...menuWebData, url: e.target.value })}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar menu
                </Button>
            </Form.Item>
        </Form>
    )
}

