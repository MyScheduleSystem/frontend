import React from "react"
import SnsHeadNav from "../components/sns/snsHeadNav"
import SnsCard from "../components/sns/snsCard"
import SnsBottomNav from "../components/sns/snsBottomNav"
import { Box, Container } from "@mui/system"

const SnsMainPage = () => {
    return (
        <Container sx={snsBoxStyle}>
            <Box>
                <SnsHeadNav />
            </Box>
            <Box>
                <SnsCard />
            </Box>
            <SnsBottomNav />
        </Container>
    )
}

const snsBoxStyle = {
    mt: 10,
}

export default SnsMainPage