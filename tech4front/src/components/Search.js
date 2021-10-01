import React, { useState } from 'react'
import styled from 'styled-components' 

function Search(){
    const [city, setCity] = useState('')
    const handleOnChangeCity = (a) => {
        setCity(a.target.value)
    }

    const [country, setCountry] = useState('')
    const handleOnChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    return(
        <SearchArea>
            <form>
                <div className="form--input">
                    <label for="city">Busque por uma cidade:</label>
                    <input type="city" id="city" name="city"  onChange={handleOnChangeCity} value={city}/>
                </div>

                <div className="form--input">
                    <label for="country">País:</label>
                    <input type="text" id="country" name="country"  onChange={handleOnChangeCountry} value={country}/>
                </div>

            </form>
        </SearchArea>
    );
}

//<BtnDefault type="submit" onClick={createUser}> Comece agora! </BtnDefault>
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