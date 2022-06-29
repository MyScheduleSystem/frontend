import React, {} from "react"
import SnsHeadNav from "../components/sns/snsHeadNav"
import SnsList from "../components/sns/snsList"
import { Box } from "@mui/material"

const SnsMainPage = () => {
    return (
        <Box sx={snsBoxStyle}>
            <Box sx={snsHeadBoxStyle}>
                <SnsHeadNav />
            </Box>
            <Box sx={snsListBoxStyle}>
                <SnsList />
            </Box>
        </Box>
    )
}

const snsBoxStyle = {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    height: "100%",
}

const snsHeadBoxStyle = {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "6rem",
}

const snsListBoxStyle = {
    display: "flex",
    justifyContent: "center",
    marginTop: "3rem",
}

export default SnsMainPage