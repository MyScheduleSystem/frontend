import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material'

const AlertPopup = ({ isShowPopup, setIsShowPopup, message }) => {
    const onCloseButtonClickHandler = () => {
        setIsShowPopup(false)
    }

    return (
        <Box>
            <Dialog open={isShowPopup}>
                <DialogTitle>
                    Please check your input agin.
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        { message }
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        autoFocus={true}
                        onClick={onCloseButtonClickHandler}
                    >
                        Cancel
                    </Button>
                </DialogActions>
            </Dialog>
        </Box>
    )
}

export default AlertPopup