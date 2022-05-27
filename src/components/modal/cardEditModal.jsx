import { useRef } from 'react'
import MyIcon from '../../icon/MyIcon'
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
    const titleRef = useRef()
    const contentRef = useRef()

    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onSaveButtonHandler = () => {
        const prev = Lodash.cloneDeep(editTodoItem)
        editTodoItem.title = titleRef.current.value
        editTodoItem.content = contentRef.current.value
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
                            <TextField
                                inputRef={titleRef}
                                label="Enter todo title" 
                                variant="outlined"
                                sx={titleStyle} 
                                defaultValue={editTodoItem.title}
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