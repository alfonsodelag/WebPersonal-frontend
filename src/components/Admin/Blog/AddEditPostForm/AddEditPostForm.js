import React, { useState, useEffect } from 'react';
import { Row, Col, Form, Input, Button, DatePicker, notification } from "antd";
import moment from "moment";
import { Editor } from "@tinymce/tinymce-react"
import { getAccessTokenApi } from "../../../../api/auth";
import { addPostApi, updatePostApi } from "../../../../api/post";

import "./AddEditPostForm.scss";
import { FontSizeOutlined } from '@ant-design/icons';

export default function AddEditPostForm(props) {
    const { setIsVisibleModal, setReloadPosts, post } = props;
    const [postData, setPostData] = useState({});

    useEffect(() => {
        if (post) {
            setPostData(post)
        } else {
            setPostData({})
        }
    }, [post])

    const processPost = e => {

        const { title, url, description, date } = postData;

        if (!title || !url || !description || !date) {
            notification["error"]({
                message: "Todos los campos son obligatorios."
            });
        } else {
            if (!post) {
                // If post doesnt have content, add a Post
                addPost();
                console.log("Creando post")
                console.log(postData)
            } else {
                updatePost();
                console.log("Editando post...")
                console.log(postData)
            }
        }
    };

    const addPost = data => {
        const token = getAccessTokenApi();

        addPostApi(token, postData)
            .then(response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData({})
            })
            .catch(() => {
                notification["error"]({
                    message: "Server error"
                })
            })
    }

    const updatePost = () => {
        const token = getAccessTokenApi();
        updatePostApi(token, post._id, postData)
            .then(response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                })
                setIsVisibleModal(false);
                setReloadPosts(true);
                setPostData({})
            })
            .catch(() => {
                notification["error"]({
                    message: "Server error"
                })
            })
    }

    return (
        <div className="add-edit-post-form">
            <AddEditForm
                postData={postData}
                setPostData={setPostData}
                post={post}
                processPost={processPost} />
        </div>
    );
}

function AddEditForm(props) {
    const { postData, setPostData, post, processPost } = props;

    return (
        <Form
            className="add-edit-post-form"
            layout="inline"
            onFinish={processPost}

        >
            <Row gutter={24}>

                <Col span={8} >
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="Titulo"
                        value={postData.title}
                        onChange={e => setPostData({ ...postData, title: e.target.value })}
                    />
                </Col>

                <Col span={8} >
                    <Input
                        prefix={<FontSizeOutlined />}
                        placeholder="url"
                        value={postData.url}
                        onChange={e => setPostData({ ...postData, url: transformTextToUrl(e.target.value) })}
                    />
                </Col>

                <Col span={8} >
                    <DatePicker
                        style={{ width: "100%" }}
                        format="DD/MM/YYYY HH:mm:ss"
                        placeholder="Fecha de publicacion"
                        showTime={{ defaultValue: moment("00:00:00", "HH:mm:ss") }}
                        value={moment(postData.date)}
                        onChange={(e, value) =>
                            setPostData({
                                ...postData,
                                date: moment(value, "DD/MM/YYYY HH:mm:ss").toISOString()
                            })}
                    />

                </Col>

                <Editor
                    initialValue={postData.description ? postData.description : ""}
                    init={{
                        height: 400,
                        menubar: true,
                        plugins: [
                            'advlist autolink lists link image charmap print preview anchor',
                            'searchreplace visualblocks code fullscreen',
                            'insertdatetime media table paste code help wordcount'
                        ],
                        toolbar:
                            'undo redo | formatselect | bold italic backcolor | \
                            alignleft aligncenter alignright alignjustify | \
                            bullist numlist outdent indent | removeformat | help'
                    }}
                    onBlur={e => setPostData({ ...postData, description: e.target.getContent() })}
                />

                <Button type="primary" htmlType="submit" className="btn-submit">
                    {post ? "Actualizar post" : "Crear post"}
                </Button>

            </Row>
        </Form>
    )
}

function transformTextToUrl(text) {
    const url = text.replace(" ", "-");
    return url.toLowerCase();
}