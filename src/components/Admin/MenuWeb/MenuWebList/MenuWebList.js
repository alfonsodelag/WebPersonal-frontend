import React, { useState, useEffect } from 'react';
import {
    Switch,
    List,
    Button,
    Modal as ModalAntd,
    notification
}
    from "antd";

import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import Modal from "../../../Modal";
import DragSortableList from 'react-drag-sortable'
import { updateMenuApi, activateMenuApi, deleteMenuApi } from "../../../../api/menu";
import { getAccessTokenApi } from "../../../../api/auth";
import AddMenuWebForm from "../AddMenuWebForm";
import EditMenuWebForm from "../EditMenuWebForm";

import "./MenuWebList.scss";


const { confirm } = ModalAntd;

export default function MenuWebList(props) {
    const { menu, setReloadMenuWeb } = props;
    const [listItems, setListItems] = useState([]);
    const [isVisibleModal, setIsVisibleModal] = useState(false);
    const [modalTitle, setModalTitle] = useState("");
    const [modalContent, setModalContent] = useState(null);

    console.log(listItems);

    useEffect(() => {
        const listItemsArray = [];

        // This syntax is mentioned in the drag-sortable documentation
        menu.forEach(item => {
            listItemsArray.push({
                content: (
                    <MenuItem
                        item={item}
                        activateMenu={activateMenu}
                        editMenuWebModal={editMenuWebModal}
                        deleteMenu={deleteMenu}
                    />
                )
            });
        });
        setListItems(listItemsArray);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [menu]);

    const activateMenu = (menu, status) => {
        const accessToken = getAccessTokenApi();
        activateMenuApi(accessToken, menu._id, status).then(response => {
            notification["success"]({
                message: response
            })
        })
    }

    // This syntax is mentioned in the drag-sortable documentation
    const onSort = (sortedList, dropEvent) => {
        const accessToken = getAccessTokenApi();

        sortedList.forEach(item => {
            const { _id } = item.content.props.item;
            const order = item.rank;
            updateMenuApi(accessToken, _id, { order });
        })
    }

    const addMenuWebModal = () => {
        setIsVisibleModal(true);
        setModalTitle("Creando nuevo menú");
        setModalContent(
            <AddMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
            />)
    };

    const deleteMenu = menu => {
        const accessToken = getAccessTokenApi();

        confirm({
            title: "Eliminando menú",
            content: `Estás seguro que quieres eliminar el menu ${menu.title} ?`,
            okText: "Eliminar",
            okType: "danger",
            cancelText: "Cancelar",
            onOk() {
                deleteMenuApi(accessToken, menu._id)
                    .then(response => {
                        notification["success"]({
                            message: response
                        });
                        setReloadMenuWeb(true);
                    })
                    .catch(() => {
                        notification["error"]({
                            message: "Error del servidor, intentelo de nuevo"
                        })
                    })
            }

        })
    }

    const editMenuWebModal = menu => {
        setIsVisibleModal(true);
        setModalTitle(`Editando menu: ${menu.title}`);
        setModalContent(
            <EditMenuWebForm
                setIsVisibleModal={setIsVisibleModal}
                setReloadMenuWeb={setReloadMenuWeb}
                menu={menu}
            />
        )
    }

    return (
        <div className="menu-web-list">
            <div className="menu-web-list__header">
                <Button type="primary" onClick={addMenuWebModal}>Create Menu</Button>
            </div>
            <div className="menu-web-list__items">

                <DragSortableList items={listItems} onSort={onSort} type="vertical" />
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

function MenuItem(props) {
    const { item, activateMenu, editMenuWebModal, deleteMenu } = props;

    return (
        <List.Item
            actions={[
                <Switch
                    defaultChecked={item.active}
                    onChange={e => activateMenu(item, e)} />,
                <Button type="primary" onClick={() => editMenuWebModal(item)}>
                    <EditOutlined />
                </Button>,
                <Button type="danger" onClick={() => deleteMenu(item)}>
                    <DeleteOutlined />
                </Button>
            ]
            }
        >
            <List.Item.Meta title={item.title} description={item.url} />
        </List.Item >
    )
}
