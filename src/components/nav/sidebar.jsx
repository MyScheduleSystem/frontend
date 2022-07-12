import { useCallback, useState } from "react"
import MyFriendList from "./list/myFriendList"
import MyChatRoomList from "./list/myChatRoomList"
import MyChatRoomModal from "../modal/myChatRoomModal"
import MyIcon from "../../icon/myIcon"
import { Link } from "react-router-dom"
import { createChatRoomList } from "../../dev/testData"
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton,
    Typography,
    Button,
} from "@mui/material"
import Lodash from "lodash"
import React from "react"

const chatRooms = doChatRoomFetchResult.call(this)

function SideBar({
    isOpen,
    userFriend,
    onClickFriendButtonClickEvent,
    onSignoutBtnClickEvnet,
}) {
    const [isOpenEditChatRoom, setIsOpenEditChatRoom] = useState(false)
    const [isOpenModal, setIsOpenModal] = useState(false)
    const [deleteChatRoom, setDeleteChatRoom] = useState()

    const onClickFriendButtonClickEventHandler = useCallback(
        (isChecked, index) => {
            onClickFriendButtonClickEvent(isChecked, index, false)
        },
        []
    )

    const onSignoutBtnClickEvnetHandler = () => {
        onSignoutBtnClickEvnet()
    }

    const onClickAddChatRoomBtnEventHandler = () => {
        setIsOpenModal(true)
    }

    const onClickChatRoomEditBtnEventHandler = () => {
        setIsOpenEditChatRoom(current => !current)
    }
    
    const onClickDeleteBtnEventHandler = (uuid) => () => {
        setDeleteChatRoom(() => chatRooms.allChatRooms.filter((value) => value.uuid !== uuid))
    }

    const onClickCloseModalEventHandler = useCallback((closed) => {
        setIsOpenModal(closed)
    }, [isOpenModal])

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
            path: "/chat",
            icon: <MyIcon name="chat" />,
            list: <MyChatRoomList 
                    chatRoom={chatRooms.allChatRooms}
                    isOpenEditCharRoom={isOpenEditChatRoom}
                    onClickDeleteBtnEvent={onClickDeleteBtnEventHandler}
                />,
            add: <Button onClick={onClickAddChatRoomBtnEventHandler}>
                    추가
                </Button>,
            edit: 
                <Button onClick={onClickChatRoomEditBtnEventHandler}>
                    편집
                </Button>,
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
                                        <React.Fragment>
                                            {item.add}{item.edit}
                                            <Link
                                                to={item.path}
                                                style={sidebarLinkStyle}
                                            >
                                                {item.list}
                                            </Link>
                                        </React.Fragment>
                                    ) : (
                                        item.list
                                    )}
                                </AccordionDetails>
                            )}
                        </Accordion>
                    )
                })}
                {isOpenModal && 
                    <MyChatRoomModal 
                        isOpenModal={isOpenModal}
                        onClickCloseModalEvent={onClickCloseModalEventHandler}
                        friend={userFriend}
                    />
                }
            </Box>
        </Box>
    )
}

function doChatRoomFetchResult() {
    const chatRoomList = createChatRoomList()
    const fetchResult = {}
    fetchResult.allChatRooms = chatRoomList.chatRoomList()
    fetchResult.target = {}
    Lodash.forEach(chatRoomList.asChatRoomObject(), (v, k) => {
        fetchResult.target[k] = v
    })
    return fetchResult
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
