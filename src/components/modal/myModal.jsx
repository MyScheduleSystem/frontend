import React, { useEffect, useState } from "react";
import MyIcon from "../../icon/MyIcon";
import { 
    Modal, 
    Box, 
    Input,
    Button,
} from "@mui/material";

function MyModal({ isClickModal, onClose, todoItems, onPushContent }) {
    const [isInputShow, setIsInputShow] = useState(false)
    const [todoItemList, setTodoItemList] = useState([])
    const onCloseHandler = () => onClose(false)
    const onPlusButtonClickHandler = () => setIsInputShow(true)

    useEffect(() => {
        setTodoItemList(todoItems)
        console.log(todoItemList)
    }, [todoItemList])

    const onEnterHandler = (e) => {
        if(e.key !== 'Enter') return
        const obj = {
            tileContent: e.target.value,
            content: e.target.value,
        }
        onPushContent(obj)
        e.target.value = ''
    }

    return (
        <Modal 
            style={modalStyle} 
            open={isClickModal} 
            onClose={onCloseHandler}
        >
            <Box sx={boxStyle}>
                {todoItemList.map((item, i) => {
                    return (
                        <p key={i}>{item.content}</p>
                    )
                })}
                <Button onClick={onPlusButtonClickHandler}><MyIcon name='plus' /></Button>
                {isInputShow && <Input autoFocus={true} onKeyPress={onEnterHandler} />}
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
    width: '500px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '10px',
    opacity: [0.9, 0.8, 0.7],
}

export default MyModal;