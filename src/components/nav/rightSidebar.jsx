import { useState, useEffect } from "react"
import {
    Box,
    Paper,
    MenuList,
    MenuItem,
    Typography,
    Card,
    CardContent,
    CardActions,
    Button,
} from "@mui/material"
import MyIcon from "../../icon/myIcon"
import weatherFetcher from "../../fetcher/weatherFetcher"

const RightSideBar = () => {
    const [weather, setWeather] = useState({})

    useEffect(() => {
        doWeatherFetch.call(this, weather, setWeather)
    }, [weather])

    // 날씨 정보 API 확인해서 전부 추가할 것
    return (
        <Box sx={boxSizeStyle}>
            <Paper sx={menuStyle}>
                <Typography variant="h6" align="center"><MyIcon name="radio" /> MSS</Typography>
                <MenuList variant="menu">
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
                    <CardContent sx={iconStyle}>
                        {weatherFetcher.getWeatherIcon(weather.weatherInfo)}
                    </CardContent>
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
                            I wish your happy day.
                            Good luck. For more information. Contact: FoxMon"s team.
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

export default RightSideBar