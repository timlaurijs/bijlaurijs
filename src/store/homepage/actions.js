import { setCurrentChapter } from "../menubar/actions"
import { sanityClient } from "../../index"
import { fetchMenuItemsQuery, fetchTimelineItemsQuery } from "./queries"
export const FETCH_TIMELINE_ITEMS_SUCCESS = "FETCH_TIMELINE_ITEMS_SUCCESS"
export const FETCH_MENU_ITEMS_SUCCESS = "FETCH_MENU_ITEMS_SUCCESS"

export const fetchTimelineItems = () => async (dispatch, getState) => {
  await sanityClient.fetch(fetchTimelineItemsQuery).then((data) => {
    const clientSorted = [...data].sort((a, b) => a.postOrder - b.postOrder)
    dispatch(fetchTimelineItemsSuccess(clientSorted))
  })
}
const fetchTimelineItemsSuccess = (data) => {
  return {
    type: FETCH_TIMELINE_ITEMS_SUCCESS,
    payload: data,
  }
}

export const fetchMenuItems = () => async (dispatch, getState) => {
  await sanityClient.fetch(fetchMenuItemsQuery).then((data) => {
    dispatch(fetchMenuItemsSuccess(data))
    //set default chapter to the 1st in the list
    dispatch(setSelectedMenuItem(data[0]._id))
    console.log("waht is selected current chapter?", data[0]._id)
  })
}
const fetchMenuItemsSuccess = (data) => {
  return {
    type: FETCH_MENU_ITEMS_SUCCESS,
    payload: data,
  }
}

export const setSelectedMenuItem = (data) => {
  const SET_SELECTED_MENU_ITEM = "SET_SELECTED_MENU_ITEM"
  return {
    type: SET_SELECTED_MENU_ITEM,
    payload: [data],
  }
}
