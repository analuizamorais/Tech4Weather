import React, { useState } from 'react'
import styled from 'styled-components' 
import UserHistory from './UserHistory'


function Search(){
    const [city, setCity] = useState('')
    const [weather, setWeather] = useState('');

    const searchWeather = async (e) => {
        if(e?.key === 'Enter') {
            setWeather(city)
            let history = localStorage.getItem("history") || ''
            if(history == ''){
                localStorage.setItem("history", city)
                setCity('')
                return
            }
            history = history.split(",")
            history.push(city)
            localStorage.setItem("history", history)
            setCity('')
        }
    }

    return(
        <SearchArea>
            <div className="form--input">
                <label htmlFor="city">Search for a place:</label>
                <input type="city" id="city" name="city" placeholder="example: São Paulo, BR" value={city} onChange={(e) => setCity(e.target.value)}onKeyPress={searchWeather}/>
            </div>
             <UserHistory weather={weather} />
         </SearchArea>
    )
}

export default Search

const SearchArea = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;  
    text-align: center;
    border-radius: 5px;

    .form--input{
        text-align: left;
        label{
            display: block;
        }
        input{
            margin-bottom: 20px;
            padding: 10px;
            font-size: 16px;
            outline: none;
            border: 1px solid #ccc;
            border-radius: 5px;
            width: 280px;
            transition: 0.3s;
            &:hover{
                border: 1px solid #ffcc02;
            }
        }
    }
`