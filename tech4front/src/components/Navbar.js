import React from 'react'
import styled from 'styled-components'

function Navbar(){

    return (
        <Nav>
            <Logo href="" alt="Tech4Weather">
                <img src="assets/Tech4Weather.png" alt="Tech4Weather" width="200px" height="auto"/>
            </Logo>
        </Nav>
  )
}


const Nav = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background: #ffffff;   
`

const Logo = styled.a`
    padding: 0.5rem;
`

export default Navbar