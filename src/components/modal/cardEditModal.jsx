import { useState } from 'react'
import MyIcon from '../../icon/MyIcon'
import CardEditModalItem from './cardEditModalItem';
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
    const [todoEditTitle, setTodoEditTitle] = useState('')
    const [todoEditContent, setTodoEditContent] = useState('')

    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onEditTitleChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        const editTitle = e.target.value
        setTodoEditTitle(editTitle)
    }

    const onEditContentChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        // TODO: DatePicker 추가하기
        const editContent = e.target.value
        setTodoEditContent(editContent)
    }

    const onSaveButtonHandler = () => {
        const prev = Lodash.cloneDeep(editTodoItem)
        editTodoItem.title = todoEditTitle
        editTodoItem.content = todoEditContent
        onEditTodoItem(prev, editTodoItem)
        cardModalClose(false)
    }

    return (
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
                            !todoEditTitle ?
                            <TextField
                                label="Enter todo contents" 
                                variant="outlined"
                                sx={contentStyle} 
                                defaultValue={editTodoItem.title}
                                onKeyDown={onEditTitleChangeHandler}
                            /> :
                            <CardEditModalItem content={todoEditTitle}/>
                        }
                    />
                    <CardContent>
                        <CardEditModalItem content={todoEditContent} />
                        {!todoEditContent && <TextField 
                            label="Enter todo contents" 
                            variant="outlined"
                            sx={contentStyle} 
                            defaultValue={editTodoItem.content}
                            onKeyDown={onEditContentChangeHandler}
                        />}
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

const contentStyle = {
    width: '100%',
}

const buttonStyle = {
    fontSize: '30px',
}

export default CardEditModal