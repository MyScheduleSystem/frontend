import { useState, useRef } from "react"
import MyIcon from "../../icon/myIcon"
import {
    Modal, Box, List,
    ListItem, ListItemAvatar, Avatar,
    ListItemText, Divider, Button,
    Input,
} from "@mui/material"

const MyInfoPopup = ({ isClickInfo, onCloseEvent, user, onClickImageUploaderEvent }) => {
    const [imageUpload, setImageUpload] = useState("")
    const imageInput  = useRef()

    const onCloseEventHandler = () => onCloseEvent(false)

    const onChangeImageUploaderEventHandler = (e) => {
        setImageUpload(e.target.files[0])
    }

    const onClickImageUploaderEventHandler = () => {
        onClickImageUploaderEvent(imageUpload, "profile")
    }

    const onClickImageUploaderButtonEventHandler = () => {
        imageInput.current.click()
    }

    return (
        <Modal
            open={isClickInfo}
            sx={modalStyle}
            onClose={onCloseEventHandler}
        >
            <Box sx={boxStyle}>
                <List sx={listStyle}>
                    <ListItem sx={ListItemAvatarStyle}>
                        <ListItemAvatar>
                            <Avatar 
                                alt="profile" 
                                sx={avatarSizeStyle}
                                src="https://firebasestorage.googleapis.com/v0/b/myschedulesystem-57f41.appspot.com/o/ehGVHQQ1SZPzeCP2BqEs3j4Ni952%2Fprofile%2F11.PNG?alt=media&token=6361c0f6-2cc3-4f07-801c-058c88b3c465"
                            />
                        </ListItemAvatar>
                    </ListItem>
                    <ListItemText
                        primary={user.friendNickname}
                        secondary="프로필명 아직 없음"
                    />
                </List>
                <Box>
                    <Divider />
                    <Button>
                        <MyIcon name="chat" />
                    </Button>
                    <Input
                        type="file"
                        inputRef={imageInput}
                        sx={uploadImageInputStyle}
                        onChange={onChangeImageUploaderEventHandler}
                    />
                    <Button onClick={onClickImageUploaderButtonEventHandler}>
                        <MyIcon name="upload" />
                    </Button>
                    <Button onClick={onClickImageUploaderEventHandler}>확인</Button>
                </Box>
            </Box>
        </Modal>
    )
}

const modalStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
}

const boxStyle = {
    width: "20%",
    height: "80%",
    backgroundColor: "#E9ECEF",
    borderRadius: "10px",
    overflow: "auto",

}

const listStyle = {
    width: "100%",
    maxWidth: "360",
    bgColor: "background.paper"
}

const ListItemAvatarStyle = {
    justifyContent: "center",
    marginTop: "19rem",
}

const avatarSizeStyle = {
    width: "85px",
    height: "85px",
}

const uploadImageInputStyle = {
    display: "none",
}

export default MyInfoPopup