import { combineReducers } from "redux"
import menuBar from "./menubar/reducer"
import user from "./user/reducer"
import homepageData from "./homepage/reducer"

export default combineReducers({
  menuBar,
  user,
  homepageData,
})
