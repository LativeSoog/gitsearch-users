import { useGetCountRepQuery } from '../../services/searchUsers'
import * as S from './style'

export const ModalMoreInfo = ({ userSelected, setOpenModalMoreInfo }) => {
  console.log(userSelected.login)
  const { data: dataRepos } = useGetCountRepQuery(
    {
      userName: userSelected?.login,
    },
    { skip: !userSelected },
  )

  const handleCloseWindowButton = () => {
    setOpenModalMoreInfo(false)
  }

  return (
    <S.ModalWrapper>
      <S.ModalContent>
        <S.ModalTitle>
          Информация о пользователе {userSelected.login}
        </S.ModalTitle>
        <S.ModalCloseButton onClick={handleCloseWindowButton}>
          <S.ModalCloseButtonImg src="/img/button-close.svg" />
        </S.ModalCloseButton>

        <S.ModalUser>
          <S.ModalUserAvatar>
            <S.ModalUserAvatarImg src={userSelected?.avatar_url} />
          </S.ModalUserAvatar>
          <S.ModalUserContent>
            <S.ModalUserContentText>
              ID пользователя: {userSelected.id}
            </S.ModalUserContentText>
            <S.ModalUserContentText>
              Количество репозиториев:{' '}
              {dataRepos?.length ? dataRepos?.length : '0'}
            </S.ModalUserContentText>
            <S.ModalUserContentText>
              Администратор: {userSelected.site_admin ? 'Да' : 'Нет'}
            </S.ModalUserContentText>
            <S.ModalUserContentButtonLink
              to={userSelected.html_url}
              target="_blank"
            >
              <S.ModalUserContentButton>
                Перейти в профиль
              </S.ModalUserContentButton>
            </S.ModalUserContentButtonLink>
          </S.ModalUserContent>
        </S.ModalUser>
      </S.ModalContent>
    </S.ModalWrapper>
  )
}
