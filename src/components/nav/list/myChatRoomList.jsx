import React from "react"
import { IconButton, ListItem, ListItemButton, Typography } from "@mui/material"
import MyIcon from "../../../icon/myIcon"

function MyChatRoomList({
    chatRoom,
    isOpenEditChatRoom,
    onClickDeleteBtnEvent,
}) {
    const onClickDeleteBtnEventHandler = (uuid) => () => {
        onClickDeleteBtnEvent(uuid)
    }

    return (
        chatRoom.length > 0 &&
        chatRoom.map((c, i) => {
            return (
                <React.Fragment key={c.uuid}>
                    {!isOpenEditChatRoom ? (
                        <ListItemButton divider={true}>
                            <Typography>{c.chatRoomName}</Typography>
                        </ListItemButton>
                    ) : (
                        <ListItem
                            secondaryAction={
                                <IconButton
                                    edge="end"
                                    onClick={onClickDeleteBtnEventHandler(i)}
                                >
                                    <MyIcon name="delete" />
                                </IconButton>
                            }
                        >
                            <Typography>{c.chatRoomName}</Typography>
                        </ListItem>
                    )}
                </React.Fragment>
            )
        })
    )
}

export default MyChatRoomList
