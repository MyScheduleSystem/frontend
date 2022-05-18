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
import { getFriendFetchResult } from '../../dev/testData'

function SideBar() {
    const items = [
        {
            name: 'Friends',
            path: '/friend',
            icon: <MyIcon name='friends' />,
            list: (() => {
                const friends = doFriendsFetchResult.call(this)
                return friends.map((f, i) => {
                    return (
                        <ListItemButton
                            key={i}
                            divider={true}
                        >
                            <Typography>{f}</Typography>
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
            list: <ListItemButton divider={true}><Typography>FoxMon's ChatRoom</Typography></ListItemButton>,
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

function doFriendsFetchResult() {
    const result = getFriendFetchResult()
    return result
}

const sidebarStyle = {
    height: '100%',
    position: 'fixed',
    width: '20%',
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