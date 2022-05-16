import { 
    Accordion,
    AccordionDetails,
    AccordionSummary,
    Box,
    ListItemButton, 
    Typography
} from '@mui/material'
import MyIcon from '../../icon/MyIcon';
import { getFriendFetchResult } from '../../dev/testData'

function SideBar() {
    // TODO: Add react router && layout
    const items = [
        {
            name: 'Friends',
            path: '/friend',
            friend: getFriendsFetch.call(this),
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'ChatRooms',
            path: '/chat',
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'Schedule',
            path: '/schedule',
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'SignIn',
            path: '/signin',
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'SignUp',
            path: '/signup',
            onClickItem: (e) => {
                console.log(e)
            },
        },
        {
            name: 'Logout',
            path: '/',
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
                            <Typography>{item.name}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            {item.friend &&
                                item.friend.map((f, i) => {
                                    return <ListItemButton key={i}>{f}</ListItemButton>
                                })
                            }
                        </AccordionDetails>
                    </Accordion>
                )
            })}
        </Box>
    )
}

function getFriendsFetch() {
    const result = getFriendFetchResult()
    return result
}

const sidebarStyle = {
    height: '100%',   
    position: 'fixed',
    width: '30%',
}

const sidebarListStyle = {
    display: 'block',
}

export default SideBar