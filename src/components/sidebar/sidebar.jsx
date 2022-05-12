import React, { useState } from 'react';
import { 
    Box,
    ListItem, 
    ListItemButton, 
    ListItemText ,
    IconButton,
} from '@mui/material'    
import MyIcon from '../../icon/MyIcon';
import { Link } from 'react-router-dom';

function SideBar() {
    // TODO: Add react router && layout
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar)
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
            <IconButton sx={iconButtonStyle} onClick={showSidebar}>
                <MyIcon name='bars' />
            </IconButton>
            {sidebar &&
                <ListItem sx={sidebarListStyle}>
                    {items.map((item) => {
                        return (
                            <Link to={item.path} style={sidebarTextStyle} key={item.name} >
                                <ListItemButton onClick={item.onClickItem}>
                                    <ListItemText primary={item.name} />
                                </ListItemButton>
                            </Link>
                        )
                    })}
                </ListItem>
            }
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
    color: 'black'
}

const iconButtonStyle = {
    mr: '2',
}

export default SideBar