import React, {} from "react"
import {
    Box,
    Container,
} from "@mui/material"
import SnsMyInfoHeadNav from "../components/sns/snsMyInfoHeadNav"
import SnsMyInfoList from "../components/nav/list/snsMyInfoList"

const SnsInfoPage = () => {
    return (
        <Container sx={snsBoxStyle}>
            <Box sx={snsHeadBoxStyle}>
                <SnsMyInfoHeadNav />
            </Box>
            <Box sx={snsListBoxStyle}>
                <SnsMyInfoList />
            </Box>
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

export default SnsInfoPage