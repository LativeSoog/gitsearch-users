import { SearchUsers } from '../../components/SearchUsers/SearchUsers'
import * as S from './style'

export const MainPage = () => {
  return (
    <S.Content>
      <S.ContentLogo src="/img/logo.svg" />
      <S.ContentTitle>Поиск пользователей GitHub</S.ContentTitle>
      <S.ContentDesc>
        Для поиска укажите имя пользователя, которого вы хотите найти на GitHub
      </S.ContentDesc>
      <SearchUsers />
    </S.Content>
  )
}
