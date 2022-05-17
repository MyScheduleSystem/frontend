import { useState } from 'react'
import {
    Box,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogContentText,
    DialogActions,
    Button,
} from '@mui/material'

const AlertPopup = ({ message }) => {
    const [open, setOpen] = useState(true)

    const onCloseButtonClickHandler = () => {
        setOpen(false)
    }

    return (
        <Box>
            <Dialog open={open}>
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