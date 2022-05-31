import { useRef, useState, useCallback } from 'react'
import MyIcon from '../../icon/MyIcon'
import AlertPopup from '../popup/alertPopup'
import {
    Dialog,
    DialogContent,
    Card,
    CardHeader,
    CardContent,
    Avatar,
    TextField,
    Button,
} from "@mui/material"

const CardModal = ({ isCardModalShow, cardModalClose, onAddTodoItem }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isValidTitle, setIsValidTtile] = useState(false)
    const titleRef = useRef()
    const contentRef = useRef()

    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onSaveButtonHandler = (e) => {
        e.preventDefault()
        const itemObj = {}
        if(!titleRef.current.value || !contentRef.current.value) {
            setIsOpen(true)
            return
        }
        itemObj.title = titleRef.current.value
        itemObj.content = contentRef.current.value
        onAddTodoItem(itemObj)
        titleRef.current.value = ''
        contentRef.current.value = ''
        cardModalClose(false)
    }

    const onIsOpenEvent = (isChecked) => {
        setIsOpen(isChecked)
    }

    const onTitleChangeHandler = useCallback((e) => {
        if(validateForTitle(e.target.value)) {
            titleRef.current.labels[0].innerText = "Please check your title!"
            setIsValidTtile(true)
            return
        }
        titleRef.current.labels[0].innerText = "Enter todo title!"
        setIsValidTtile(false)
    }, [])

    const validateForTitle = (titleStr) => {
        const isValid = (function() {
            const title = titleStr.trim()
            if(title.length < 4 || title.length === 0) return true
            const special = ['#', '$', '|', '`']
            if(!special.every((e) => !title.includes(e))) return  true
            return false
        })()
        return isValid
    }

    return (
        <>
            <AlertPopup
                isShowPopup={isOpen}
                setIsShowPopup={onIsOpenEvent}
                message="Please check your input agin!!"
            />
            <Dialog
                sx={dialogStyle}
                open={isCardModalShow}
                onClose={onCloseCardModal}
            >
                <DialogContent>
                    <Card sx={cardStyle}>
                        <CardHeader
                            avatar={<Avatar sx={avtarStyle}>T</Avatar>}
                            title={
                                <TextField
                                    error={isValidTitle}
                                    label="Enter todo title"
                                    inputRef={titleRef}
                                    variant="outlined"
                                    sx={headerStyle}
                                    onChange={onTitleChangeHandler}
                                />
                            }
                        />
                        <CardContent>
                            <TextField
                                label="Enter todo contents"
                                variant="outlined"
                                inputRef={contentRef}
                                multiline
                                rows={8}
                                autoFocus={true}
                                sx={contentStyle}
                            />
                        </CardContent>
                    </Card>
                </DialogContent>
                <Button
                    sx={buttonStyle}
                    onClick={onSaveButtonHandler}
                >
                    <MyIcon name='checkCircle' />
                </Button>
        </Dialog>
        </>
    )
}

const dialogStyle = {
    '& .MuiDialog-paper': {
        width: '80%',
        height: '80%',
    },
}

const cardStyle = {
    textAlign: 'center',
}

const avtarStyle = {
    bgColor: 'blue[500]'
}

const headerStyle = {
    width: '100%',
}

const contentStyle = {
    width: '100%',
}

const buttonStyle = {
    fontSize: '30px',
}

export default CardModal