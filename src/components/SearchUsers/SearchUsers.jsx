import { useEffect, useState } from 'react'
import { useGetUserQuery } from '../../services/searchUsers'
import * as S from './style'
import { useDispatch, useSelector } from 'react-redux'
import { setListFoundUsers } from '../../store/actions/creators/search'
import { getListFoundUsers } from '../../store/selectors/search'
import { ListUsers } from '../ListUsers/ListUsers'

export const SearchUsers = () => {
  const dispatch = useDispatch()
  const [inputUsername, setInputUsername] = useState('')
  const [querySearchUsername, setQuerySearchUsername] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [sortingRepUsers, setSortingRepUsers] = useState('')
  const [errorMessage, setErrorMessage] = useState(false)
  const listFoundUsers = useSelector(getListFoundUsers)
  const {
    data: dataSearchUsers,
    isFetching: loadingSearchUsers,
    refetch: refetchSearchUsers,
  } = useGetUserQuery(
    {
      userName: querySearchUsername,
      pageNumber: currentPage,
      sortUser: sortingRepUsers,
    },
    { skip: !querySearchUsername },
  )

  const handleSearchButton = () => {
    if (inputUsername.length > 2) {
      setQuerySearchUsername(inputUsername)
    } else {
      setErrorMessage('Пожалуйста, укажите более 2-х символов имени')
    }
  }

  useEffect(() => {
    if (querySearchUsername) {
      dispatch(setListFoundUsers(dataSearchUsers))
      setErrorMessage(false)
    }
  }, [dataSearchUsers, dispatch])

  return (
    <S.Container>
      <S.SearchInput
        placeholder="Введите имя пользователя"
        onChange={(e) => setInputUsername(e.target.value)}
      />
      {errorMessage && <S.ErrorMessage>{errorMessage}</S.ErrorMessage>}
      <S.SearchButton
        $loadingSearch={loadingSearchUsers}
        onClick={handleSearchButton}
      >
        {loadingSearchUsers ? 'Подождите...' : 'Поиск'}
      </S.SearchButton>
      {listFoundUsers && listFoundUsers.total_count === 0 ? (
        <S.ErrorMessage>По вашему запросу ничего не найдено</S.ErrorMessage>
      ) : (
        listFoundUsers && (
          <>
            <S.ContentTitle>Результаты поиска</S.ContentTitle>
            <ListUsers
              foundUsers={listFoundUsers}
              refetchSearchUsers={refetchSearchUsers}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
              sortingRepUsers={sortingRepUsers}
              setSortingRepUsers={setSortingRepUsers}
            />
          </>
        )
      )}
    </S.Container>
  )
}
