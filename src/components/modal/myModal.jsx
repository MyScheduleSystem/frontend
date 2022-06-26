import { useState, useCallback } from "react"
import CardModal from "./cardModal"
import CardEditModal from "./cardEditModal"
import CardItem from "../card/cardItem"
import EmptyCard from "../card/emptyCard"
import CheckPopup from "../popup/checkPopup"
import {
    Modal,
    Box,
    Button,
} from "@mui/material"
import Lodash from "lodash"

function MyModal({ isClickModal, onCloseEvent, onAddListEvent, todoItems }) {
    const [isOpenCardModal, setIsOpenCardModal] = useState(false)
    const [todoItemList, setTodoItemList] = useState(dataForRender.call(this, todoItems))
    const [editMode, setEditmode] = useState(false)
    const [editTodoItem, setEditTodoItem] = useState({})
    const [isOpenAlert, setIsOpenAlert] = useState(false)
    const [removeIndex, setRemoveIndex] = useState()

    const onCloseEventHandler = () => onCloseEvent(false)

    const onCardModalShow = (isShow) => {
        setIsOpenCardModal(isShow)
    }

    const onCardModalCloseHandler = useCallback((isClose) => {
        setIsOpenCardModal(isClose)
    }, [])

    const onAddTodoItemEventHandler = useCallback((addedItem) => {
        todoItemList.push({
            title: addedItem.title,
            content: addedItem.content,
            startDate: addedItem.startDate,
            endDate: addedItem.endDate,
        })
    }, [todoItemList])

    const onSaveButtonClickHandler = () => {
        const addedItem = todoItemList.slice()
        onAddListEvent(addedItem)
    }

    const onCancelButtonClickHandler = () => {
        onCloseEvent(false)
    }

    const onEditModeEnterEventHandler = useCallback((isClicked, item) => {
        setEditmode(isClicked)
        const obj = {}
        obj.title = item[0]
        obj.content = item[2]
        setEditTodoItem(() => Lodash.cloneDeep(obj))
    }, [])

    const onEditTodoItemEventHandler = useCallback((prev, editedItem) => {
        const find = todoItemList.findIndex((e) => (e.title === prev.title && e.content === prev.content))
        todoItemList[find] = editedItem
        setTodoItemList(() => [...todoItemList])
    }, [todoItemList])

    const onEditModeExitEventHandler = useCallback((isClose) => {
        setEditmode(isClose)
    }, [])

    const onRemoveCardEventHandler = useCallback((i, isOpen) => {
        setIsOpenAlert(isOpen)
        setRemoveIndex(i)
    }, [])

    const onRemoveEventHandler = useCallback((isChecked) => {
        if(isChecked) setTodoItemList(() => todoItemList.filter((e, index) => removeIndex !== index))
        setIsOpenAlert(false)
    }, [todoItemList, removeIndex])

    return (
        <>
            <CheckPopup
                message="Warning"
                isShowPopup={isOpenAlert}
                onCheckPopupEvent={onRemoveEventHandler}
            />
            <Modal
                style={modalStyle}
                open={isClickModal}
                onClose={onCloseEventHandler}
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
                                    index={i}
                                    cardItem={item}
                                    onEditModeEnterEvent={onEditModeEnterEventHandler}
                                    onRemoveCardEvent={onRemoveCardEventHandler}
                                />
                            )
                        })}
                        <EmptyCard onCardModalShow={onCardModalShow} />
                    </Box>
                    <CardModal
                        isCardModalShow={isOpenCardModal}
                        onCardModalCloseEvent={onCardModalCloseHandler}
                        onAddTodoItemEvent={onAddTodoItemEventHandler}
                    />
                    <CardEditModal
                        editTodoItem={editTodoItem}
                        isCardModalShow={editMode}
                        onEditTodoItemEvent={onEditTodoItemEventHandler}
                        onCardModalCloseEvent={onEditModeExitEventHandler}
                    />
                </Box>
            </Modal>
        </>
    )
}

const dataForRender = (todoItems) => {
    if(Lodash.size(todoItems) === 0) return []
    const items = todoItems
    const rtnArr = []
    items.forEach((item, i) => {
        const obj = {}
        obj.title = item.title
        obj.content = item.content
        obj.startDate = item.startDate
        obj.endDate = item.endDate
        rtnArr.push(obj)
    })
    return rtnArr
}

const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}

const boxStyle = {
    width: "90%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    opacity: "0.95",
    overflow: "auto",
}

const topBoxStyle = {
    height: "8%",
    width: "100%",
    paddingTop: "10px",
}

const cardListStyle = {
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
}

export default MyModal