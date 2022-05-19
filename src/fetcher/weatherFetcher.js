import axios from 'axios'
import ErrorUtil from '../util/errorUtil'

const latitude = 36.9078
const longtitude = 127.7669
const exclude = 'hourly,daily'
const baseUrl = 'https://api.openweathermap.org/data/2.5/onecall'
const key = process.env.REACT_APP_OPEN_WEATHER_KEY

const weatherFetcher = {}

// Weather Condition 참고: https://openweathermap.org/weather-conditions
// JSON Spec
// In the data spec
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

weatherFetcher.getWeatherImage = function(weather) {
    // image가 좀 어둡다. 따라서 public에 있는 이미지를 사용해도 괜찮을 것 같다.
    // const imgUrl = `http://openweathermap.org/img/w/${icon}.png`
    const imgUrl = getCondition(weather)
    return imgUrl
}

function getCondition(weatherInfo) {
    switch(weatherInfo) {
        case 'Clouds': return process.env.PUBLIC_URL + '/images/cloudy.png'
        case 'Rain': return process.env.PUBLIC_URL + '/images/rain.png'
        case 'Snow': return process.env.PUBLIC_URL + '/images/snowy.png'
        case 'Clear': return process.env.PUBLIC_URL + '/images/sunny.png'
        default: ErrorUtil.notImplemented()
    }
}

Object.freeze(weatherFetcher)
export default weatherFetcher