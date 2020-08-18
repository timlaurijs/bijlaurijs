import React from "react"
import "./Timeline.scss"
import { useSelector } from "react-redux"
import { selectMenuItems } from "../store/homepage/selectors"
import Post from "./Post"
import Map from "./Map"

export default function Timeline() {
  const menuItems = useSelector(selectMenuItems)

  return (
    <div className="Timeline">
      {menuItems.map((menuItem) => (
        <Post key={menuItem.id} menuItem={menuItem} />
      ))}
      <Map />
    </div>
  )
}
