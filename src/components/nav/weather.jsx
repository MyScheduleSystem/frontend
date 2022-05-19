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

    // Menu에 들어가야 하는건 뭘까?
    // Card로 날씨를 이쁘게 꾸미면 이쁘지 않을까?
    // 날씨 이미지를 구해야 할듯?
    return (
        <Paper sx={menuStyle}>
            <Typography variant="h6"><MyIcon name='radio' /> MSS Weather</Typography>
            <MenuList variant='menu'>
                <MenuItem>
                    <Typography variant="inherit">DashBoard</Typography>
                </MenuItem>
                <MenuItem>
                    <Typography variant="inherit">Account</Typography>
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
    const url = weatherFetcher.getWeatherImage(weather)
    setWeatherImg(url)
}

const menuStyle = {
    width: '20%',
    height: '100vh',
    positin: 'fixed',
    float: 'right',
}

export default Weather