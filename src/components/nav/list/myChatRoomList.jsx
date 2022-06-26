import {
    ListItemButton,
    Typography,
} from "@mui/material"

function MyChatRoomList({ chatRoom }) {
    return (
        chatRoom.map((c) => {
            return (
                <ListItemButton
                    key={c.uuid}
                    divider={true}
                >
                    <Typography>{c.name}</Typography>
                </ListItemButton>
            )
        })
    )
}

export default MyChatRoomList