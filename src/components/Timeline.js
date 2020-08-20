import React from "react"
import "./Timeline.scss"
import { useSelector } from "react-redux"
import {
  selectMenuItems,
  isLoading,
  selectSeason,
} from "../store/homepage/selectors"
import Post from "./Post"

export default function Timeline() {
  const menuItems = useSelector(selectMenuItems)
  const load = useSelector(isLoading)
  const season = useSelector(selectSeason)

  const seasonStyling = (season) => {
    if (season !== "year") {
      return { left: "20%", width: "80%", zIndex: 0 }
    } else {
      return {}
    }
  }
  return (
    <div className="Timeline" style={seasonStyling(season)}>
      {load ? <div className="loading">Loading </div> : null}
      {menuItems.map((menuItem) => (
        <Post key={menuItem.id} menuItem={menuItem} />
      ))}
    </div>
  )
}
