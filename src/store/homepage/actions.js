import { sanityClient } from "../../index"
import { fetchMenuItemsQuery, fetchPostsQuery } from "./queries"
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS"
export const FETCH_MENU_ITEMS_SUCCESS = "FETCH_MENU_ITEMS_SUCCESS"

export const fetchPosts = () => async (dispatch, getState) => {
  await sanityClient.fetch(fetchPostsQuery).then((data) => {
    const sortedPosts = [...data].sort((a, b) => a.title - b.title)
    dispatch(fetchPostsSuccess(sortedPosts))
  })
}
const fetchPostsSuccess = (data) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    payload: data,
  }
}

export const fetchMenuItems = () => async (dispatch, getState) => {
  await sanityClient.fetch(fetchMenuItemsQuery).then((data) => {
    dispatch(fetchMenuItemsSuccess(data))
    //set default chapter to the 1st in the list
    dispatch(setSelectedPost(data[0]._id))
  })
}
const fetchMenuItemsSuccess = (data) => {
  return {
    type: FETCH_MENU_ITEMS_SUCCESS,
    payload: data,
  }
}

export const setSelectedPost = (data) => {
  const SET_SELECTED_POST = "SET_SELECTED_POST"
  return {
    type: SET_SELECTED_POST,
    payload: [data],
  }
}
