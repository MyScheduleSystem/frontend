import React, { useCallback } from "react"
import { useNavigate } from "react-router-dom"
import SnsCard from "../components/sns/snsCard"
import SnsBottomNav from "../components/nav/snsBottomNav"
import { createSnsFriendList } from "../dev/testData"
import {
    Container,
    Box,
} from "@mui/material"

const testSnsInfo = createSnsFriendList().$_friendListArray

const SnsMainPage = () => {
    const navigate = useNavigate()

    const onClickAvatarInfoEventHandler = useCallback((id) => {
        navigate(`/sns/${id}`)
    }, [])

    return (
        <Container sx={snsContainerStyle}>
            <Box sx={boxStyle}>
                {testSnsInfo.map((friend) => {
                    return <SnsCard key={friend.uuid} info={friend} onClickAvatarInfoEvent={onClickAvatarInfoEventHandler} />
                })}
            </Box>
            <SnsBottomNav />
        </Container>
    )
}

const snsContainerStyle = {
    width: "100%",
    height: "100%",
}

const boxStyle = {
    mt: 10,
}

export default SnsMainPage