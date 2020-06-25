import React, { useState, useEffect, useCallback } from 'react';
import { Avatar, Form, Input, Select, Button, Row, Col, Upload, notification } from "antd";
import { useDropzone } from "react-dropzone";
import { UserOutlined, MailOutlined, LockOutlined } from '@ant-design/icons';
import NoAvatar from "../../../../assets/img/png/no-avatar.png";
import { updateUserApi, uploadAvatar, getAvatarApi, uploadAvatarApi } from "../../../../api/user";
import { getAccessTokenApi } from "../../../../api/auth";

import "./EditUserForm.scss"

export default function EditUserForm(props) {
    const { user, setIsVisibleModal, setReloadUsers } = props;
    const [avatar, setAvatar] = useState(null);
    const [userData, setUserData] = useState({});

    useEffect(() => {
        setUserData({
            name: user.name,
            lastname: user.lastname,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        });
    }, [user])

    useEffect(() => {
        if (user.avatar) {
            getAvatarApi(user.avatar).then(response => {
                setAvatar(response);
            })
        } else {
            setAvatar(null);
        }
    })

    useEffect(() => {
        if (avatar) {
            setUserData({ ...userData, avatar: avatar.file })
        }
    }, [avatar])

    const updateUser = e => {
        const token = getAccessTokenApi();
        let userUpdate = userData;

        if (userUpdate.password || userUpdate.repeatPassword) {
            if (userUpdate.password !== userUpdate.repeatPassword) {
                notification["error"]({
                    message: "Las contraseñas tienen que ser iguales."
                });
                return;
            } else {
                delete userUpdate.repeatPassword;
                console.log(userUpdate);
            }
        }

        if (!userUpdate.name || !userUpdate.lastname || !userUpdate.email) {
            notification["error"]({
                message: "El nombre, apellidos y email son obligatorios."
            })
            return;
        }

        if (typeof userUpdate.avatar == "object") {
            uploadAvatarApi(token, userUpdate.avatar, user._id).then(response => {
                userUpdate.avatar = response.avatarName;
                updateUserApi(token, userUpdate, user._id).then(result => {
                    notification["success"]({
                        message: result.message
                    });
                    setIsVisibleModal(false);
                    setReloadUsers(true);
                });
            });
        } else {
            updateUserApi(token, userUpdate, user._id).then(result => {
                notification["success"]({
                    message: result.message
                });
                setIsVisibleModal(false);
                setReloadUsers(true);
            });
        }
    }

    return (
        <div className="edit-user-form">
            <UploadAvatar avatar={avatar} setAvatar={setAvatar} />
            <EditForm
                userData={userData}
                setUserData={setUserData}
                updateUser={updateUser} />
        </div>
    )
}


function UploadAvatar(props) {
    const { avatar, setAvatar } = props;
    const [avatarUrl, setAvatarUrl] = useState(null);

    useEffect(() => {
        if (avatar) {
            if (avatar.preview) {
                setAvatarUrl(avatar.preview)
            } else {
                setAvatarUrl(avatar)
            }
        } else {
            setAvatarUrl(null)
        }
    }, [avatar]);

    const onDrop = useCallback(
        acceptedFiles => {
            const file = acceptedFiles[0];
            setAvatar({ file, preview: URL.createObjectURL(file) })
        },
        [setAvatar]
    );

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        accept: "image/jpeg, image/png",
        noKeyBoard: true,
        onDrop
    });

    return (
        <div className="upload-avatar" {...getRootProps()}>
            <input {...getInputProps()} />
            {isDragActive ? (
                <Avatar size={150} src={NoAvatar} />
            ) : (
                    /* If isDragActive is false, show another avatar and the src will change,
                    if the avatar exists, we show avatar preview if not, we show the NoAvatar .png image*/
                    <Avatar size={150} src={avatarUrl ? avatarUrl : NoAvatar} />
                )}
        </div>
    );
}

function EditForm(props) {
    const { userData, setUserData, updateUser } = props;
    const { Option } = Select;

    return (
        <Form className="form-edit" onFinish={updateUser} >
            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Nombre"
                            value={userData.name}
                            onChange={e => setUserData({ ...userData, name: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<UserOutlined />}
                            placeholder="Apellidos"
                            value={userData.lastname}
                            onChange={e =>
                                setUserData({ ...userData, lastname: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<MailOutlined />}
                            placeholder="Email Address"
                            value={userData.email}
                            onChange={e =>
                                setUserData({ ...userData, email: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Select
                            placeholder="Selecciona un rol"
                            onChange={e => setUserData({ ...userData, role: e })}
                            value={userData.role}
                        >
                            <Option value="admin">Administrador</Option>
                            <Option value="editor">Editor</Option>
                            <Option value="reviewr">Revisor</Option>
                        </Select>
                    </Form.Item>
                </Col>
            </Row>

            <Row gutter={24}>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Contraseña"
                            onChange={e => setUserData({ ...userData, password: e.target.value })}
                        />
                    </Form.Item>
                </Col>
                <Col span={12}>
                    <Form.Item>
                        <Input
                            prefix={<LockOutlined />}
                            type="password"
                            placeholder="Repetir Contraseña"
                            onChange={e => setUserData({ ...userData, repeatPassword: e.target.value })}
                        />
                    </Form.Item>
                </Col>
            </Row>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    Actualizar Usuarios
                </Button>
            </Form.Item>
        </Form >
    );
}