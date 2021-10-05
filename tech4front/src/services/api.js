import axios from 'axios'

const URL = `https://api.openweathermap.org/data/2.5/weather`
const API_KEY = process.env.REACT_APP_API_KEY

export const apiWeather = async (city) => {
  if(!city){
    return {}
  }
  //PASSAR SÓ O CONST 10-17 NO BACK, passar o response no return la debaixo {no espaço: salvamento no banco etc} descobir jeito de pegar a cidade algo tipo req.query
  const response = await axios.get(URL, {
    params: {
      q: city,
      units: 'metric',
      APPID: API_KEY,
    }
  }).then(({data}) => {
    
    return data
  })
  .catch(error => {
      console.log("Error", error)
    });

    if(response?.cod === 200){

      return response
    }
    return null
}













// function Api (city, countrycode) {
//     //let city = 'São Paulo';
//     //let countrycode = 'BR'
//     console.log("TO AQUI")
    
//     const API_KEY = process.env.REACT_APP_API_KEY
//     const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city},${countrycode}&appid=${API_KEY}`
//     let weatherDisplay = ''

//     axios
//       .get(API_URL)
//       .then(response => {
        
//         const temperatureK = response.data.main.temp;
//         const humidity     = response.data.main.humidity;
//         const cityName     = response.data.name;
//         const countryName  = response.data.sys.country;
    
//         // Converte a temperatura de Kelvin para Fahrenheint e Celsius
//         const temperatureF = (temperatureK * 9) / 5 - 459.67;
//         const temperatureC = temperatureK - 273.15;
        
//         weatherDisplay = `Right now, in \
//             ${cityName}, ${countryName} the current temperature is \
//             ${temperatureC.toFixed(0)}ºC \
//             (${temperatureF.toFixed(0)}ºF), with ${humidity}% humidity, \
//             Conditions: ${response.data.weather[0].description} `.replace(/\s+/g, " ");
    
//         //console.log(weatherDisplay)
//       })
//       .catch(error => {
//           console.log("Error", error)
//           weatherDisplay = `Nenhum resultado para a pesquisa, por favor confira se não houve algum erro de digitação na busca.`
//       });
//     console.log(weatherDisplay)
//     return(
//         <h1>{weatherDisplay}</h1>
//     )  
// }
 

// export default Api