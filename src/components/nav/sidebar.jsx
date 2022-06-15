import { useState } from 'react'
import MyIcon from '../../icon/MyIcon'
import MyInfoPopup from '../popup/myInfoPopup'
import { Link } from 'react-router-dom'
import { createFriendsList, createChatRoomList } from '../../dev/testData'
import Lodash from 'lodash'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton,
    Typography,
} from '@mui/material'

function SideBar({ isOpen }) {
    const [isOpenUserPopup, setIsOpenUserPopup] = useState(false)

    const items = [
        {
            name: 'Friends',
            icon: <MyIcon name='friends' />,
            list: (() => {
                const friends = doFriendsFetchResult.call(this)
                return friends.allFriends.map((f, i) => {
                    const onClickFriendButtonHandler = (isChecked) => () => {
                        setIsOpenUserPopup(isChecked)
                    }

                    const onCloseFriendButtonHandler = (isChecked) => {
                        setIsOpenUserPopup(isChecked)
                    }
                    return (
                        <Box key={f.friendUuid}>
                            <ListItemButton
                                divider={true}
                                onClick={onClickFriendButtonHandler(true, i)}
                            >
                                <Typography>{f.friendNickname}</Typography>
                            </ListItemButton>
                            <MyInfoPopup
                                isClickInfo={isOpenUserPopup}
                                onCloseEvent={onCloseFriendButtonHandler}
                                user={friends.allFriends[i]}
                            />
                        </Box>
                    )
                })
            })(),
        },
        {
            name: 'ChatRooms',
            path: '/chat',
            icon: <MyIcon name='chat' />,
            list: (() => {
                const chatRooms = doChatRoomFetchResult.call(this)
                return chatRooms.allChatRooms.map((c) => {
                    return (
                        <ListItemButton
                            key={c.uuid}
                            divider={true}
                        >
                            <Typography>{c.name}</Typography>
                        </ListItemButton>
                    )
                })
            })(),
        },
        {
            name: 'Schedule',
            path: '/',
            icon: <MyIcon name='calendar' />,
            list: <ListItemButton divider={true}><Typography>FoxMon's Schedule</Typography></ListItemButton>,
        },
        {
            name: 'Logout',
            path: '/',
            icon: <MyIcon name='signout' />,
            list: <ListItemButton divider={true}><Typography>Logout</Typography></ListItemButton>,
        },
    ]

    return (
        <Box sx={sidebarStyle}>
            {items.map(item => {
                return (
                    <Accordion key={item.name} sx={sidebarListStyle} disableGutters={false}>
                        <AccordionSummary expandIcon={isOpen && <MyIcon name='expand' />}>
                            <Typography>{item.icon} {isOpen && item.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.name !== 'Friends' ?
                                <Link
                                    to={item.path}
                                    style={sidebarLinkStyle}
                                >
                                    {item.list}
                                </Link> :
                                item.list
                            }
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    )
}

// 하나의 Fetch에서 관리하는건 어떨까?
function doFriendsFetchResult() {
    const friendList = createFriendsList()
    const fetchResult = {}
    fetchResult.allFriends = friendList.friendListArray()
    fetchResult.target = {}
    Lodash.forEach(friendList.friendListObject(), (v, k) => {
        fetchResult.target[k] = v
    })
    return fetchResult
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
    height: '100%',
    backgroundColor: 'white',
    overflow: 'auto',
}

const sidebarListStyle = {
    display: 'block',
    width: '100%',
}

const sidebarLinkStyle = {
    textDecoration: 'none',
    color: 'black',
}

export default SideBar