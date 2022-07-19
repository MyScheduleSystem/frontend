import React, { useState, useRef } from "react"
import { useDrop } from "react-dnd"
import AlertPopup from "../popup/alertPopup"
import SelectList from "../nav/list/selectList"
import ArrayUtil from "../../util/arrayUtil"
import { 
    Modal, Card, CardHeader,
    Checkbox, Divider, List,
    Grid, Button, Input,
} from "@mui/material"


function MyChatRoomModal({ 
    isOpenModal, 
    onClickCloseModalEvent,
    onAddChatRoomListEvent,
    friend,
}) {
    const [checked, setChecked] = useState([])
    const [unCompletedList, setUnCompletedList] = useState([ ...friend ])
    const [completedList, setCompletedList] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const inputRef = useRef()

    const unCompletedChecked = ArrayUtil.intersection(checked, unCompletedList)
    const completedChecked = ArrayUtil.intersection(checked, completedList)

    const onClickCloseModalEventHandler = () => {
        onClickCloseModalEvent(false)
    }

    const onClickToggleEventHanlder = (value) => () => {
        const currentIndex = checked.indexOf(value)
        const newChecked = [...checked]

        if (currentIndex === -1) {
            newChecked.push(value)
        } else {
            newChecked.splice(currentIndex, 1)
        }

        setChecked(newChecked)
    }

    const onClickNumberOfChekedEventHandler = (items) => ArrayUtil.intersection(checked, items).length

    const onClickToggleAllEventHandler = (items) => () => {
        if (onClickNumberOfChekedEventHandler(items) === items.length) {
            setChecked(ArrayUtil.not(checked, items))
        } else {
            setChecked(ArrayUtil.union(checked, items))
        }
    }

    const onClickChekedRgihtEventHandler = () => {
        setCompletedList(completedList.concat(unCompletedChecked))
        setUnCompletedList(ArrayUtil.not(unCompletedList, unCompletedChecked))
        setChecked(ArrayUtil.not(checked, unCompletedChecked))
    }

    const onClickChekedLeftEventHandler = () => {
        setUnCompletedList(unCompletedList.concat(completedChecked))
        setCompletedList(ArrayUtil.not(completedList, completedChecked))
        setChecked(ArrayUtil.not(checked, completedChecked))
    }

    const onAddChatRoomListEventHandelr = () => {
        if (completedList.length < 1) {
            setIsOpen(true)
            return
        }
        if (inputRef.current.value === "") {
            inputRef.current.value = "NEW CREATED CHATROOM"
        }
        onAddChatRoomListEvent(inputRef.current.value, completedList)
    }

    const onClickOpenEventHandler = (isCheked) => {
        setIsOpen(isCheked)
    }

    const [{ isOver }, unCompletedOverRef] = useDrop({
        accept: "unCompletedList",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    })

    const [{ isOver: isCompletedOver }, completedOverRef] = useDrop({
        accept: "completedList",
        collect: (monitor) => ({ isOver: !!monitor.isOver() }),
    })

    const onMoveUnCompletedEventHandler = (item) => {
        setUnCompletedList((prev) => prev.filter((friend) => friend.uuid !== item.uuid))
        setCompletedList((prev) => [...prev, item])
    }

    const onMoveCompletedEventHandler = (item) => {
        setCompletedList((prev) => prev.filter((friend) => friend.uuid !== item.uuid))
        setUnCompletedList((prev) => [...prev, item])
    }

    return (
        <React.Fragment>
            <AlertPopup 
                isShowPopup={isOpen}
                setIsShowPopupEvent={onClickOpenEventHandler}
                message="Please check your friendlist"
            />
            <Modal
                sx={modalStyle}
                open={isOpenModal}
                onClose={onClickCloseModalEventHandler}
            >
                <Grid container={true} sx={girdStyle} spacing={2}>
                <Input inputRef={inputRef} />
                <Button 
                    variant="contained"
                    onClick={onAddChatRoomListEventHandelr}
                >
                    CREATE
                </Button>
                    <Grid item={true}>
                        <Card>
                            <CardHeader 
                                sx={cardHeaderStyle}
                                avatar={
                                    <Checkbox
                                        onClick={onClickToggleAllEventHandler(unCompletedList)}
                                        checked={
                                            onClickNumberOfChekedEventHandler(unCompletedList) === unCompletedList.length &&
                                            unCompletedList.length !== 0}
                                        indeterminate={
                                            onClickNumberOfChekedEventHandler(unCompletedList) !== unCompletedList.length && 
                                            onClickNumberOfChekedEventHandler(unCompletedList) !== 0
                                        }
                                        disabled={unCompletedList.length === 0}
                                        inputProps={{
                                            "aria-label": "all items selected",
                                        }}
                                    />
                                }
                                title="unCompletedList"
                                subheader={`${onClickNumberOfChekedEventHandler(unCompletedList)}/${unCompletedList.length} selected`}/>
                            <Divider />
                            <List
                                sx={listStyle}
                                ref={completedOverRef}
                                dense={true}
                                component="div"
                                role="list"
                            >
                                {unCompletedList.map((friend, index) => {
                                    return(
                                        <SelectList
                                            key={friend.uuid}
                                            friend={friend}
                                            index={index}
                                            type="unCompletedList"
                                            checked={checked}
                                            onMoveDragEvent={onMoveUnCompletedEventHandler}
                                            onClickToggleAllEvent={onClickToggleAllEventHandler}
                                            onClickNumberOfChekedEvent={onClickNumberOfChekedEventHandler}
                                            onClickToggleEvent={onClickToggleEventHanlder}
                                        />
                                    )
                                })}
                            </List>
                        </Card>
                        </Grid>
                    <Grid item={true}>
                        <Grid container={true} sx={girdButtonListStyle} direction="column">
                            <Button
                                sx={girdButtonStyle}
                                variant="outlined"
                                size="large"
                                onClick={onClickChekedRgihtEventHandler}
                                disabled={unCompletedChecked.length === 0}
                                aria-label="move selected right"
                            >
                                &gt;
                            </Button>
                            <Button
                                sx={girdButtonStyle}
                                variant="outlined"
                                size="large"
                                onClick={onClickChekedLeftEventHandler}
                                disabled={completedChecked.length === 0}
                                aria-label="move selected left"
                            >
                                &lt;
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid item={true}>
                        <Card>
                            <CardHeader 
                                sx={cardHeaderStyle}
                                avatar={
                                    <Checkbox
                                        onClick={onClickToggleAllEventHandler(completedList)}
                                        checked={
                                            onClickNumberOfChekedEventHandler(completedList) === completedList.length &&
                                            completedList.length !== 0}
                                        indeterminate={
                                            onClickNumberOfChekedEventHandler(completedList) !== completedList.length && 
                                            onClickNumberOfChekedEventHandler(completedList) !== 0
                                        }
                                        disabled={completedList.length === 0}
                                        inputProps={{
                                            "aria-label": "all items selected",
                                        }}
                                    />
                                }
                                title="CompletedList"
                                subheader={`${onClickNumberOfChekedEventHandler(completedList)}/${completedList.length} selected`}/>
                            <Divider />
                            <List
                                sx={listStyle}
                                ref={unCompletedOverRef}
                                dense={true}
                                component="div"
                                role="list"
                            >
                                {completedList.map((friend, index) => {
                                    return(
                                        <SelectList
                                            key={index + friend.uuid}
                                            friend={friend}
                                            index={index}
                                            type="completedList"
                                            checked={checked}
                                            onMoveDragEvent={onMoveCompletedEventHandler}
                                            onClickToggleAllEvent={onClickToggleAllEventHandler}
                                            onClickNumberOfChekedEvent={onClickNumberOfChekedEventHandler}
                                            onClickToggleEvent={onClickToggleEventHanlder}
                                        />
                                    )
                                })}
                            </List>
                        </Card>
                    </Grid>
                </Grid>
            </Modal>
        </React.Fragment>
    )
}

const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}

const girdStyle = {
    width: "70%",
    height: "80%",
    backgroundColor: "#fff",
    borderRadius: "10px",
    opacity: "0.95",
    justifyContent: "center",
    alignItems: "center",
}

const girdButtonListStyle = {
    alignItems: "center",
}

const cardHeaderStyle = {
    px: 2,
    py: 1,
}

const listStyle = {
    width: 200,
    height: 230,
    bgcolor: "background.paper",
    overflow: "auto",
}

const girdButtonStyle = {
    my: 0.5,
}

export default MyChatRoomModal