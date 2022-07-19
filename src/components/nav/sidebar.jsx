import { useCallback, useState } from "react"
import MyFriendList from "./list/myFriendList"
import MyChatRoomList from "./list/myChatRoomList"
import MyChatRoomModal from "../modal/myChatRoomModal"
import MyIcon from "../../icon/myIcon"
import { Link } from "react-router-dom"
import ChatRoomList from "../../type/chatRoomList"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton,
    Typography,
    Button,
} from "@mui/material"
import React from "react"

function SideBar({
    isOpen,
    userFriend,
    chatRoomList,
    onClickFriendButtonClickEvent,
    onClickDeleteBtnEvent,
    onSignoutBtnClickEvnet,
    onAddChatRoomListEvent,
}) {
    const [isOpenEditChatRoom, setIsOpenEditChatRoom] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)

    const onClickFriendButtonClickEventHandler = useCallback(
        (isChecked, index) => {
            onClickFriendButtonClickEvent(isChecked, index, false)
        },
        []
    )

    const onSignoutBtnClickEvnetHandler = () => {
        onSignoutBtnClickEvnet()
    }

    const onClickAddChatRoomBtnEventHandler = useCallback(() => {
        setIsOpenModal(true)
    }, [])

    const onClickChatRoomEditBtnEventHandler = () => {
        setIsOpenEditChatRoom((current) => !current)
    }

    const onClickDeleteBtnEventHandler = useCallback((checked, uuid) => {
        onClickDeleteBtnEvent(checked, uuid)
    }, [])

    const onClickCloseModalEventHandler = useCallback((closed) => {
        setIsOpenModal(closed)
    }, [])

    const onAddChatRoomListEventHanlder = useCallback(
        (chatRoomName, friendList) => {
            onAddChatRoomListEvent(chatRoomName, friendList)
            setIsOpenModal(false)
        },
        []
    )

    const items = [
        {
            name: "Friends",
            icon: <MyIcon name="friends" />,
            list: (
                <MyFriendList
                    friends={userFriend}
                    onClickFriendButtonClickEvent={
                        onClickFriendButtonClickEventHandler
                    }
                />
            ),
        },
        {
            name: "ChatRooms",
            path: "/",
            icon: <MyIcon name="chat" />,
            list: (
                <React.Fragment>
                    <Button onClick={onClickAddChatRoomBtnEventHandler}>
                        Create
                    </Button>
                    <Button onClick={onClickChatRoomEditBtnEventHandler}>
                        Edit
                    </Button>
                    <MyChatRoomList
                        chatRoom={
                            ChatRoomList.createChatRoomList(chatRoomList)
                                .$_chatRoomList
                        }
                        isOpenEditChatRoom={isOpenEditChatRoom}
                        onClickDeleteBtnEvent={onClickDeleteBtnEventHandler}
                    />
                </React.Fragment>
            ),
        },
        {
            name: "Schedule",
            path: "/",
            icon: <MyIcon name="calendar" />,
            list: (
                <ListItemButton divider={true}>
                    <Typography>FoxMon"s Schedule</Typography>
                </ListItemButton>
            ),
        },
        {
            name: "Logout",
            path: "/",
            icon: <MyIcon name="signout" />,
            list: (
                <ListItemButton
                    divider={true}
                    onClick={onSignoutBtnClickEvnetHandler}
                >
                    <Typography>Logout</Typography>
                </ListItemButton>
            ),
        },
    ]

    return (
        <Box sx={sidebarStyle}>
            <Box>
                {items.map((item) => {
                    return (
                        <Accordion
                            key={item.name}
                            sx={sidebarListStyle}
                            disableGutters={false}
                        >
                            <AccordionSummary
                                expandIcon={isOpen && <MyIcon name="expand" />}
                            >
                                <Typography>
                                    {item.icon} {isOpen && item.name}
                                </Typography>
                            </AccordionSummary>
                            {isOpen && (
                                <AccordionDetails>
                                    {item.name !== "Friends" ? (
                                        <Link
                                            to={item.path}
                                            style={sidebarLinkStyle}
                                        >
                                            {item.list}
                                        </Link>
                                    ) : (
                                        item.list
                                    )}
                                </AccordionDetails>
                            )}
                        </Accordion>
                    )
                })}
            </Box>
            {isOpenModal && (
                <MyChatRoomModal
                    isOpenModal={isOpenModal}
                    onClickCloseModalEvent={onClickCloseModalEventHandler}
                    onClickAddChatRoomBtnEvent={
                        onClickAddChatRoomBtnEventHandler
                    }
                    onAddChatRoomListEvent={onAddChatRoomListEventHanlder}
                    friend={userFriend}
                />
            )}
        </Box>
    )
}

const sidebarStyle = {
    height: "100%",
    overflow: "auto",
}

const sidebarListStyle = {
    display: "block",
    width: "100%",
}

const sidebarLinkStyle = {
    textDecoration: "none",
    color: "black",
}

export default SideBar
