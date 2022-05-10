import React, { useState } from "react";
import MyIcon from "../../icon/MyIcon";
import { 
    Modal, 
    Box, 
    Input 
} from "@mui/material";

function MyModal({ isClickModal, onClose, todoItems }) {
    const [isShowBtn, setIsShowBtn] = useState(false);

    const onCloseHandler = () => {
        onClose(false);
    };
    
    const onMouseOverHandelr = () => {
        setIsShowBtn(true)
    }

    const onMouseOutHandler = () => {
        setIsShowBtn(false)
    }

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
                <div onMouseOver={onMouseOverHandelr} onMouseOut={onMouseOutHandler}>
                    {isShowBtn && <MyIcon name='plus' />}
                    <Input></Input>
                </div>
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