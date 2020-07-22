import { FETCH_MENU_ITEMS_SUCCESS } from "./actions"

const initialstate = []

export default (state = initialstate, { type, payload }) => {
  switch (type) {
    case FETCH_MENU_ITEMS_SUCCESS:
      return [...state, ...payload]
    default:
      return state
  }
}
