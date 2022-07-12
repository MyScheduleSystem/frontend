import React, { useState } from "react"
import { 
    Modal, Card, CardHeader, 
    Checkbox, Divider, ListItemText, 
    List, ListItem, ListItemIcon,
    Grid, Button,
} from "@mui/material"

const MyChatRoomModal = ({ isOpenModal, onClickCloseModalEvent, friend }) => {
    const [checked, setChecked] = useState([])
    const [unCompletedList, setUnCompletedList] = useState([...friend])
    const [completedList, setCompletedList] = useState([])

    const unCompletedChecked = intersection(checked, unCompletedList)
    const completedChecked = intersection(checked, completedList)
    
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

    const onClickNumberOfChekedEventHandler = (items) => intersection(checked, items).length

    const onClickToggleAllEventHandler = (items) => () => {
        if (onClickNumberOfChekedEventHandler(items) === items.length) {
            setChecked(not(checked, items))
        } else {
            setChecked(union(checked, items))
        }
    }

    const onClickChekedRgihtEventHandler = () => {
        setCompletedList(completedList.concat(unCompletedChecked))
        setUnCompletedList(not(unCompletedList, unCompletedChecked))
        setChecked(not(checked, unCompletedChecked))
    }

    const onClickChekedLeftEventHandler = () => {
        setUnCompletedList(unCompletedList.concat(completedChecked))
        setCompletedList(not(completedList, completedChecked))
        setChecked(not(checked, completedChecked))
    }

    const createChatList = (title, friend) => (
        <Card>
            <CardHeader
                sx={cardHeaderStyle}
                avatar={
                    <Checkbox
                        onClick={onClickToggleAllEventHandler(friend)}
                        checked={
                            onClickNumberOfChekedEventHandler(friend) === friend.length &&
                            friend.length !== 0}
                        indeterminate={
                            onClickNumberOfChekedEventHandler(friend) !== friend.length && 
                            onClickNumberOfChekedEventHandler(friend) !== 0
                        }
                        disabled={friend.length === 0}
                        inputProps={{
                            "aria-label": "all items selected",
                        }}
                    />
                }
                title={title}
                subheader={`${onClickNumberOfChekedEventHandler(friend)}/${friend.length} selected`}
            />
            <Divider />
            <List
                sx={listStyle}
                dense={true}
                component="div"
                role="list"
            >
                {friend.map((value) => {
                const labelId = `transfer-list-all-item-${value.uuid}-label`

                return (
                    <ListItem
                        key={value.uuid}
                        role="listitem"
                        button={true}
                        onClick={onClickToggleEventHanlder(value)}
                    >
                        <ListItemIcon>
                            <Checkbox
                                checked={checked.indexOf(value) !== -1}
                                tabIndex={-1}
                                disableRipple
                                inputProps={{ "aria-labelledby": labelId }}
                            />
                        </ListItemIcon>
                        <ListItemText id={labelId} primary={`${value.nickname}`} />
                    </ListItem>
                    
                )
                })}
                <ListItem />
            </List>
        </Card>
    )

    return (
        <Modal
            sx={modalStyle}
            open={isOpenModal}
            onClose={onClickCloseModalEventHandler}
        >
            <Grid container={true} sx={girdStyle} spacing={2}>
                <Grid item={true}> {createChatList("unCompletedList", unCompletedList)} </Grid>
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
                <Grid item={true}> {createChatList("completedList", completedList)} </Grid>
            </Grid>
        </Modal>
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

const cardHeaderStyle = {
    px: 2,
    py: 1,
}

const girdButtonListStyle = {
    alignItems: "center",
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

function not(a, b) {
    return a.filter((value) => b.indexOf(value) === -1)
}

function intersection(a, b) {
    return a.filter((value) => b.indexOf(value) !== -1)
}

function union(a, b) {
    return [...a, ...not(b, a)]
}