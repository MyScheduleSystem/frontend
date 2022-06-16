import { useState } from 'react'
import SideBar from './sidebar'
import MyIcon from '../../icon/MyIcon'
import MyInfoPopup from '../popup/myInfoPopup'
import {
    Box, IconButton, Divider,
    Toolbar, Typography, Badge,
    Menu, MenuItem, ListItemText,
    styled,
} from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import MuiAppBar from '@mui/material/AppBar'
import { createFriendsList } from '../../dev/testData'
import { createNotify } from '../../dev/testData'

const testMyInfo = createFriendsList().$_friendListArray[0]
const testNotifyInfo = doFetchUserNotification()

const drawerWidth = 240

const openedMixin = (theme, drawerWidth) => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px )`,
    },
})

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
    }),
    }),
)

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const Header = () => {
    const [isClickInfo, setIsClickInfo] = useState(false)
    const [notiAnchorEl, setNotiAnchorEl] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const isOpenMenu = Boolean(notiAnchorEl)

    const onDrawerOpenEventHandler = (open) => () => {
        setIsOpen(open)
    }

    const onDrawerCloseEvnetHandler = (open) => () => {
        setIsOpen(open)
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
            <Box sx={headerBoxStyle}>
                <AppBar position="fixed" open={isOpen}>
                    <Toolbar>
                        <IconButton
                            color="inherit"
                            edge="start"
                            onClick={onDrawerOpenEventHandler(true)}
                            sx={iconButtonStyle(isOpen)}
                        >
                            <MyIcon name="menu" />
                        </IconButton>
                        <Typography
                            variant="h6"
                            noWrap
                            component="div"
                        >
                            MSS
                        </Typography>
                        <Box component="div" sx={menuInfoStyle}>
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
                                <Badge badgeContent={testNotifyInfo.length} color="error">
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
                <Drawer variant='permanent' open={isOpen}>
                    <DrawerHeader>
                        <IconButton onClick={onDrawerCloseEvnetHandler(false)}>
                            My schedule menu
                            <MyIcon name='left' />
                        </IconButton>
                    </DrawerHeader>
                    <Divider />
                    <SideBar isOpen={isOpen} />
                </Drawer>
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
    display: 'flex',
}

const iconButtonStyle = (open) => {
    return {
        marginRight: '5',
        ...(open && { display: 'none' }),
    }
}

const menuInfoStyle = {
    position: 'absolute',
    right: '10px',
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