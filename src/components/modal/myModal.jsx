import React, { useState, useEffect } from "react";
import CardModal from './cardModal'
import CardItem from '../card/CardItem'
import EmptyCard from "../card/emptyCard"
import { 
    Modal, 
    Box, 
    Button,
} from "@mui/material";

function MyModal({ isClickModal, onClose, onAddList, todoItems }) {
    const [isOpenCardModal, setIsOpenCardModal] = useState(false)
    const [todoItemList] = useState([])
    // renderItemList가 data를 가지고 있는 것
    const [renderItemList] = useState([])

    useEffect(() => {
        const item = todoItemList.slice()
        const newArr = todoItems.concat(item)
        renderItemList.push(...newArr)
    }, [todoItemList])

    const onCloseHandler = () => onClose(false)


    const onCardModalShow = (isShow) => {
        setIsOpenCardModal(isShow)
    }

    const onCardModalCloseHandler = (isClose) => {
        setIsOpenCardModal(isClose)
    }

    const onAddTodoItemList = (addedItem) => {
        todoItemList.push(...addedItem)
    }

    const onSaveButtonClickHandler = () => {
        const addedItem = todoItemList.slice()
        // MyCanlendar로 item전달
        onAddList(addedItem)
        todoItemList.splice(0, todoItemList.length)
    }

    const onCancelButtonClickHandler = () => {
        onClose(false)
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
                <Box sx={cardListStyle}>
                    {!isOpenCardModal && renderItemList.map((item, i) => {
                        return (
                            <CardItem key={i} />
                        )
                    })}
                    <EmptyCard onCardModalShow={onCardModalShow} />
                </Box>
                <CardModal 
                    isCardModalShow={isOpenCardModal} 
                    cardModalClose={onCardModalCloseHandler}
                    addTodoItemList={onAddTodoItemList}
                />
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
    width: '90%',
    height: '90%',
    backgroundColor: '#fff',
    borderRadius: '10px',
    opacity: '0.95'
}

const topBoxStyle = {
    height: '5%',
    width: '100%',
    paddingTop: '10px',
}

const cardListStyle = {
    display: 'grid',
    placeItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
}

export default MyModal;