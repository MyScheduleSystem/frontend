import {
    Grid,
    List,
    ListItem,
    ListItemText,
    TextField,
    Divider,
} from "@mui/material"

const MyChatRoomUserList = ({ chatRoomName, myInfo, friendInfo }) => {
    const onSearchKeyDownHandler = (e) => {
        if (e.key !== "Enter") return
        if (!e.target.value) return
    }

    return (
        <Grid item={true} xs={3}>
            <List>
                <ListItem button={true}>
                    <ListItemText primary={chatRoomName} />
                </ListItem>
            </List>
            <Divider />
            <Grid item={true} xs={12}>
                <TextField
                    variant="outlined"
                    label="Search"
                    fullWidth={true}
                    onKeyDown={onSearchKeyDownHandler}
                />
            </Grid>
            <Divider />
            <List>
                <ListItem button={true}>
                    <ListItemText primary={myInfo.name} />
                    <ListItemText secondary="Me" align="right" />
                </ListItem>
                {friendInfo.map((f) => {
                    return (
                        <ListItem key={f.uuid} button={true}>
                            <ListItemText primary={f.username} />
                        </ListItem>
                    )
                })}
            </List>
        </Grid>
    )
}

export default MyChatRoomUserList
