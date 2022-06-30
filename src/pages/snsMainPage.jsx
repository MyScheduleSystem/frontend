import React, {} from "react"
import { 
    Box,
    Container,
} from "@mui/material"
import SnsBottomNav from "../components/sns/snsBottomNav"
import SnsHeadNav from "../components/sns/snsHeadNav"
import SnsList from "../components/sns/snsList"

const SnsMainPage = () => {
    return (
        <Container sx={snsBoxStyle}>
            <Box sx={snsHeadBoxStyle}>
                <SnsHeadNav />
            </Box>
            <Box sx={snsListBoxStyle}>
                <SnsList />
            </Box>
            <SnsBottomNav />
        </Container>
    )
}

const snsBoxStyle = {
    width: "100%",
    height: "100%",
}

const snsHeadBoxStyle = {
    display: "flex",
    flexDirection: "row",
    marginTop: "6rem",
}

const snsListBoxStyle = {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    mt: 5,
}

export default SnsMainPage