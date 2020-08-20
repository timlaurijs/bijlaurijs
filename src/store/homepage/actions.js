import { sanityClient } from "../../index"
import { fetchMenuItemsQuery, fetchPostsQuery } from "./queries"

export const UPDATE_POSTS = "UPDATE_POSTS"
export const UPDATE_MENU_ITEMS = "UPDATE_MENU_ITEMS"
export const UPDATE_CURRENT_MENU_ITEM = "UPDATE_CURRENT_MENU_ITEM"
export const UPDATE_MENU_ITEM = "UPDATE_MENU_ITEM"
export const APP_LOADING = "APP_LOADING"
export const APP_DONE_LOADING = "APP_DONE_LOADING"
export const UPDATE_SEASON = "UPDATE_SEASON"

// fetches posts
export const fetchPosts = () => async (dispatch, getState) => {
  dispatch(appLoading())
  await sanityClient.fetch(fetchPostsQuery).then((data) => {
    // filters on title (asc)
    const sortedPosts = [...data].sort((a, b) => a.order - b.order)
    dispatch(appDoneLoading())
    dispatch(UpdatePosts(sortedPosts))
  })
}

export const appLoading = () => ({ type: APP_LOADING })
export const appDoneLoading = () => ({ type: APP_DONE_LOADING })

const UpdatePosts = (data) => {
  return {
    type: UPDATE_POSTS,
    payload: data,
  }
}

// fetches menuItems
export const fetchMenuItems = () => async (dispatch, getState) => {
  await sanityClient.fetch(fetchMenuItemsQuery).then((data) => {
    dispatch(updateMenuItems(data))
    // set selected menuItem to the 1st in the list
    dispatch(setCurrentMenuItem(data[0]))
  })
}
const updateMenuItems = (data) => {
  return {
    type: UPDATE_MENU_ITEMS,
    payload: data,
  }
}

// sets current menuItem
export const setCurrentMenuItem = (menuItem) => (dispatch, getState) => {
  dispatch(updateCurrentMenuItem(menuItem))
}
const updateCurrentMenuItem = (data) => {
  return {
    type: UPDATE_CURRENT_MENU_ITEM,
    payload: data,
  }
}

// receives 2 arguments, menuItem and a function, dispatches both to store
export const setMenuItemCallback = (menuItem, callback) => (
  dispatch,
  getState
) => {
  dispatch(updateMenuItem(menuItem.id, { callback }))
}

// removes callback from store
/*
 export const unsetPostCallback = post => (dispatch, getState) => {
 dispatch(updatePost(post.id, { callback: undefined }))
 }
*/

const updateMenuItem = (id, data) => {
  return {
    type: UPDATE_MENU_ITEM,
    payload: { id, data },
  }
}

// sets new season
export const setSeason = (data) => (dispatch, getState) => {
  dispatch(updateSeason(data))
}
const updateSeason = (data) => {
  return {
    type: UPDATE_SEASON,
    payload: data,
  }
}
