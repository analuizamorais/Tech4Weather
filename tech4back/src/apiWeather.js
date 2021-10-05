const axios = require('axios');

export const apiWeather = async (city) => {

    const URL = `https://api.openweathermap.org/data/2.5/weather`
    const API_KEY = process.env.REACT_APP_API_KEY
    const response = await axios.get(URL, {
        params: {
        q: city,
        units: 'metric',
        APPID: API_KEY,
        }
    })
    return response
}