import * as S from './style'

export const NotFound = () => {
  return (
    <S.Content>
      <S.ContentTitle>404 - Страница не найдена</S.ContentTitle>
      <S.HomeButtonLink to={'/'}>
        <S.HomeButton>Вернуться на главную</S.HomeButton>
      </S.HomeButtonLink>
    </S.Content>
  )
}
