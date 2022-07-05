import { useState, useCallback, useContext } from "react"
import { Link } from "react-router-dom"
import SideBar from "./sidebar"
import MyIcon from "../../icon/myIcon"
import MyInfoPopup from "../popup/myInfoPopup"
import {
    Box, IconButton, Divider,
    Toolbar, Typography, Badge,
    Menu, MenuItem, ListItemText,
    styled, List, ListItemButton
} from "@mui/material"
import MuiDrawer from "@mui/material/Drawer"
import MuiAppBar from "@mui/material/AppBar"
import { UserContext } from "../../context/userContextProvider"
import imageUploader from "../../service/imageUploaderService"
import { createFriendsList } from "../../dev/testData"
import { createNotify, createMessage } from "../../dev/testData"

const testMyInfo = createFriendsList().$_friendListArray[0]
const testNotifyInfo = doFetchUserNotification()
const testMsg = doFetchMessage()

const drawerWidth = 240

const openedMixin = (theme, drawerWidth) => ({
    width: drawerWidth,
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
})

const closedMixin = (theme) => ({
    transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up("sm")]: {
        width: `calc(${theme.spacing(8)} + 1px )`,
    },
})

const DrawerHeader = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== "open" })(
    ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
    }),
    }),
)

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== "open",
    })(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}))

const Header = () => {
    const [isClickInfo, setIsClickInfo] = useState(false)
    const [notiAnchorEl, setNotiAnchorEl] = useState(null)
    const [msgAnchorEl, setMsgAnchorEl] = useState(null)
    const [isOpen, setIsOpen] = useState(false)
    const isOpenMenu = Boolean(notiAnchorEl)
    const isOepnMsg = Boolean(msgAnchorEl)
    const { userObj } = useContext(UserContext)

    const onDrawerOpenEventHandler = (open) => () => {
        setIsOpen(open)
    }

    const onDrawerCloseEventHandler = (open) => () => {
        setIsOpen(open)
    }

    const onCloseEventHandler = (closed) => {
        setIsClickInfo(closed)
    }

    const onClickUserIconButtonEventHandler = () => {
        setIsClickInfo(true)
    }

    const onNotificationButtonClickEventHandler = (e) => {
        setNotiAnchorEl(e.currentTarget)
    }

    const onMenuButtonClickEventHandler = () => {
        setNotiAnchorEl(null)
        setMsgAnchorEl(null)
    }

    const onMessageButtonClickEventHandler = (e) => {
        setMsgAnchorEl(e.currentTarget)
    }

    const onClickImageUploaderEventHandler = (img, folderName) => {
        imageUploader.imageUpload(userObj.fetchOption.uuid, img, folderName)
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
                        <IconButton>
                            <Link to="/" style={logoButtonStyle}>MSS</Link>
                        </IconButton>
                        <Box component="div" sx={menuInfoStyle}>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={onMessageButtonClickEventHandler}
                            >
                                <Badge badgeContent={testMsg.length} color="error">
                                    <MyIcon name="mail" />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                color="inherit"
                                onClick={onNotificationButtonClickEventHandler}
                            >
                                <Badge badgeContent={testNotifyInfo.length} color="error">
                                    <MyIcon name="notification" />
                                </Badge>
                            </IconButton>
                            <IconButton
                                size="large"
                                edge="end"
                                color="inherit"
                                onClick={onClickUserIconButtonEventHandler}
                            >
                                <MyIcon name="user" />
                            </IconButton>
                        </Box>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={isOpen}>
                    <DrawerHeader>
                        <IconButton onClick={onDrawerCloseEventHandler(false)}>
                            My schedule menu
                            <MyIcon name="left" />
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
                onClickImageUploaderEvent={onClickImageUploaderEventHandler}
            />
            <Menu
                anchorEl={notiAnchorEl}
                open={isOpenMenu}
                onClose={onMenuButtonClickEventHandler}
            >
                {testNotifyInfo.map((e, i) => {
                    return (
                        <MenuItem
                            key={i}
                            sx={listItemButtonStyle(e.isChecked)}
                            onClick={onMenuButtonClickEventHandler}
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
            <Menu
                anchorEl={msgAnchorEl}
                open={isOepnMsg}
                onClose={onMenuButtonClickEventHandler}
            >
                <List sx={msgStyle}>
                    {testMsg.map((item, i) => {
                        // TODO: user avatar 추가
                        return (
                            <ListItemButton
                                key={i}
                                sx={listItemButtonStyle(item.isChecked)}
                                alignItems="flex-start"
                            >
                                <ListItemText
                                    primary={item.getFriendName()}
                                    secondary={
                                        <Typography
                                            sx={msgFriendNameStyle}
                                            component="span"
                                            variant="body2"
                                            color="text.primary"
                                        >
                                            {item.getMessage()}
                                        </Typography>
                                    }
                                />
                                <ListItemText
                                    align="left"
                                    secondary={item.startDate}
                                />
                            </ListItemButton>
                        )}
                    )}
                </List>
            </Menu>
        </Box>
    )
}

// TODO: 추후에는 어떤 User의 Notification인지 판별하는 로직도 필요
function doFetchUserNotification() {
    const notiArr = createNotify()
    return notiArr
}

function doFetchMessage() {
    const msgArr = createMessage()
    return msgArr
}

const headerBoxStyle = {
    display: "flex",
}

const iconButtonStyle = (open) => {
    return {
        marginRight: "5",
        ...(open && { display: "none" }),
    }
}

const logoButtonStyle = {
    color: "#fff",
    textDecoration: "none",
}

const menuInfoStyle = {
    position: "absolute",
    right: "10px",
    display: {
        xs: "none",
        md: "flex",
    }
}

const listItemButtonStyle = (isChecked) => {
    const obj = {
        display: {
            md: "block",
        },
        background: isChecked === false ? "#fffff0" : "transparent",
    }
    return obj
}

const msgStyle = {
    width: "100%",
    maxWidth: 360,
    bgcolor: "background.paper",
}

const msgFriendNameStyle = {
    display: "inline",
}
export default Header