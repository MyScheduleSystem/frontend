import {
    Grid,
    List,
    ListItem,
    ListItemText,
} from '@mui/material'

const MyChatRoomMessage = () => {
    return (
        <List>
            <ListItem>
                <Grid container={true}>
                    <Grid 
                        item={true} 
                        xs={12}
                    >
                        <ListItemText 
                            align="right" 
                            primary="Hello FoxMon2!"
                        />
                    </Grid>
                    <Grid 
                        item={true}
                        xs={12}
                    >
                        <ListItemText 
                            align="right"
                            secondary="21:30"
                        />
                    </Grid>
                </Grid>
            </ListItem>
            <ListItem>
                <Grid container={true}>
                    <Grid 
                        item={true} 
                        xs={12}
                    >
                        <ListItemText 
                            align="left" 
                            primary="Hello FoxMon!"
                        />
                    </Grid>
                    <Grid 
                        item={true}
                        xs={12}
                    >
                        <ListItemText 
                            align="left"
                            secondary="21:31"
                        />
                    </Grid>
                </Grid>
            </ListItem>
        </List>
    )
}

export default MyChatRoomMessage