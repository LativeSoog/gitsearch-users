import styled from 'styled-components'

export const Container = styled.div`
  width: 600px;
  display: grid;
  row-gap: 10px;
`

export const Pagination = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  overflow: scroll;
`

export const PaginationButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 30px;
  min-height: 30px;
  border: 2px solid #3081f7;
  color: #3081f7;
  border-radius: 100px;
  cursor: pointer;
`

export const PaginationPages = styled.p`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`

export const Sorting = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
`

export const SortingButton = styled.button`
  width: 320px;
  height: 40px;
  background: #238636;
  border-radius: 10px;
  border: 0;
  color: #fff;
  font-weight: 700;
  font-size: 18px;
`

export const ContentHeaderTitle = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-items: center;
  margin-bottom: 20px;
`

export const HeaderTitle = styled.p`
  font-size: 18px;
  font-weight: 700;
`

export const ContentUser = styled(ContentHeaderTitle)`
  margin: 0;
`

export const NameUser = styled.p``

export const ImgMoreInformation = styled.img`
  cursor: pointer;
`
