import MyIcon from '../../icon/MyIcon'
import {
    Box,
    Dialog,
    DialogTitle,
    DialogActions,
    Button,
} from '@mui/material'

function CheckPopup({ isShowPopup, setIsShowPopup }) {
    const onCloseButtonClickHandler = (isChecked) => () => {
        setIsShowPopup(false)
    }

    return (
        <Box>
            <Dialog open={isShowPopup}>
                <DialogTitle>
                    <MyIcon name='excalmationCircle' /> Warning
                </DialogTitle>
                <DialogActions>
                    <Button onClick={onCloseButtonClickHandler(true)}>
                        Yes
                    </Button>
                    <Button
                        autoFocus={true}
                        onClick={onCloseButtonClickHandler(false)}
                    >
                        No
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default CheckPopup