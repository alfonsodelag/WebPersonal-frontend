import React, { useState, useEffect } from 'react';
import { Form, Input, Button, notification } from "antd";
import { UserOutlined, GiftOutlined, TagsOutlined, GlobalOutlined } from "@ant-design/icons"
import { getAccessTokenApi } from "../../../../api/auth";
import { addCourseApi, updateCourseApi } from "../../../../api/course";

import "./AddEditCourseForm.scss";

export default function AddEditCourseForm(props) {
    const { setIsVisibleModal, setReloadCourses, course } = props;
    // console.log(props);
    const [courseData, setCourseData] = useState({});

    // We use useEffect to obtain data from props and add them to State
    useEffect(() => {
        // If course exists, set courseData
        course ? setCourseData(course) : setCourseData({});
    }, [course])

    const addCourse = e => {
        console.log("courseData => ", courseData);

        if (!courseData.idCourse) {
            notification["error"]({
                message: "El id del curso es obligatorio."
            })
        } else {
            const accessToken = getAccessTokenApi();

            addCourseApi(accessToken, courseData)
                .then(response => {
                    // const typeNotification = response.code === 200 ? "success" : "warning";
                    notification["success"]({
                        message: "SUCCESS CREATING COURSE"
                    });
                    setIsVisibleModal(false);
                    setReloadCourses(true);
                    setCourseData({});
                })
                .catch((error) => {
                    console.log(error);
                    notification["error"]({
                        message: "CATCH ERROR"
                    });
                });
        }
    }

    const updateCourse = e => {

        const accessToken = getAccessTokenApi();

        updateCourseApi(accessToken, course._id, courseData)
            .then(response => {
                const typeNotification = response.code === 200 ? "success" : "warning";
                notification[typeNotification]({
                    message: response.message
                });
                setIsVisibleModal(false);
                setReloadCourses(true);
                setCourseData({});
            })
            .catch(() => {
                notification["error"]({
                    message: "Error del servidor. Intentelo mas tarde"
                })
            })
    }

    return (
        <div className="add-edit-course-form">
            <AddEditForm
                course={course}
                addCourse={addCourse}
                updateCourse={updateCourse}
                courseData={courseData}
                setCourseData={setCourseData}
            />
        </div>
    );
}

function AddEditForm(props) {
    const {
        course,
        addCourse,
        updateCourse,
        courseData,
        setCourseData
    } = props;

    return (
        <Form
            className="form-add-edit"
            onFinish={course ? updateCourse : addCourse}
        >

            <Form.Item>
                <Input
                    prefix={<UserOutlined />}
                    placeholder="Id del Curso"
                    value={courseData.idCourse}
                    onChange={e => setCourseData({ ...courseData, idCourse: e.target.value })}
                    disabled={course ? true : false}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<GlobalOutlined />}
                    placeholder="Url del Curso"
                    value={courseData.link}
                    onChange={e => setCourseData({ ...courseData, link: e.target.value })}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<GiftOutlined />}
                    placeholder="Coupon del Curso"
                    value={courseData.coupon}
                    onChange={e => setCourseData({ ...courseData, coupon: e.target.value })}
                />
            </Form.Item>

            <Form.Item>
                <Input
                    prefix={<TagsOutlined />}
                    placeholder="Precio del Curso"
                    value={courseData.price}
                    onChange={e => setCourseData({ ...courseData, price: e.target.value })}
                />
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="btn-submit">
                    {course ? "Actualizar curso" : "Creando curso"}
                </Button>
            </Form.Item>

        </Form >
    )
}