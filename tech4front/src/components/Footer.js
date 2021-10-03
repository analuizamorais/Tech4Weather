import React from 'react'
import styled from 'styled-components'

function Footer(){

    return (
        <FooterArea>
            <h1 style={{ color: "#148bce", marginTop: "-50px" }}>
                Tech4Weather
            </h1>
            <Heading>Desenvolvido por Ana Luiza Morais.</Heading>
            <FooterLink href="https://github.com/analuizamorais" target="_blank">GitHub</FooterLink>
            <FooterLink href="https://www.linkedin.com/in/analuizamorais/" target="_blank">LinkedIn</FooterLink>
        </FooterArea>
  )
}


const FooterArea = styled.footer`
    padding: 80px 60px;
    bottom: 0;
    width: 100%;
    background: #ffffff;   
    position: relative;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`

const FooterLink = styled.a`
  display: block;
  color: #148bce;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: #ffcc02;
      transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 24px;
  color: #ffcc02;
  margin-bottom: 40px;
  font-weight: bold;
`;

export default Footer