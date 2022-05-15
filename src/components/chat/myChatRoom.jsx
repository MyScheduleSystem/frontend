import MyChatRoomInput from './myChatRoomInput'
import MyChatRoomUserList from './myChatRoomUserList'
import MyChatRoomMessage from './myChatRoomMessage'
import {
    Grid,
    Typography,
    Paper,
    Divider,
} from '@mui/material'

const MyChatRoom = () => {
    return (
        <Grid container={true}>
            <Grid 
                item={true}
                xs={12}
            >
                <Typography variant="h4">ChatRoom Title</Typography>
            </Grid>
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
    )
}

export default MyChatRoom