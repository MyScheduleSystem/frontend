import { useRef, useState, useCallback } from 'react'
import MyIcon from '../../icon/MyIcon'
import AlertPopup from '../popup/alertPopup';
import {
    Dialog,
    DialogContent,
    Card,
    CardHeader,
    CardContent,
    Avatar,
    TextField,
    Button,
} from "@mui/material";
import Lodash from 'lodash'

const CardEditModal = ({ editTodoItem, isCardModalShow, onEditTodoItem, cardModalClose }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [isValidTitle, setIsValidTitle] = useState(false)
    const titleRef = useRef()
    const contentRef = useRef()

    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onSaveButtonHandler = () => {
        const prev = Lodash.cloneDeep(editTodoItem)
        if(!titleRef.current.value || !contentRef.current.value) {
            setIsOpen(true)
            return
        }
        editTodoItem.title = titleRef.current.value
        editTodoItem.content = contentRef.current.value
        onEditTodoItem(prev, editTodoItem)
        cardModalClose(false)
    }

    const onIsOpenEvent = (isChecked) => {
        setIsOpen(isChecked)
    }

    const onTitleChangeHandler = useCallback((e) => {
        if(validateForTitle(e.target.value)) {
            titleRef.current.labels[0].innerText = "Please check your title!"
            setIsValidTitle(true)
            return
        }
        titleRef.current.labels[0].innerText = "Enter todo title!"
        setIsValidTitle(false)
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
                <DialogContent
                    sx={dialogContentStyle}
                >
                    <Card sx={cardStyle}>
                        <CardHeader
                            avatar={<Avatar sx={avtarStyle}>T</Avatar>}
                            title={
                                <TextField
                                    error={isValidTitle}
                                    inputRef={titleRef}
                                    label="Enter todo title"
                                    variant="outlined"
                                    sx={titleStyle}
                                    defaultValue={editTodoItem.title}
                                    onChange={onTitleChangeHandler}
                                />
                            }
                        />
                        <CardContent>
                            <TextField
                                inputRef={contentRef}
                                label="Enter todo contents"
                                variant="outlined"
                                multiline
                                rows={8}
                                sx={contentStyle}
                                defaultValue={editTodoItem.content}
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
    }
}

const dialogContentStyle = {
    // TODO Height & Scroll
}

const cardStyle = {
    textAlign: 'center',
}

const avtarStyle = {
    bgColor: 'blue[500]'
}

const titleStyle = {
    width: '100%',
}

const contentStyle = {
    width: '100%',
}

const buttonStyle = {
    fontSize: '30px',
}

export default CardEditModal