import { useState } from 'react'
import SideBar from './sidebar'
import MyIcon from '../../icon/MyIcon'
import MyInfoPopup from '../popup/myInfoPopup'
import {
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Badge,
    Drawer,
    Menu,
    MenuItem,
    ListItemText,
} from '@mui/material'
import { createFriendsList } from '../../dev/testData'
import { createNotify } from '../../dev/testData'

const testMyInfo = createFriendsList().$_friendListArray[0]
const testNotifyInfo = doFetchUserNotification()

const Header = () => {
    const [drawer, setDrawer] = useState({ left: false })
    const [isClickInfo, setIsClickInfo] = useState(false)
    const [notiAnchorEl, setNotiAnchorEl] = useState(null)
    const isOpenMenu = Boolean(notiAnchorEl)

    const onDrawerButtonClickHanlder = (direction, value) => (e) => {
        if(e.type === 'keydown' && (e.key === 'Tab' || e.key ==='Shift')) return
        setDrawer({ ...drawer, [direction]: value })
    }

    const onCloseEventHandler = (closed) => {
        setIsClickInfo(closed)
    }

    const onClickUserIconBtnHandler = () => {
        setIsClickInfo(true)
    }

    const onNotificationButtonClickHandler = (e) => {
        setNotiAnchorEl(e.currentTarget)
    }

    const onMenuButtonClickHandler = () => {
        setNotiAnchorEl(null)
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
                                onClick={onNotificationButtonClickHandler}
                            >
                                <Badge badgeContent={17} color="error">
                                    <MyIcon name="notification" />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                onClick={onClickUserIconBtnHandler}
                            >
                                <MyIcon name="user" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>
            <MyInfoPopup
                isClickInfo={isClickInfo}
                onCloseEvent={onCloseEventHandler}
                user={testMyInfo}
            />
            <Menu
                anchorEl={notiAnchorEl}
                open={isOpenMenu}
                onClose={onMenuButtonClickHandler}
            >
                {testNotifyInfo.map((e, i) => {
                    return (
                        <MenuItem
                            key={i}
                            sx={notificationStyle(e.isChecked)}
                            onClick={onMenuButtonClickHandler}
                        >
                            <ListItemText
                                align="left"
                                primary={e.message}
                            />
                            <ListItemText
                                align="right"
                                secondary={e.startDate}
                            />
                        </MenuItem>
                    )
                })}
            </Menu>
        </Box>
    )
}

// TODO: 추후에는 어떤 User의 Notification인지 판별하는 로직도 필요
function doFetchUserNotification() {
    const notiArr = createNotify()
    return notiArr
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

const notificationStyle = (isChecked) => {
    const obj = {
        display: {
            md: 'block',
        },
        background: isChecked === false ? '#fffff0' : 'transparent',
    }
    return obj
}

export default Header