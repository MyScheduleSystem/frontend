import { useState } from 'react'
import SideBar from './sidebar'
import MyIcon from '../../icon/MyIcon'
import {
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Badge,
    Drawer,
} from '@mui/material'

const Header = () => {
    const [drawer, setDrawer] = useState({ left: false })

    const onDrawerButtonClickHanlder = (direction, value) => (e) => {
        if(e.type === 'keydown' && (e.key === 'Tab' || e.key ==='Shift')) return
        setDrawer({ ...drawer, [direction]: value })
    }

    return (
        <Box role="presentation">
            <Drawer
                anchor='left'
                hideBackdrop={false}
                open={drawer.left}
                onClose={onDrawerButtonClickHanlder('left', false)}
            >
                <SideBar />
            </Drawer>
            <Box sx={headerBoxStyle}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            onClick={onDrawerButtonClickHanlder('left', true)}
                            sx={iconButtonStyle}
                        >
                            <MyIcon name="menu" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap={true}
                            component="div"
                            sx={logoStyle}
                        >
                            MSS
                        </Typography>
                        <Box sx={middleBoxStyle} />
                        <Box sx={menuInfoStyle}>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <Badge badgeContent={4} color="error">
                                    <MyIcon name="mail" />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                            >
                                <Badge badgeContent={17} color="error">
                                    <MyIcon name="notification" />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                            >
                                <MyIcon name="user" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
        </Box>
    )
}

const headerBoxStyle = {
    flexGrow: 1,
}

const iconButtonStyle = {
    mr: 2,
}

const logoStyle = {
    xs: 'none',
    sm: 'block',
}

const middleBoxStyle = {
    flexGrow: 1,
}

const menuInfoStyle = {
    display: {
        xs: 'none',
        md: 'flex',
    }
}

export default Header