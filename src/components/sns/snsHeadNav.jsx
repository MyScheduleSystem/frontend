import { Avatar, Box, Button, ListItemText } from "@mui/material"
import React from "react"

const SnsHeadNav = () => {
    return (
        <Box sx={snsHeadBoxStyle}>
            <Box>
                <Avatar sx={snsAvatarSizeStyle} src={`${process.env.PUBLIC_URL}/images/instargramAvatar.jpg`} />
            </Box>
            <Box sx={snsInfoStyle} >
                <ListItemText>
                    이주빈
                </ListItemText>
                <Button variant="outlined">메시지 보내기</Button>
                <Button variant="contained">팔로우</Button>
                <ListItemText>
                    팔로우
                </ListItemText>
                <ListItemText>
                    팔로워
                </ListItemText>
            </Box>
        </Box>
    )
}

const snsHeadBoxStyle = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
}

const snsAvatarSizeStyle = {
    width: 150,
    height: 150,
}

const snsInfoStyle = {
    marginLeft: "5rem",
}

export default SnsHeadNav