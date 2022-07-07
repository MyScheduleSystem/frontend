import MyIcon from "../../icon/myIcon"
import {
    Container,
    Card,
    CardHeader,
    CardMedia,
    CardContent,
    CardActions,
    Avatar,
    Typography,
    Button,
} from "@mui/material"

const SnsCard = ({ onClickAvatarInfoEvent, info }) => {
    const onClickAvatarInfoEventHandler = () => {
        onClickAvatarInfoEvent(info.uuid)
    }
    return (
        <Container sx={cardContainer}>
            <Card sx={snsCardStyle}>
                {/* ID 이니셜 첫 글자 */}
                <CardHeader
                    avatar={
                        info.friendImageUrl ?
                        <Avatar
                            sx={avatarStyle}
                            onClick={onClickAvatarInfoEventHandler}
                            src={`${process.env.PUBLIC_URL}${info.friendImageUrl}`}
                        /> :
                        <Avatar>
                            {info.nickname.charAt(0)}
                        </Avatar>
                    }
                    action={<MyIcon name="option" />}
                    title="Fly to the moon"
                    subheader="May 20, 2022"
                />
                <CardMedia
                    component="img"
                    height="194"
                    image={`${process.env.PUBLIC_URL}/images/schedule.jpg`}
                    alt="Sns card"
                />
                <CardContent sx={cardContentTextStyle}>
                    <Typography variant="body2" color="text.secondary">
                        This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                        if you like.This impressive paella is a perfect party dish and a fun meal to cook
                        together with your guests. Add 1 cup of frozen peas along with the mussels,
                    </Typography>
                </CardContent>
                <CardActions sx={buttonBoxStyle} disableSpacing={true}>
                    <Button><MyIcon name="heart" /></Button>
                    <Button><MyIcon name="share" /></Button>
                    <Button><MyIcon name="comment" /></Button>
                    <Button><MyIcon name="expand" /></Button>
                </CardActions>
                {/* TODO: Comment 추가 */}
            </Card>
        </Container>
    )
}

const cardContainer = {
    textAlign: "center",
}

const snsCardStyle = {
    width: "80%",
    height: "70%",
}

const cardContentTextStyle = {
    overflow: "auto",
}

const avatarStyle = {
    bgcolor: "red",
}

const buttonBoxStyle = {
    display: "grid",
    placeItems: "center",
    gridTemplateColumns: "repeat(4, 1fr)",
    gridColumnGap: "25px",
}

export default SnsCard