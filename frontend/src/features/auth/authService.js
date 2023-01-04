import axios from 'axios'

const API_URL = "http://localhost:5000/api/v1/user/"

//Register User
const register = async(userData) => {
    const {data} = await axios.post(API_URL + 'register' , userData)

    if(data) {
        localStorage.setItem('user',JSON.stringify(data))
    }

    return data
}

const authService = {
    register,
}

export default authService