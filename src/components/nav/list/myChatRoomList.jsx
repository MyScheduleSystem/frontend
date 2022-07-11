import React from "react"
import {
    IconButton,
    ListItem,
    ListItemButton,
    Typography,
} from "@mui/material"
import MyIcon from "../../../icon/myIcon"

function MyChatRoomList({ chatRoom, isOpenEditCharRoom }) {
    return (
        chatRoom.map((c) => {
            return (
                <React.Fragment>
                    {!isOpenEditCharRoom ?
                        <ListItemButton
                            key={c.uuid}
                            divider={true}
                        >
                            <Typography>{c.name}</Typography>
                        </ListItemButton>
                        :
                        <ListItem
                            sx={myChatRoomEditStyle}
                            secondaryAction={
                                <IconButton edge="end">
                                    <MyIcon name="delete" />
                                </IconButton>
                            }
                        >
                            <Typography>{c.name}</Typography>
                        </ListItem>
                    }
                </React.Fragment>
            )
        })
    )
}

const myChatRoomEditStyle = {
    // display: "flex",
}

export default MyChatRoomList