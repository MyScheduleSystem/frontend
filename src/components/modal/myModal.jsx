import React from "react";
import { Modal, Box } from "@mui/material";

function MyModal({ isClickModal, onClose, todoItems }) {
    const onCloseHandler = () => {
        onClose(false);
    };

    return (
        <Modal open={isClickModal} onClose={onCloseHandler}>
            <Box>
                {todoItems.map((item, i) => (
                    <p key={i}>{item.content}</p>
                ))}
            </Box>
        </Modal>
    );
}

export default MyModal;
