import {
  UPDATE_MENU_ITEMS,
  APP_LOADING,
  APP_DONE_LOADING,
  UPDATE_POSTS,
  UPDATE_CURRENT_MENU_ITEM,
  UPDATE_MENU_ITEM,
  UPDATE_SEASON,
} from "./actions.js"

const initialState = {
  menuItems: {},
  posts: [],
  currentMenuItem: undefined,
  loading: false,
  currentSeason: "",
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case UPDATE_MENU_ITEMS:
      return {
        ...state,
        menuItems: {
          ...state.menuItems,
          // reduces payload to an object using .id as key
          ...payload.reduce((acc, curr) => ({ ...acc, [curr.id]: curr }), {}),
        },
      }

    case APP_LOADING:
      return { ...state, loading: true }

    case APP_DONE_LOADING:
      return { ...state, loading: false }

    //adds posts to store
    case UPDATE_POSTS:
      return { ...state, posts: state.posts.concat(payload) }

    case UPDATE_CURRENT_MENU_ITEM:
      return {
        ...state,
        // sets menuItem.id, replacing previous selected menuItem.id
        currentMenuItem: payload,
      }

    //updates menuitem with callback function and menuItem.id
    case UPDATE_MENU_ITEM:
      return {
        ...state,
        menuItems: {
          ...state.menuItems,
          [payload.id]: {
            ...(state.menuItems[payload.id] || {}),
            ...payload.data,
          },
        },
      }

    case UPDATE_SEASON:
      return {
        ...state,
        currentSeason: payload,
      }

    default:
      return state
  }
}
