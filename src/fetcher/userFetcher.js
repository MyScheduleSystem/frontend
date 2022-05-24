import axios from 'axios'
import ErrorUtil from '../util/errorUtil'

const baseUrl = process.env.REACT_APP_BASE_URL
const userFetcher = {}

userFetcher.signin = async function(user) {
    ErrorUtil.invalidParameter(user)
    const { username, password } = user
    const { data } = await axios.post(`${baseUrl}/user/login`, { username, password })
    if(!data) return
    return data
}

userFetcher.signup = async(user) => {
    ErrorUtil.invalidParameter(user)
    const { username, password, name, email } = user
    const { data } = await axios.post(`${baseUrl}/user/signup`, { username, password, name, email })
    if(!data) return
    return data
}

// TODO: signup

Object.freeze(userFetcher)
export default userFetcher