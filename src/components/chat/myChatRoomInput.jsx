import { useRef } from 'react'
import MyIcon from '../../icon/MyIcon'
import {
    Grid,
    ListItem,
    ListItemText,
    TextField,
} from '@mui/material'
import DateType from '../../type/dateType'

const MyChatRoomInput = () => {
    const textFieldRef = useRef()

    const onMessageKeyDownHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        const message = messageSendEvent.call(this, e, null)
        console.log(message)
    }

    const onSendButtonClickHandler = () => {
        const value = textFieldRef.current.childNodes[1].firstChild.value
        const message = messageSendEvent.call(this, null, value)
        console.log(message)
    }

    return (
        <Grid container={true}>
            <Grid 
                item={true} 
                xs={11}
            >
                <TextField 
                    ref={textFieldRef}
                    fullWidth={true} 
                    label="Enter your message" 
                    onKeyDown={onMessageKeyDownHandler}
                />
            </Grid>
            <Grid 
                item={true}
                xs={1} 
                align="right"
            >
                <ListItem button={true} onClick={onSendButtonClickHandler}>
                    <ListItemText align="center" primary={<MyIcon name="send" />} />
                </ListItem>
            </Grid>
        </Grid>
    )
}

function messageSendEvent(e, value) {
    const message = {}
    if(e == null) {
        if(value == null) return
        message.message = value
        message.time = DateType.getTime()
    } else {
        message.message = e.target.value
        message.time = DateType.getTime()
    }
    return message
}

export default MyChatRoomInput