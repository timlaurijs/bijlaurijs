import { combineReducers } from "redux"
import user from "./user/reducer"
import homepageData from "./homepage/reducer"

export default combineReducers({
  user,
  homepageData,
})
