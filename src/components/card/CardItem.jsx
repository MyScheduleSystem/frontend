import { useRef } from 'react'
import { 
    Card, 
    Button,
    Typography,
    CardHeader,
    CardContent,
    Avatar,
    CardMedia,
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
        onRemoveCard(index, true)
    }

    return ( // 카드 UI변경
        <Card 
            ref={boxRef}
            sx={cardStyle} 
            onClick={onClickHandler(true)}
        >
            <CardHeader
                avatar={<Avatar />}
                sx={titleStyle}
                title={cardItem.title}
                alt='Modal Card'
                action={                       
                <Button
                    sx={buttonStyle}
                    onClick={onRemoveCardHandler}>
                    <MyIcon name="delete" />
                </Button>
                }>
            </CardHeader>
            <CardMedia
                component="img"
                height={100}
                image={`/images/schedule.jpg`}
            >

            </CardMedia>
            <CardContent>
                <Typography
                    sx={contentStyle}
                    variant="body2">
                    {cardItem.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default CardItem

const cardStyle = {
    alignItems: 'center',
    textAlign: 'center',
    marginTop: '20px',
    width: '300px',
    height: '280px',
    boxShadow: '0 10px 5px 5px rgba(0, 0, 0, 0.1)',
    border: '1px solid #eeeeee',
    borderRadius: '8px',
}

const titleStyle = {
    height: '10%',
    width: '70%',
}

const contentStyle = {
    height: '30%',
}

const buttonStyle = {
    minWidth: '10px',
    left: '52px',
}