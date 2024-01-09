import { Outlet } from 'react-router-dom'
import * as S from './style'

export const PageLayout = () => {
  return (
    <S.Wrapper>
      <S.Container>
        <Outlet />
      </S.Container>
    </S.Wrapper>
  )
}
