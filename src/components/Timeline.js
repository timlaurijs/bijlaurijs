import React from "react"
import "./Timeline.scss"
import { useSelector } from "react-redux"
import { selectMenuItems, isLoading } from "../store/homepage/selectors"
import Post from "./Post"
import Map from "./Map"

export default function Timeline() {
  const menuItems = useSelector(selectMenuItems)
  const load = useSelector(isLoading)

  return (
    <div className="Timeline">
      {load ? <div className="loading">Loading </div> : null}
      {menuItems.map((menuItem) => (
        <Post key={menuItem.id} menuItem={menuItem} />
      ))}
      <Map />
    </div>
  )
}
