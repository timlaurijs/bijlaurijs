import {
  FETCH_TIMELINE_ITEMS_SUCCESS,
  FETCH_MENU_ITEMS_SUCCESS,
  setSelectedMenuItem,
} from "./actions.js"

const initialState = {
  menuItems: [],
  timelineItems: [],
  setMenuItem: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIMELINE_ITEMS_SUCCESS:
      return { ...state, timelineItems: [...state.timelineItems, ...payload] }
    case FETCH_MENU_ITEMS_SUCCESS:
      return { ...state, menuItems: [...state.menuItems, ...payload] }
    case "SET_SELECTED_MENU_ITEM":
      return { ...state, setMenuItem: [...payload] }

    default:
      return state
  }
}
