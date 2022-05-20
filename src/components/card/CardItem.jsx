import { useRef } from 'react'
import { 
    Box, 
    Typography,
    Button,
} from "@mui/material";
import MyIcon from '../../icon/MyIcon';

const CardItem = ({ index, cardItem, onEditModeEnter, onRemoveCard }) => {
    const boxRef = useRef()

    const onClickHandler = (isClicked) => () => {
        const item = []
        const children = boxRef.current.childNodes
        children.forEach((e) => {
            item.push(e.innerText)
        })
        onEditModeEnter(isClicked, item)
    }
    
    const onRemoveCardHandler = (e) => {
        e.stopPropagation() 
        onRemoveCard(index)
    }

    return (
        <Box 
            ref={boxRef}
            sx={cardStyle} 
            onClick={onClickHandler(true)}
        >
            <Typography
                sx={titleStyle} 
                variant="h4">
                {cardItem.title}
            </Typography>
            <Typography
                sx={contentStyle}
                variant="h6">
                {cardItem.content}
            </Typography>
            <Button
                sx={removeBtnStyle} 
                onClick={onRemoveCardHandler}>
                <MyIcon name="delete" />
            </Button>
        </Box>
    )
}

export default CardItem

const cardStyle = {
    alignItems: 'center',
    textAlign: 'center',
    width: '300px',
    height: '300px',
    border: 'solid',
    borderRadius: '10px',
}

const titleStyle = {
    height: '20%',
}

const contentStyle = {
    height: '70%',
}

const removeBtnStyle = {
    height: '10%',
    
}