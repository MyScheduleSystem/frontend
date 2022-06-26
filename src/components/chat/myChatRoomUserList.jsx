import {
    Grid,
    List,
    ListItem,
    ListItemText,
    TextField,
    Divider,
} from "@mui/material"

const MyChatRoomUserList = () => {
    const onSearchKeyDownHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
    }

    return (
        <Grid
            item={true}
            xs={3}
        >
            <List>
                <ListItem button={true} >
                    {/* TODO: Add Icon */}
                    <ListItemText primary="FoxMon" />
                </ListItem>
            </List>
            <Divider />
            <Grid
                item={true}
                xs={12}
            >
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
                    {/* TODO: Add Icon */}
                    <ListItemText primary="FoxMon" />
                    <ListItemText secondary="Me" align="right"/>
                </ListItem>
                <ListItem button={true}>
                    {/* TODO: Add Icon */}
                    <ListItemText primary="FoxMon2" />
                </ListItem>
            </List>
        </Grid>
    )
}

export default MyChatRoomUserList