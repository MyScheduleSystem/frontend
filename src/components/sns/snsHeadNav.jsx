import React from "react"
import { 
    Box, Avatar, AvatarGroup,
} from "@mui/material"

const SnsHeadNav = () => {
    return (
        <Box>
            <AvatarGroup total={24}>
                <Avatar />
                <Avatar />
                <Avatar />
                <Avatar />
            </AvatarGroup>
        </Box>
    )
}

export default SnsHeadNav