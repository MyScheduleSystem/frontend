import { useState } from 'react'
import MyIcon from '../../icon/MyIcon'
import CardModalItem from './cardModalItem';
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

const CardModal = ({ isCardModalShow, cardModalClose, onAddTodoItemList }) => {
    const [isShowTextField, setIsShowTextField] = useState(false)
    const [todoItemList] = useState([])
    
    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onPlusButtonClickHandler = () => {
        setIsShowTextField(true)
    }

    const onTitleChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        // 이거 어디에 저장하지?
    }

    const onContentChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        // TODO: DatePicker 추가하기
        const contentObj = {}
        contentObj.content = e.target.value
        todoItemList.push(contentObj)
        setIsShowTextField(false)
        e.target.value = ''
    }

    const onSaveButtonHandler = () => {
        onAddTodoItemList(todoItemList)
        cardModalClose(false)
        todoItemList.splice(0, todoItemList.length)
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
                            <TextField 
                                label="Enter todo title" 
                                variant="outlined"
                                sx={headerStyle} 
                                onKeyDown={onTitleChangeHandler}
                            />
                        }
                    />
                    <CardContent>
                        {todoItemList.map((item, i) => {
                            return (
                                // TODO Item 전달하고 어떻게 디자인 할지
                                <CardModalItem key={i} content={item.content} />
                            )
                        })}
                        {isShowTextField &&
                            <TextField 
                                label="Enter todo contents" 
                                variant="outlined"
                                autoFocus={true}
                                sx={contentStyle} 
                                onKeyDown={onContentChangeHandler}
                            />
                        }
                    </CardContent>
                    <Button onClick={onPlusButtonClickHandler}>
                        <MyIcon name='plus' />
                    </Button>
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