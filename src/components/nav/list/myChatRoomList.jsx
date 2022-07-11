import React from "react"
import {
    IconButton,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material"
import MyIcon from "../../../icon/myIcon"

function MyChatRoomList({ chatRoom, isOpenEditCharRoom, onClickDeleteBtnEvent }) {
    const onClickDeleteBtnEventHandler = (uuid) => {
        onClickDeleteBtnEvent(uuid)
    }

    return (
        chatRoom.map((c) => {
            return (
                <React.Fragment key={c.uuid}>
                    {!isOpenEditCharRoom ?
                        <ListItemButton
                            divider={true}
                        >
                            <Typography>{c.name}</Typography>
                        </ListItemButton>
                        :
                        <ListItem
                            sx={myChatRoomEditStyle}
                            secondaryAction={
                                <IconButton 
                                    edge="end"
                                    onClick={onClickDeleteBtnEventHandler(c.uuid)}
                                >
                                    <MyIcon name="delete" />
                                </IconButton>
                            }
                        >
                            <Typography>{c.name}</Typography>
                        </ListItem>
                    }
                </React.Fragment>
            )
        })
    )
}

const myChatRoomEditStyle = {
    // display: "flex",
}

export default MyChatRoomList