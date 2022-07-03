import React from "react"
import MyIcon from "../../icon/myIcon"
import { 
    Modal, Box, CardMedia, 
    List, ListItem, ListItemAvatar, 
    Avatar, Button, ListItemText,
    Divider, Typography, TextField
} from "@mui/material"

const SnsModal = ({ itemData, isOpenModal, isCloseSnsModal, user }) => {
    const onCloseSnsModalEventHandler = () => isCloseSnsModal(false)
    console.log(user)
    return (
        <Modal 
            open={isOpenModal}
            onClose={onCloseSnsModalEventHandler}
            sx={snsModalStyle}
        >
            <Box sx={snsBoxStyle}>
                <Box>
                    {itemData.map((item, i) => {
                        <CardMedia 
                            key={i}
                            component="img"
                            image={`${item.img}?w=164&h=164&fit=crop&auto=format`}
                        />
                    })}
                </Box>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemAvatar>
                                <Avatar src={`${process.env.PUBLIC_URL}/images/instargramAvatar.jpg`} />
                            </ListItemAvatar>
                            <ListItemText primary="이주빈" />
                        </ListItem>
                        <Divider />
                        {user.map((item, i) => {
                            return (
                                <ListItem key={i}>
                                    <ListItemAvatar>
                                        <Avatar src={`${process.env.PUBLIC_URL}${item.friendImageUrl}`} />
                                    </ListItemAvatar>
                                    <ListItemText 
                                        primary={item.friendNickname}
                                        secondary={
                                            <Typography>
                                                이건 코멘트 입니다
                                            </Typography>
                                        }>
                                    </ListItemText>
                                </ListItem>
                            )
                        })}
                    </List>
                    <Divider />
                    <MyIcon name="heart" />
                    <MyIcon name="comment" />
                    <MyIcon name="send" />
                    <Divider />
                    <TextField id="standard-basic" label="Standard" variant="standard" /> 
                    <Button>게시</Button>
                </Box>
            </Box>
        </Modal>
    )
}

const snsModalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}

const snsBoxStyle = {
    width: "65%",
    height: "90%",
    backgroundColor: "#fff",
    borderRadius: "5px",
    opacity: "0.98",
    overflow: "auto",
}

// const snsImageStyle = {
//     float: "left",
// }

// const snsCommendStyle = {
//     float: "right",
// }
export default SnsModal