import { LIST_FOUND_USERS } from '../actions/type/search'

const initialState = {
  listFoundUsers: false,
}

export default function SearchReducer(state = initialState, action) {
  switch (action.type) {
    case LIST_FOUND_USERS:
      return {
        ...state,
        listFoundUsers: action.payload,
      }

    default:
      return state
  }
}
