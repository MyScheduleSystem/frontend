import { 
    Box,
    ListItem, 
    ListItemButton, 
    ListItemText 
} from '@mui/material'

function SideBar() {
    // TODO: Add react router && layout
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
                {items.map(item => {
                    return (
                        <ListItemButton key={item.name} onClick={item.onClickItem}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
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

export default SideBar