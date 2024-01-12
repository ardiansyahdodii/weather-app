import axios from "axios"

export const currentWeather = async (query) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${query}&appid=1a3d4419fbb551222e9c231751cfca73`)
    
    return response.data

}

export const forecastWeather = async (query) => {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=1a3d4419fbb551222e9c231751cfca73`)
    
    return response.data
}