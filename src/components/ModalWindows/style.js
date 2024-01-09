import { Link } from 'react-router-dom'
import styled from 'styled-components'

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

export const ModalContent = styled.div`
  width: 500px;
  height: auto;
  background: #3d3d3d;
  padding: 30px;
  border-radius: 10px;
`

export const ModalTitle = styled.h2`
  text-align: center;
  color: #fff;
`

export const ModalCloseButton = styled.div`
  position: relative;
  width: 100%;
  cursor: pointer;
`

export const ModalCloseButtonImg = styled.img`
  position: absolute;
  left: 99%;
  top: -50px;
  width: 30px;
  height: auto;
  transform: rotate(45deg);
`

export const ModalUser = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`

export const ModalUserAvatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 100px;
  overflow: hidden;
`

export const ModalUserAvatarImg = styled.img`
  width: 100%;
  height: 100%;
`

export const ModalUserContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

export const ModalUserContentText = styled.p``

export const ModalUserContentButtonLink = styled(Link)``

export const ModalUserContentButton = styled.button`
  width: 200px;
  height: 40px;
  background: #238636;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 16px;
  cursor: pointer;
`
