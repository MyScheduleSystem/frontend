import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import {
    Box,
    Paper,
    MenuList,
    MenuItem,
    Typography,
    Card,
    CardHeader,
    CardContent,
    CardActions,
    Button,
} from "@mui/material"
import MyIcon from "../../icon/myIcon"
import weatherFetcher from "../../fetcher/weatherFetcher"

const RightSideBar = () => {
    const [weather, setWeather] = useState({})
    const [temperature, setTemperature] = useState({})

    useEffect(() => {
        doWeatherFetch.call(this, setWeather, setTemperature)
    }, [])

    return (
        <Box sx={boxSizeStyle}>
            <Paper sx={menuStyle}>
                <Typography variant="h6" align="center">
                    <MyIcon name="radio" /> MSS
                </Typography>
                <MenuList variant="menu">
                    <MenuItem>
                        <Link to="/" style={linkStyle}>
                            DashBoard
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/chat" style={linkStyle}>
                            Direct Message
                        </Link>
                    </MenuItem>
                    <MenuItem>
                        <Link to="/sns" style={linkStyle}>
                            MSS Timeline
                        </Link>
                    </MenuItem>
                </MenuList>
                <Card>
                    <CardContent>
                        <CardHeader
                            title={"Today's weather"}
                            subheader={`Current Temperatue: ${temperature.c}°C Humidity: ${temperature.humidity}%`}
                            alt="Temperature and Humidity"
                        />
                        <CardContent sx={iconStyle}>
                            {weatherFetcher.getWeatherIcon(weather.weatherInfo)}
                        </CardContent>
                        <Typography
                            gutterBottom={true}
                            variant="h5"
                            component="div"
                        >
                            Weather
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            I wish your happy day. Good luck. For more
                            information. Contact: FoxMon"s team.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="small">Share</Button>
                        <Button size="small">Learn More</Button>
                    </CardActions>
                </Card>
            </Paper>
        </Box>
    )
}

function doWeatherFetch(setWeather, setTemperature) {
    const fetchResult = {}
    const temper = {}
    weatherFetcher.getWeatherInformation().then((response) => {
        const result = response.data.current.weather[0]
        const temp = response.data.current
        fetchResult.description = result.description
        fetchResult.weatherInfo = result.main
        temper.c = Math.floor(temp.temp) - 273
        temper.humidity = temp.humidity
        setWeather(fetchResult)
        setTemperature(temper)
    })
}

const boxSizeStyle = {
    width: "100%",
    height: "100%",
}

const menuStyle = {
    marginTop: "4.5rem",
    width: "20%",
    height: "100%",
    positin: "absolute",
    float: "right",
}

const iconStyle = {
    fontSize: "100px",
    textAlign: "center",
}

const linkStyle = {
    color: "#000",
    textDecoration: "none",
}

export default RightSideBar
