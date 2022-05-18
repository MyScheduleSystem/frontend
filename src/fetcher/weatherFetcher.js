import axios from 'axios'
import ErrorUtil from '../util/errorUtil'

const latitude = 36.9078
const longtitude = 127.7669
const exclude = 'hourly,daily'
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
const key = process.env.REACT_APP_OPEN_WEATHER_KEY

const weatherFetcher = {}

// JSON Spec
// "current": {
//     "dt": 1586468027,
//     "sunrise": 1586487424,
//     "sunset": 1586538297,
//     "temp": 274.31,
//     "feels_like": 269.79,
//     "pressure": 1006,
//     "humidity": 72,
//     "dew_point": 270.21,
//     "clouds": 0,
//     "visibility": 10000,
//     "wind_speed": 3,
//     "wind_deg": 260,
//     "weather": [
//       {
//         "id": 800,
//         "main": "Clear",
//         "description": "clear sky",
//         "icon": "01n"
//       }
//     ]
// },

weatherFetcher.getWeatherInformation = async function() {
    const result = await axios.post(`${baseUrl}?lat=${latitude}&lon=${longtitude}&exclude=${exclude}&appid=${key}`)
    ErrorUtil.invalidParameter(result)
    return result
}

Object.freeze(weatherFetcher)
export default weatherFetcher