import {
    Box,
    AppBar,
    IconButton,
    Toolbar,
    Typography,
    Badge,
} from '@mui/material'
import MyIcon from '../../icon/MyIcon'

const Header = () => {
    return (
        <Box sx={headerBoxStyle}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
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