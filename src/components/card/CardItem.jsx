import { useRef } from 'react'
import { 
    Box, 
    Typography,
} from "@mui/material";

const CardItem = ({ cardItem, onEditModeEnter }) => {
    const boxRef = useRef()

    const onClickHandler = (isClicked) => () => {
        const item = []
        const children = boxRef.current.childNodes
        children.forEach((e) => {
            item.push(e.innerText)
        })
        onEditModeEnter(isClicked, item)
    }

    return (
        <Box 
            ref={boxRef}
            sx={cardStyle} 
            onClick={onClickHandler(true)}
        >
            <Typography variant="h4">
                {cardItem.title}
            </Typography>
            <Typography variant="h6">
                {cardItem.content}
            </Typography>
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