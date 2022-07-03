import React, { useState, useCallback } from "react"
import SnsHeadNav from "../components/sns/snsHeadNav"
import SnsCard from "../components/sns/snsCard"
import { useNavigate } from "react-router-dom"
import SnsBottomNav from "../components/sns/snsBottomNav"
import { Grid } from "@mui/material"

const SnsMainPage = () => {
    const [enterInfo, setEnterInfo] = useState(false)
    const navigate = useNavigate()

    const onClickAvatarInfoEventHandler = useCallback((isClick) => {
        setEnterInfo(isClick)
        navigate("/sns/id", {replace: true})
    }, [])

    return (
        <Grid container md={9} sx={snsContainerStyle} >
            <Grid item xs={11.7}>
                <SnsHeadNav />
            </Grid>
            <Grid container spacing={{ xs: 2 }} columns={{ md: 12 }}>
                {Array.from(Array(6)).map((_, i) => {
                    return(
                        <Grid item md={4} key={i}>
                            <SnsCard 
                                onClickAvatarInfo={onClickAvatarInfoEventHandler}
                            />
                        </Grid>
                    )
                })}
            </Grid>
            <SnsBottomNav />
        </Grid>
    )
}

const snsContainerStyle = {
    widht:"100%",
    height: "100%",
    ml: 8,
    mt: 12,
}

export default SnsMainPage