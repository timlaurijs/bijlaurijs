import {
  FETCH_POSTS_SUCCESS,
  FETCH_MENU_ITEMS_SUCCESS,
  setSelectedPost,
} from "./actions.js"

const initialState = {
  menuItems: [],
  posts: [],
  selectedPost: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_POSTS_SUCCESS:
      return { ...state, posts: [...state.posts, ...payload] }
    case FETCH_MENU_ITEMS_SUCCESS:
      return { ...state, menuItems: [...state.menuItems, ...payload] }
    case "SET_SELECTED_POST":
      return { ...state, selectedPost: [...payload] }

    default:
      return state
  }
}
