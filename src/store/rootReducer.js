import { combineReducers } from "redux"
import menuBar from "./menubar/reducer"
import user from "./user/reducer"

export default combineReducers({
  menuBar,
  user,
})
