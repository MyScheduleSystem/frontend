import {
    Box,
    ListItemButton,
    Typography,
} from "@mui/material"

function MyFriendList({ friends, onClickFriendButtonClickEvent }) {
    const onClickFriendButtonClickEventHandler = (isChecked, index) => () => {
        onClickFriendButtonClickEvent(isChecked, index)
    }

    return (
        friends.map((f, index) => {
            return (
                <Box key={f.friendUuid}>
                    <ListItemButton
                        divider={true}
                        onClick={onClickFriendButtonClickEventHandler(true, index)}
                    >
                        <Typography>{f.friendNickname}</Typography>
                    </ListItemButton>
                </Box>
            )
        })
    )
}

export default MyFriendList