import { useEffect, useState } from 'react'
import * as S from './style'
import { ModalMoreInfo } from '../ModalWindows/ModalMoreInfo'

export const ListUsers = ({
  foundUsers,
  currentPage,
  setCurrentPage,
  refetchSearchUsers,
  sortingRepUsers,
  setSortingRepUsers,
}) => {
  const valueDisplayUsers = 30
  const [totalPages, setTotalPages] = useState(0)
  const [openModalMoreInfo, setOpenModalMoreInfo] = useState(false)
  const [currentSelectedUser, setCurrentSelectedUser] = useState(false)

  const handleNextPageButton = () => {
    if (currentPage > 0 && currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
      refetchSearchUsers()
    }
  }

  const handlePrevPageButton = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
      refetchSearchUsers()
    }
  }

  const handleSortingByRepButton = () => {
    setSortingRepUsers(sortingRepUsers ? '' : 'repositories')
  }

  const handleMoreInfoButton = (user) => {
    setCurrentSelectedUser(user)
    setOpenModalMoreInfo(true)
  }

  useEffect(() => {
    if (foundUsers && foundUsers.total_count) {
      setTotalPages(Math.ceil(foundUsers.total_count / valueDisplayUsers))
    }
  }, [foundUsers])

  return (
    <>
      {openModalMoreInfo && (
        <ModalMoreInfo
          userSelected={currentSelectedUser}
          setOpenModalMoreInfo={setOpenModalMoreInfo}
        />
      )}
      <S.Container>
        {totalPages > 1 && (
          <>
            <S.Pagination>
              <S.PaginationButton
                onClick={handlePrevPageButton}
                $totalPages={totalPages}
                $currentPage={currentPage}
              >
                &lsaquo;
              </S.PaginationButton>
              <S.PaginationButton onClick={handleNextPageButton}>
                &rsaquo;
              </S.PaginationButton>
            </S.Pagination>
            <S.PaginationPages>
              Страница {currentPage} из {totalPages}
            </S.PaginationPages>
          </>
        )}

        <S.Sorting>
          <S.SortingButton onClick={handleSortingByRepButton}>
            Сортировка: репозитории {sortingRepUsers ? '\u25B2' : '\u25BC'}
          </S.SortingButton>
        </S.Sorting>

        <S.ContentHeaderTitle>
          <S.HeaderTitle>Пользователь</S.HeaderTitle>
          <S.HeaderTitle>Подробнее</S.HeaderTitle>
        </S.ContentHeaderTitle>

        {foundUsers.items?.map((user) => (
          <S.ContentUser key={user.id}>
            <S.NameUser>{user.login}</S.NameUser>
            <S.ImgMoreInformation
              src="/img/button-more.svg"
              onClick={() => handleMoreInfoButton(user)}
            />
          </S.ContentUser>
        ))}
      </S.Container>
    </>
  )
}
