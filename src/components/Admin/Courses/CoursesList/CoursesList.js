import React, { useState, useEffect } from 'react';
import { List, Button, Modal as ModalAntd, notification } from "antd";
import Modal from "../../../Modal";
import AddEditCourseForm from "../AddEditCourseForm";
import DragSortableList from "react-drag-sortable";
import { getAccessTokenApi } from "../../../../api/auth";
import { getCourseDataUdemyApi, deleteCourseApi, updateCourseApi } from "../../../../api/course";

import "./CoursesList.scss";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { confirm } = ModalAntd;

export default function CoursesList(props) {
    const { courses, setReloadCourses } = props;
    const [listCourses, setListCourses] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    useEffect(() => {
        const listCourseArray = [];
        courses.forEach(course => {
            listCourseArray.push({
                content: (
                    <Course
                        course={course}
                        deleteCourse={deleteCourse}
                        editCourseModal={editCourseModal} />
                )
            });
        });
        setListCourses(listCourseArray)
    }, [courses])

    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const { _id } = item.content.props.course;
            const order = item.rank;
            updateCourseApi(accessToken, _id, { order });
        })
    };

    const addCourseModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando un nuevo curso");
        setModalContent(
            <AddEditCourseForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadCourses={setReloadCourses}
            />
        )
    };

    const editCourseModal = course => {
        setIsVisibleModal(true);
        setModalTitle("Actualizando curso");
        setModalContent(
            <AddEditCourseForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadCourses={setReloadCourses}
                course={course}
            />
        )
    }

    const deleteCourse = course => {
        const accessToken = getAccessTokenApi();

        // Confirm comes from Modal Antd
        confirm({
            title: "Eliminando curso",
            content: `Estás seguro de que quieres eliminar el curso ${course.idCourse}?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "cancelar",
            onOk() {
                deleteCourseApi(accessToken, course._id)
                    .then(response => {
                        const typeNotification = response.code === 200 ? "success" : "warning";
                        notification[typeNotification]({
                            message: response.message
                        });
                        setReloadCourses(true);
                    })
                    .catch(() => {
                        notification["error"]({
                            message: "Error del servidor, inténtelo más tarde."
                        })
                    })
            }
        })
    }

    return (
        <div className="courses-list">
            <div className="courses-list__header">
                <Button type="primary" onClick={addCourseModal}>
                    Nuevo curso
                </Button>
            </div>

            <div className="courses-list__items">
                {listCourses.length == 0 && (
                    <h2 style={{ textAlign: "center", margin: 0 }}>
                        No tienes cursos creados
                    </h2>
                )}
                <DragSortableList items={listCourses} onSort={onSort} type="vertical" />
            </div>

            <Modal
                title={modalTitle}
                isVisible={isVisibleModal}
                setIsVisibleModal={setIsVisibleModal}
            >
                {modalContent}
            </Modal>

        </div>
    )
}

function Course(props) {
    const { course, deleteCourse, editCourseModal } = props;
    const [courseData, setCourseData] = useState(null);

    useEffect(() => {
        getCourseDataUdemyApi(course.idCourse).then(response => {
            if (response.code !== 200) {
                notification["warning"]({
                    message: `El curso con el Id ${course.idCourse} no se ha encontrado`
                })
            }
            setCourseData(response.data);
        })
    }, [course])

    if (!courseData) {
        return null;
    }

    return (
        <List.Item
            actions={[
                <Button type="primary" onClick={() => editCourseModal(course)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={() => deleteCourse(course)}>
                    <DeleteOutlined />
                </Button>
            ]}
        >
            <img
                src={courseData.image_480x270}
                alt={courseData.title}
                style={{ width: "100px", marginRight: "20px" }}
            />
            <List.Item.Meta
                title={`${courseData.title} | ID: ${course.idCourse}`}
                description={courseData.headline}
            />
        </List.Item>
    )
}