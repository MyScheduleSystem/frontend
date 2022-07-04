import React, { useState, useCallback } from "react"
import { useNavigate } from "react-router-dom"
import SnsHeadNav from "../components/sns/snsHeadNav"
import SnsCard from "../components/sns/snsCard"
import SnsBottomNav from "../components/sns/snsBottomNav"
import { createSnsFriendList } from "../dev/testData"
import { Grid } from "@mui/material"

const SnsMainPage = () => {
    const [enterInfo, setEnterInfo] = useState(false)
    const testSnsInfo = createSnsFriendList().$_friendListArray
    const navigate = useNavigate()
    
    const onClickAvatarInfoEventHandler = useCallback((isClick, id) => {
        setEnterInfo(isClick)
        navigate(`/sns/${id}`)
    }, [])

    return (
        <Grid container={true} xs={5} sx={snsContainerStyle}>
            <Grid item={true} md={9}>
                <SnsHeadNav
                    testSnsInfo={testSnsInfo}
                />
            </Grid>
            <Grid container={true} spacing={{ xs: 2 }} columns={{ md: 5 }}>
                {Array.from(Array(6)).map((_, i) => {
                    return(
                        <Grid item={true} xs={4} key={i}>
                            <SnsCard 
                                onClickAvatarInfoEvent={onClickAvatarInfoEventHandler}
                                testSnsInfo={testSnsInfo}
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
    ml: 50,
    mt: 12,
}

export default SnsMainPage