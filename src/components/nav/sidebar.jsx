import { useCallback, useState } from "react"
import { useNavigate } from "react-router-dom"
import MyFriendList from "./list/myFriendList"
import MyChatRoomList from "./list/myChatRoomList"
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
    const [isOpenEditCharRoom, setIsOpenEditChatRoom] = useState(false)
    const navigate = useNavigate()

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
        navigate("/chat/:id")
    }

    const onClickChatRoomEditBtnEventHandler = () => {
        console.log(userFriend)
        setIsOpenEditChatRoom(current => !current)
    }

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
                    isOpenEditCharRoom={isOpenEditCharRoom}
                />,
            add: <Button>추가</Button>,
            edit: 
                <Button
                    onClick={onClickChatRoomEditBtnEventHandler}
                >
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
                                        {item.edit}
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
