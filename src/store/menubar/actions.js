import axios from "axios"
import { apiUrl } from "../../config/constants"

export const FETCH_MENU_ITEMS_SUCCESS = "FETCH_MENU_ITEMS_SUCCESS"

export const fetchMenuItemsSuccess = (menuItems) => ({
  type: FETCH_MENU_ITEMS_SUCCESS,
  payload: menuItems,
})

export const fetchMenuItems = () => {
  return async (dispatch, getState) => {
    // const artworkCount = getState().artworks.length
    const res = await axios.get(`${apiUrl}/menus`)
    console.log("what is res at menu action?", res.data.menuItems.rows)
    dispatch(fetchMenuItemsSuccess(res.data.menuItems.rows))
  }
}
