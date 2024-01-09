const searchSelector = (store) => store.SearchUsersList

export const getListFoundUsers = (store) =>
  searchSelector(store)?.listFoundUsers
