import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const Content = styled.div`
  width: 80%;
  height: 80%;
  max-height: 800px;
  overflow: scroll;
  box-shadow: 0px 0px 50px #ff3a3a;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const ContentTitle = styled.h1`
  color: #e6edf3;
`

export const HomeButtonLink = styled(Link)``

export const HomeButton = styled.button`
  width: 300px;
  height: 50px;
  background: #238636;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`
