import { 
    Box, 
    Typography,
} from "@mui/material";

// TODO: Item 뿌리기

const CardItem = ({ cardItem }) => {
    return (
        <Box sx={cardStyle}>
            <Typography color="text.secondary">
                {cardItem.content}
            </Typography>
        </Box>
    )
}

export default CardItem

const cardStyle = {
    display: 'flex',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    width: '300px',
    height: '300px',
    border: 'solid',
    borderRadius: '10px',
}