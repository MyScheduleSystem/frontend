import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton,
    Typography,
} from '@mui/material'
import MyIcon from '../../icon/MyIcon';
import { Link } from 'react-router-dom';
import { createFriendsList, createChatRoomList } from '../../dev/testData'
import Lodash from 'lodash'

function SideBar() {
    const items = [
        {
            name: 'Friends',
            path: '/friend',
            icon: <MyIcon name='friends' />,
            list: (() => {
                const friends = doFriendsFetchResult.call(this)
                return friends.allFriends.map((f) => {
                    return (
                        <ListItemButton
                            key={f.friendUuid}
                            divider={true}
                        >
                            <Typography>{f.friendNickname}</Typography>
                        </ListItemButton>
                    )
                })
            })(),
            onClickItem: (e) => {
                console.log(e)
            },
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
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'Schedule',
            path: '/',
            icon: <MyIcon name='calendar' />,
            list: <ListItemButton divider={true}><Typography>FoxMon's Schedule</Typography></ListItemButton>,
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'SignIn',
            path: '/signin',
            icon: <MyIcon name='signin' />,
            list: <ListItemButton divider={true}><Typography>Sign in</Typography></ListItemButton>,
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'SignUp',
            path: '/signup',
            icon: <MyIcon name='signup' />,
            list: <ListItemButton divider={true}><Typography>Sign up</Typography></ListItemButton>,
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'Logout',
            path: '/',
            icon: <MyIcon name='signout' />,
            list: <ListItemButton divider={true}><Typography>Logout</Typography></ListItemButton>,
            onClickItem: (e) => {
                console.log(e)
            },
        },
    ]

    return (
        <Box sx={sidebarStyle}>
            {items.map(item => {
                return (
                    <Accordion key={item.name} sx={sidebarListStyle}>
                        <AccordionSummary expandIcon={<MyIcon name='expand' />}>
                            <Typography>{item.icon} {item.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Link to={item.path} style={sidebarLinkStyle}>
                                {item.list}
                            </Link>
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
    position: 'fixed',
    width: '20%',
    backgroundColor: 'white',
    // Scroll
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