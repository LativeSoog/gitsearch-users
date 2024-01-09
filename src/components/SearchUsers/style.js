import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  margin: 30px 0;
`

export const SearchInput = styled.input`
  background: transparent;
  border: 1px solid #6d7681;
  padding: 20px;
  border-radius: 10px;
  width: 300px;
  color: #fff;
  font-size: 18px;
  text-align: center;

  &::placeholder {
    color: #6d7681;
  }
`

export const SearchButton = styled.button`
  width: 200px;
  height: 40px;
  background: ${({ $loadingSearch }) =>
    $loadingSearch ? '#6c6c6c' : '#238636'};
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`

export const ContentTitle = styled.h1`
  color: #e6edf3;
  margin: 0;
`

export const ErrorMessage = styled.p`
  font-size: 22px;
  font-weight: 700;
  color: #ff0000;
`
