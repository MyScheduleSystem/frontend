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

const CardEditModal = ({ editTodoItem, isCardModalShow, cardModalClose }) => {
    const onCloseCardModal = () => {
        cardModalClose(false)
    }

    const onTitleChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
    }

    const onContentChangeHandler = (e) => {
        if(e.key !== "Enter") return
        if(!e.target.value) return
        // TODO: DatePicker 추가하기
    }

    const onSaveButtonHandler = () => {
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
                                label="Enter todo contents" 
                                variant="outlined"
                                autoFocus={true}
                                sx={contentStyle} 
                                defaultValue={editTodoItem.title}
                                onKeyDown={onTitleChangeHandler}
                            />
                        }
                    />
                    <CardContent>
                        <TextField 
                            label="Enter todo contents" 
                            variant="outlined"
                            autoFocus={true}
                            sx={contentStyle} 
                            defaultValue={editTodoItem.content}
                            onKeyDown={onContentChangeHandler}
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

const contentStyle = {
    width: '100%',
}

const buttonStyle = {
    fontSize: '30px',
}

export default CardEditModal