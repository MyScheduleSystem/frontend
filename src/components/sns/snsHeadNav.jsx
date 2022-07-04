import React from "react"
import { 
    Box, Avatar, AvatarGroup,
} from "@mui/material"

const SnsHeadNav = ({ testSnsInfo }) => {
    return (
        <Box>
            <AvatarGroup total={24}>
                {Array.from(Array(5)).map((_, i) => {
                    return(
                        <Avatar src={`${process.env.PUBLIC_URL}${testSnsInfo[0].friendImageUrl}`} key={i} />
                    )
                })}
            </AvatarGroup>
        </Box>
    )
}

export default SnsHeadNav