import { useState, useEffect } from 'react'
import {
    Paper,
    MenuList,
    MenuItem,
    Typography,
    Card,
    CardMedia,
    CardContent,
    CardActions,
    Button,
} from '@mui/material'
import MyIcon from '../../icon/MyIcon'
import weatherFetcher from '../../fetcher/weatherFetcher'

const Weather = () => {
    const [weather, setWeather] = useState({})
    const [weatherImg, setWeatherImg] = useState()

    useEffect(() => {
        doWeatherFetch.call(this, weather, setWeather)
        setWeatherImage.call(this, weather.weatherInfo, setWeatherImg)
    }, [weather, weatherImg])

    // 날씨 정보 API 확인해서 전부 추가할 것
    return (
        <Paper sx={menuStyle}>
            <Typography variant="h6" align='center'><MyIcon name='radio' /> MSS</Typography>
            <MenuList variant='menu'>
                <MenuItem>
                    <Typography variant="inherit">DashBoard</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">Account</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">Direct Message</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">MSS Timeline</Typography>
                </MenuItem>
            </MenuList>
            <Card>
                <CardMedia
                    component="img"
                    height="220"
                    image={weatherImg}
                    alt="weather image"
                />
                <CardContent>
                    <Typography
                        gutterBottom={true}
                        variant="h5"
                        component="div"
                    >
                        Weather
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                    >
                        Today's: Cloudy. But I wish your happy day.
                        Good luck.
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">Share</Button>
                    <Button size="small">Learn More</Button>
                </CardActions>
            </Card>
        </Paper>
    )
}

function doWeatherFetch(weather, setWeather) {
    const fetchResult = {}
    weatherFetcher.getWeatherInformation()
        .then((response) => {
            const result = response.data.current.weather[0]
            fetchResult.description = result.description
            fetchResult.weatherInfo = result.main
            setWeather(() => Object.assign(weather, fetchResult))
        })
}

function setWeatherImage(weather, setWeatherImg) {
    // TODO: 없는 날씨의 경우 이미지가 나오지 않으며 debugger 걸림
    // 날씨 이미지 총 9개. 공식문서 들어가서 5개만 더 추가하면 됨
    const forTest = "Clear"
    const url = weatherFetcher.getWeatherImage(forTest)
    setWeatherImg(url)
}

const menuStyle = {
    width: '20%',
    height: '100%',
    positin: 'fixed',
    float: 'right',
}

export default Weather