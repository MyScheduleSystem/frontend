import { 
    Avatar, 
    Box, 
    Button, 
    Container, 
    Typography,
    ListItemText,
} from "@mui/material"
import React from "react"

const SnsHeadNav = () => {
    return (
        <Container sx={snsHeadBoxStyle}>
            <Box sx={avatarStyle}>
                <Avatar 
                    sx={snsAvatarSizeStyle} 
                    src={`${process.env.PUBLIC_URL}/images/instargramAvatar.jpg`} 
                />
            </Box>
            <Box>
                <Typography variant="h3">leeJB1234</Typography>
                <Box sx={buttonStyle}>
                    <Box sx={buttonsStyle}>
                        <Button variant="outlined">메시지 보내기</Button>
                    </Box>
                    <Box sx={buttonsStyle}>
                        <Button variant="contained">팔로우</Button>
                    </Box>
                </Box>
                <Box sx={followerStyle}>
                    <Box sx={typographyStyle}>
                        <Typography variant="h5">Follow</Typography>
                    </Box>
                    <Box sx={typographyStyle}>
                        <Typography variant="h5">Follower</Typography>
                    </Box>
                </Box>
                <ListItemText secondary="Lee Ju Bin" />
            </Box>
        </Container>
    )
}

const snsHeadBoxStyle = {
    width: "100%",
    display: "flex",
    justifyContent: "center",
}

const snsAvatarSizeStyle = {
    width: 200,
    height: 200,
}
const avatarStyle = {
    mr: 3,
}

const buttonStyle = {
    display: "flex",
    mr: 3,
    mb: 1,
    mt: 1,
}

const buttonsStyle = {
    mr: 1,
}

const followerStyle = {
    display: "flex",
}

const typographyStyle = {
    mr: 1,
}

export default SnsHeadNav