import MyChatRoomInput from "./myChatRoomInput"
import MyChatRoomUserList from "./myChatRoomUserList"
import MyChatRoomMessage from "./myChatRoomMessage"
import {
    Container,
    Grid,
    Paper,
    Divider,
} from "@mui/material"

const MyChatRoom = () => {
    return (
        <Container sx={containerStyle}>
            <Grid container={true}>
                <Grid
                    container={true}
                    component={Paper}
                >
                    <MyChatRoomUserList />
                    <Grid item={true} xs={9}>
                        <MyChatRoomMessage />
                        <Divider />
                        <MyChatRoomInput />
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

const containerStyle = {
    marginTop: "4rem",
    textAlign: "center",
    display: "flex",
}

export default MyChatRoom