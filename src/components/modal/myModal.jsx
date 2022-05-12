import React, { useState, useEffect } from "react";
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
    const [todoItemList] = useState([])
    const [renderItem, setRenderItem] = useState([])

    useEffect(() => {
        const data = dataForRender(todoItems)
        setRenderItem(() => data)
    }, [todoItems])

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
        onAddList(addedItem, renderItem.length + 1)
        todoItemList.splice(0, todoItemList.length)
    }

    const onCancelButtonClickHandler = () => {
        onClose(false)
    }

    const dataForRender = (todoItems) => {
        if(Lodash.size(todoItems) === 0) return []
        const item = todoItems
        const rtnArr = []
        Lodash.forEach(item, (v, k) => {
            const cardId = k
            v.forEach(e => {
                const obj = {}
                obj.cardId = cardId
                obj.title = e.title
                obj.tileContent = e.tileContent
                obj.content = e.content
                obj.startDate = e.startDate
                obj.endDate = e.endDate
                rtnArr.push(obj)
            })
        })

        return rtnArr
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
                    {renderItem.map((item, i) => {
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