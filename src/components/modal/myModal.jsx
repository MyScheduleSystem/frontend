import React, { useState, useEffect } from "react";
import MyIcon from "../../icon/MyIcon";
import { 
    Modal, 
    Box, 
    Input,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

function MyModal({ isClickModal, onClose, onAddedList, todoItems }) {
    const [isInputShow, setIsInputShow] = useState(false)
    const [todoItemList, setTodoItemList] = useState([])
    const [renderItemList, setRenderItemList] = useState([])

    useEffect(() => {
        const item = todoItemList.slice()
        const newArr = todoItems.concat(item)
        setRenderItemList(newArr)
    }, [todoItemList])

    const onCloseHandler = () => onClose(false)
    const onPlusButtonClickHandler = () => setIsInputShow(true)

    const onEnterHandler = (e) => {
        if(e.key !== 'Enter') return
        const obj = {}
        obj.titleContent = `Todo-${e.target.value}`
        obj.content = e.target.value
        setTodoItemList([ ...todoItemList, obj ])
        setIsInputShow(false)
        e.target.value = ''
    }

    const onSaveButtonClickHandler = () => {
        const addedItem = todoItemList.slice()
        onAddedList(addedItem)
        setTodoItemList(prev => prev = [])
    }

    const onCancelButtonClickHandler = () => {
    }

    return (
        <Modal 
            style={modalStyle} 
            open={isClickModal} 
            onClose={onCloseHandler}
        >
            <Box sx={boxStyle}>
                <Box sx={topBoxStyle}>
                    <Button onClick={onSaveButtonClickHandler}>Save</Button>
                    <Button onClick={onCancelButtonClickHandler}>Cancel</Button>
                </Box>
                <List>
                    {renderItemList.map((item, i) => {
                        return (
                            <ListItem key={i} sx={listItemStyle}>
                                <ListItemText sx={listItemTextStyle} primary={item.content} />
                            </ListItem>
                        )
                    })}
                </List>
                <Button onClick={onPlusButtonClickHandler}><MyIcon name='plus' /></Button>
                {isInputShow && <Input autoFocus={true} onKeyPress={onEnterHandler} />}
            </Box>
        </Modal>
    );
}

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}

const boxStyle = {
    width: '500px',
    height: '500px',
    backgroundColor: '#fff',
    borderRadius: '10px',
}

const listItemStyle = {
    textAlign: 'center',
}

const listItemTextStyle = {
    '&:hover': {
        transform: 'scale(1.02)',
        transition: '0.5s',
    },
}

const topBoxStyle = {
    height: '5%',
    width: '100%',
    paddingTop: '10px',
}

export default MyModal;