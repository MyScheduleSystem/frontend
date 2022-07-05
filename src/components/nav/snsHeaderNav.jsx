import React from "react"
import {
    Paper,
    BottomNavigation,
    Avatar,
    AvatarGroup,
} from "@mui/material"

const SnsHeaderNav = () => {
    return (
        <Paper sx={containerStyle}>
            <BottomNavigation>
                <AvatarGroup total={1}>
                    <Avatar src={`${process.env.PUBLIC_URL}/images/instargramAvatar.jpg`} />
                </AvatarGroup>
            </BottomNavigation>
        </Paper>
    )
}

const containerStyle = {
    width: "100%",
    position: "fixed",
    top: 80,
}

export default SnsHeaderNav