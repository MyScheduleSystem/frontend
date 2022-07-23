import React, { useState, useCallback } from "react"
import MyIcon from "../../../icon/myIcon"
import CheckPopup from "../../popup/checkPopup"
import { IconButton, ListItem, ListItemButton, Typography } from "@mui/material"

function MyChatRoomList({
    chatRoom,
    isOpenEditChatRoom,
    onClickDeleteBtnEvent,
    onClickEnterChatRoomEvent
}) {
    const [isOpen, setIsOpen] = useState(false)
    const [selected, setSelected] = useState("")

    const onClickDeleteBtnEventHandler = (uuid) => () => {
        setIsOpen(true)
        setSelected(uuid)
    }

    const onClickDeleteCheckButtonEventHanlder = useCallback(
        (checked) => {
            onClickDeleteBtnEvent(checked, selected)
            setIsOpen(false)
        },
        [selected]
    )

    const onClickEnterChatRoomEventHandler = (chatRoomInfo) => () => {
        onClickEnterChatRoomEvent(chatRoomInfo)
    }

    return (
        <React.Fragment>
            {chatRoom.length > 0 &&
                chatRoom.map((c) => {
                    return (
                        <React.Fragment key={c.uuid}>
                            {!isOpenEditChatRoom ? (
                                <ListItemButton 
                                    divider={true}
                                    onClick={onClickEnterChatRoomEventHandler(c)}
                                >
                                    <Typography>{c.chatRoomName}</Typography>
                                </ListItemButton>
                            ) : (
                                <ListItem
                                    secondaryAction={
                                        <IconButton
                                            edge="end"
                                            onClick={onClickDeleteBtnEventHandler(
                                                c.uuid
                                            )}
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
                })}
            <CheckPopup
                message="Are you sure you want to delete?"
                isShowPopup={isOpen}
                onCheckPopupEvent={onClickDeleteCheckButtonEventHanlder}
            />
        </React.Fragment>
    )
}

export default MyChatRoomList
