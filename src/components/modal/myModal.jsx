import React from "react";
import { Modal, Box } from "@mui/material";

function MyModal({ isClickModal, onClose, todoItems }) {
    const onCloseHandler = () => {
        onClose(false);
    };

    return (
        <Modal open={isClickModal} onClose={onCloseHandler}>
            <Box>
                {todoItems.map((item, i) => {
                    return (
                        <div key={i}>
                            <p>{item.content}</p>
                            <p>{item.content}</p>
                        </div>
                    );
                })}
            </Box>
        </Modal>
    );
}

export default MyModal;
