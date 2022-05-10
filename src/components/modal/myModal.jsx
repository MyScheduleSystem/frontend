import React from "react";
import { 
    Modal, 
    Box, 
    Input 
} from "@mui/material";

function MyModal({ isClickModal, onClose, todoItems }) {
    const onCloseHandler = () => {
        onClose(false);
    };

    return (
        <Modal 
            style={modalStyle} 
            open={isClickModal} 
            onClose={onCloseHandler}
        >
            <Box sx={boxStyle}>
                {todoItems.map((item, i) => {
                    return (
                        <div key={i}>
                            <p>{item.content}</p>
                            <p>{item.content}</p>
                        </div>
                    );
                })}
                <Input />
            </Box>
        </Modal>
    );
}

const modalStyle = {
    alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    textAlign: 'center',
}

const boxStyle = {
    width: 300,
    height: 300,
    backgroundColor: 'blue',
    opacity: [0.9, 0.8, 0.7],
}

export default MyModal;