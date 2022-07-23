import React, { useState, useEffect } from "react"
import MyChatRoomInput from "./myChatRoomInput"
import MyChatRoomUserList from "./myChatRoomUserList"
import MyChatRoomMessage from "./myChatRoomMessage"
import User from "../../type/user"
import userFetcher from "../../fetcher/userFetcher"
import { useLocation } from "react-router"
import { Container, Grid, Paper, Divider } from "@mui/material"

const MyChatRoom = () => {
    const [myInfo, setMyInfo] = useState({})
    const [friendInfo, setFriendInfo] = useState([])

    const { state } = useLocation()

    useEffect(() => {
        doFetchMyInformation.call(this, state.uuid, setMyInfo)
        doFetchFriendInformation.call(
            this,
            state.friends,
            state.uuid,
            setFriendInfo
        )
    }, [])

    return (
        <React.Fragment>
            <Container sx={containerStyle}>
                <Grid container={true}>
                    <Grid container={true} component={Paper}>
                        <MyChatRoomUserList
                            chatRoomName={state.chatRoomName}
                            myInfo={myInfo}
                            friendInfo={friendInfo}
                        />
                        <Grid item={true} xs={9}>
                            <MyChatRoomMessage />
                            <Divider />
                            <MyChatRoomInput />
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </React.Fragment>
    )
}

const containerStyle = {
    width: "75%",
    height: "100%",
    marginTop: "8rem",
    ml: "5rem",
    textAlign: "center",
    display: "flex",
}

export default MyChatRoom

function doFetchMyInformation(uuid, setMyInfo) {
    userFetcher.getMyInformationByUuid(uuid).then((result) => {
        result.forEach((d) => {
            const data = d.data()
            const obj = {}
            obj.uuid = data.uuid
            obj.name = data.name
            obj.username = data.username
            obj.email = data.email
            obj.profileUrl = data.profileUrl
            obj.infoMessage = data.infoMessage
            const uObj = new User(obj.uuid, obj.username, obj.email, obj.name)
            uObj.info.setProfileUrl(obj.profileUrl)
            uObj.info.setInfoMessage(obj.infoMessage)
            setMyInfo(uObj)
        })
    })
}

function doFetchFriendInformation(friends, uuid, setFriendInfo) {
    friends.forEach((u) => {
        if (u !== uuid) {
            userFetcher.getMyInformationByUuid(u).then((result) => {
                result.forEach((d) => {
                    setFriendInfo((prev) => [...prev, d.data()])
                })
            })
        }
    })
}
