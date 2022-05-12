import { 
    Box,
    ListItem, 
    ListItemButton, 
    ListItemText 
} from '@mui/material'
import { useLocation, Link, useMatch } from 'react-router-dom';    

function SideBar() {
    // TODO: Add react router && layout
    const match = useMatch()
    console.log(match)
    const items = [
        {
            name: 'Friends',
            path: '/friend',
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
            <ListItem sx={sidebarListStyle}>
                {items.map((item) => {
                    return (
                        <Link to={item.path} key={item.name} style={sidebarTextStyle}>
                            <ListItemButton key={item.name} onClick={item.onClickItem} >
                                <ListItemText primary={item.name} />
                            </ListItemButton>
                        </Link>
                    )
                })}
            </ListItem>
        </Box>
    )
}

const sidebarStyle = {
    height: '100%',   
    position: 'fixed',
    width: '30%',
}

const sidebarListStyle = {
    display: 'block',
}

const sidebarTextStyle = {
    textDecoration: 'none',
}

export default SideBar