import React, { useState, useEffect } from 'react'
import styled from 'styled-components' 
import { apiWeather } from '../services/api'

function UserHistory({weather, weathersPop}){
    const [weathers, setWeather] = useState([]);
    const [weatherHistory, setWeatherHistory] = useState('');
    const [weathersTop5, setWeathersTop5] = useState([]);

    useEffect(() => {
        let weatherHistory = localStorage.getItem("history")
        if(weatherHistory){
            weatherHistory = weatherHistory.split(",")
            async function searchHistory(){
                
                if(weatherHistory.length > 0){
                    weatherHistory.map(async (weatherH) => {
                        await searchWeather(weatherH) 
                    })
                }else{
                    searchWeather(weatherHistory)
                }
            }
            searchHistory()
        }
    }, [])
    //back envia cidade masi populares pra um array
    useEffect(() => {
        if(!weathersPop) return
        if(weathersPop?.length > 0){
                if(weathersPop.length > 0){
                    weathersPop.map(async (weatherH) => {
                        await searchWeather(weatherH) 
                    })
                }else{
                    searchWeather(weathersPop)
                }
        }
    }, [weathersPop])

    useEffect(() => {
        if(weather){
            setWeatherHistory(weatherHistory)
            searchWeather(weather)
        }
    }, [weather])

    const searchWeather = async (city) => {
        const data = await apiWeather(city)
        if(data){
            setWeather(weatherTarget => [data, ...weatherTarget])   
        }
    }

    const searchWeathersTop5 = async (city) => {
        const data = await apiWeather(city) //apiTop5
        if(data){
            setWeather(weatherTarget => [data, ...weatherTarget])   
        }
    }

    return(
        <HistoryArea>
            <div className="dev--weather">
            {weathers?.map((weather,key) => (
                        <div key={key}>
                            <h2> 
                                <span>{weather?.name}</span>
                                <sup>{weather?.sys.country}</sup>
                            </h2>
                            <div>
                                {Math.round(weather?.main.temp)}&deg;C
                            </div>
                            <div>
                                <img className="weather-icon" src={`https://openweathermap.org/img/wn/${weather?.weather[0].icon}@2x.png`} alt={weather?.weather[0].description} />
                                <p>{weather?.weather[0].description}, {weather?.main.humidity}% humidity</p>
                            </div>
                        </div>
            ))}
            </div>
         </HistoryArea>
    )
}

export default UserHistory

const HistoryArea = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;  
    text-align: left;
    border-radius: 5px;


`