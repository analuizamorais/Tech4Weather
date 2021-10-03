import React, { useState } from 'react'
import styled from 'styled-components' 
import Api from '../services/api'

function Search(){
    const [city, setCity] = useState('')
    const handleOnChangeCity = (a) => {
        setCity(a.target.value)
    }

    const [countrycode, setCountryCode] = useState('')
    const handleOnChangeCountry = (e) => {
        setCountryCode(e.target.value)
    }

    const searchWeather = async () => {
        await Api(city, countrycode)
    }
    // function searchWeather(){
    //     Api(city, countrycode)
    // }


    return(
        <SearchArea>
            <form>
                <div className="form--input">
                    <label htmlFor="city">Busque por uma cidade:</label>
                    <input type="city" id="city" name="city"  onChange={handleOnChangeCity} value={city}/>
                </div>

                <div className="form--input">
                    <label htmlFor="country">País:</label>
                    <input type="text" id="country" name="country"  onChange={handleOnChangeCountry} value={countrycode}/>
                </div>
                <BtnDefault type="submit" onClick={searchWeather}> Pesquisar </BtnDefault>
            </form>
        </SearchArea>
    );
}

export default Search

const SearchArea = styled.div`
    background-color: #fff;
    padding: 30px;
    max-width: 300px;
    margin: auto;
    margin-top: 20px;  
    text-align: left;
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
const BtnDefault = styled.button`
    display: flex;
    align-items: center;
    padding: 10px;
    width: 100%;
    border-radius: 5px;
    border: 0px;
    outline: none;
    font-size: 16px;
    font-weight: bold;
    margin-bottom: 15px;
    transition: 0.4s;
    background-color: #148bce;
    color: #fff;
    &:hover { 
        background-color: #ffcc02;
        color: #148bce;
    }
    .center{
        text-align: center;
        width: 100%;
    }
`