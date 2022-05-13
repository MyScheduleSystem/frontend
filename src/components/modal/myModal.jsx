import React, { useState } from "react";
import CardModal from './cardModal'
import CardItem from '../card/CardItem'
import EmptyCard from "../card/emptyCard"
import { 
    Modal, 
    Box, 
    Button,
} from "@mui/material";
import Lodash from 'lodash'

function MyModal({ isClickModal, onClose, onAddList, todoItems }) {
    const [isOpenCardModal, setIsOpenCardModal] = useState(false)
    const [todoItemList] = useState(dataForRender.call(this, todoItems))

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
                    {todoItemList.map((item, i) => {
                        return (
                            <CardItem 
                                key={i} 
                                cardItem={item}
                            />
                        )
                    })}
                    <EmptyCard onCardModalShow={onCardModalShow} />
                </Box>
                <CardModal 
                    isCardModalShow={isOpenCardModal} 
                    cardModalClose={onCardModalCloseHandler}
                    onAddTodoItemList={onAddTodoItemList}
                />
            </Box>
        </Modal>
    );
}

const dataForRender = (todoItems) => {
    if(Lodash.size(todoItems) === 0) return []
    const items = todoItems
    const rtnArr = []
    items.forEach((item, i) => {
        const cardId = i + 1
        const obj = {}
        obj.cardId = cardId
        obj.title = item.title
        obj.tileContent = item.tileContent
        obj.content = item.content
        obj.startDate = item.startDate
        obj.endDate = item.endDate
        rtnArr.push(obj)
    })

    return rtnArr
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