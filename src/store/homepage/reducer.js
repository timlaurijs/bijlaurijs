import {
  UPDATE_MENU_ITEMS,
  UPDATE_POSTS,
  UPDATE_CURRENT_MENU_ITEM,
  UPDATE_MENU_ITEM,
} from "./actions.js"

const initialState = {
  menuItems: {},
  posts: [],
  currentMenuItem: undefined,
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
    default:
      return state
  }
}
