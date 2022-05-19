import { useState } from 'react'
import MyIcon from '../../icon/MyIcon'
import CardModalItem from './cardModalItem'
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

const CardModal = ({ isCardModalShow, cardModalClose, onAddTodoItem }) => {
    const [todoItemTitle, setTodoItemTitle] = useState('')
    const [todoItemContent, setTodoItemContent] = useState('')
    
    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onTitleChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        const title = e.target.value
        setTodoItemTitle(title)
    }

    const onContentChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        // TODO: DatePicker 추가하기
        const content = e.target.value
        setTodoItemContent(content)
    }

    const onSaveButtonHandler = () => {
        const itemObj = {}
        itemObj.title = todoItemTitle
        itemObj.content = todoItemContent
        onAddTodoItem(itemObj)
        cardModalClose(false)
        setTodoItemContent('')
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
                            !todoItemTitle ? 
                                <TextField 
                                    label="Enter todo title" 
                                    variant="outlined"
                                    sx={headerStyle} 
                                    onKeyDown={onTitleChangeHandler}
                                /> :
                                <CardModalItem content={todoItemTitle} />
                        }
                    />
                    <CardContent>
                        <CardModalItem content={todoItemContent} />
                        {!todoItemContent && <TextField 
                            label="Enter todo contents" 
                            variant="outlined"
                            autoFocus={true}
                            sx={contentStyle} 
                            onKeyDown={onContentChangeHandler}
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