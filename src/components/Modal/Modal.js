import React from 'react';
import { Modal as ModalAntd } from "antd";

export default function Modal(props) {

    const { children, title, isVisible, setIsVisibleModal, ...other } = props;

    console.log(other);

    return (
        <ModalAntd
            title={title}
            centered
            visible={isVisible}
            onCancel={() => setIsVisibleModal(false)}
            footer={false}
            {...other}
        >
            {children}
        </ModalAntd>
    )
}
