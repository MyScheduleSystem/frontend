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

const MyInfoPopup = ({ isClickInfo, onClose, user }) => {
    const onCloseHandler = () => onClose(false)

    return (
        <Modal 
            open={isClickInfo} 
            sx={modalStyle}
            onClose={onCloseHandler}
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
    backgroundImage: "linear-gradient(to right, #4880EC, #019CAD)",
    // background: 'url(/images/schedule.jpg)',
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

export default MyInfoPopup