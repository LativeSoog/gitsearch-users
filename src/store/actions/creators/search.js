import { LIST_FOUND_USERS } from '../type/search'

export const setListFoundUsers = (foundUsers) => ({
  type: LIST_FOUND_USERS,
  payload: foundUsers,
})
