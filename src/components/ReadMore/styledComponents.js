// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  margin: 40px;
  min-height: 100vh;
  padding: 20px 30px;
  font-family: 'Roboto';
  box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
    rgba(0, 0, 0, 0.3) 0px 30px 60px -30px,
    rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
`

export const Heading = styled.h1`
  color: #1e293b;
  font-family: 'Roboto';
`

export const About = styled.p`
  color: #334155;
`

export const HookImage = styled.img`
  height: 300px;
  width: 70%;
  border-radius: 10px;
  margin-bottom: 10px;
  margin-top: 10px;
  @media screen and (min-width: 768px) {
    height: 400px;
  }
`

export const Description = styled.p`
  color: #334155;
  font-size: 18px;
  width: 70%;
`

export const Button = styled.button`
  width: 120px;
  padding: 8px;
  color: #ffffff;
  border: none;
  outline: none;
  cursor: pointer;
  background-color: #1f81ff;
  border-radius: 5px;
`
