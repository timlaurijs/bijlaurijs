import React from "react"
import "./Menubar.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  selectMenuItemData,
  selectCurrentMenuItem,
} from "../store/homepage/selectors"

export default function Menubar() {
  const menuItems = useSelector(selectMenuItemData)
  const currentMenuItem = useSelector(selectCurrentMenuItem)

  // sets selected menuItem title to color black
  const selectedMenuItem = (title) => {
    if (currentMenuItem && title === currentMenuItem.title) {
      return { color: "black" }
    }
  }

  return (
    <div className="menubar">
      {menuItems.map((item) => (
        <Link
          key={item.id}
          to="/"
          // fires callback function (scrollIntoView)
          onClick={item.callback}
          style={selectedMenuItem(item.title)}
        >
          {item.title}
        </Link>
      ))}
    </div>
  )
}
