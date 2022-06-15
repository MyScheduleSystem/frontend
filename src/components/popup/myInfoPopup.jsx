import {
    Modal,
    Box,
    List,
    ListItem,
    ListItemAvatar,
    Avatar,
    ListItemText,
    Divider,
} from '@mui/material'
import MyIcon from '../../icon/MyIcon'

const MyInfoPopup = ({ isClickInfo, onCloseEvent, user }) => {
    const onCloseEventHandler = () => onCloseEvent(false)

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
                            <Avatar alt='profile' sx={avatarSizeStyle}/>
                        </ListItemAvatar>
                    </ListItem>
                    <ListItemText
                        primary={user.friendNickname}
                        secondary='프로필명 아직 없음'
                    />
                </List>
                <Box>
                    <Divider />
                    <MyIcon name='chat' />
                </Box>
            </Box>
        </Modal>
    )
}

const modalStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
}

const boxStyle = {
    width: '20%',
    height: '80%',
    backgroundColor: '#E9ECEF',
    borderRadius: '10px',
    overflow: 'auto',

}

const listStyle = {
    width: '100%',
    maxWidth: '360',
    bgColor: 'background.paper'
}

const ListItemAvatarStyle = {
    justifyContent: 'center',
    marginTop: '19rem',
}

const avatarSizeStyle = {
    width: '85px',
    height: '85px',
}

const myIconStyle = {
    color: 'white',
    fontSize: 'fa-2x',
}

export default MyInfoPopup