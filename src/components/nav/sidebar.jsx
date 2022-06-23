import {
    useState,
    useContext,
    useCallback,
} from 'react'
import FriendList from './list/friendList'
import ChatRoomList from './list/chatRoomList'
import MyIcon from '../../icon/MyIcon'
import MyInfoPopup from '../popup/myInfoPopup'
import { Link } from 'react-router-dom'
import { createFriendsList, createChatRoomList } from '../../dev/testData'
import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton,
    Typography,
} from '@mui/material'
import { UserContext } from '../../context/userContextProvider'
import Lodash from 'lodash'

function SideBar({ isOpen }) {
    const [isOpenUserPopup, setIsOpenUserPopup] = useState(false)
    const [friendIndex, setIsFriendIndex] = useState(0)
    const { onSignoutButtonClickHandler } = useContext(UserContext)

    const friends = doFriendsFetchResult.call(this)
    const chatRooms = doChatRoomFetchResult.call(this)

    const onClickFriendButtonClickEventHandler = useCallback((isChecked, index) => {
        setIsOpenUserPopup(isChecked)
        setIsFriendIndex(index)
    }, [])

    const onCloseEventHandler = useCallback((checked) => {
        setIsOpenUserPopup(checked)
    }, [])

    const onSignoutBtnClickHandler = () => {
        onSignoutButtonClickHandler()
    }

    const items = [
        {
            name: 'Friends',
            icon: <MyIcon name='friends' />,
            list: <FriendList
                friends={friends.allFriends}
                onClickFriendButtonClickEvent={onClickFriendButtonClickEventHandler}
            />
        },
        {
            name: 'ChatRooms',
            path: '/chat',
            icon: <MyIcon name='chat' />,
            list: <ChatRoomList chatRoom={chatRooms.allChatRooms} />,
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
            list: <ListItemButton divider={true} onClick={onSignoutBtnClickHandler}><Typography>Logout</Typography></ListItemButton>,
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
            <MyInfoPopup
                isClickInfo={isOpenUserPopup}
                onCloseEvent={onCloseEventHandler}
                user={friends.allFriends[friendIndex]}
            />
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