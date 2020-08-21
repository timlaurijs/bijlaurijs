import React from "react"
import "./Menubar.scss"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import {
  selectMenuItemData,
  selectCurrentMenuItem,
  selectSeason,
} from "../store/homepage/selectors"

export default function Menubar() {
  const menuItems = useSelector(selectMenuItemData)
  const currentMenuItem = useSelector(selectCurrentMenuItem)
  const season = useSelector(selectSeason)

  // sets selected menuItem title to color black
  const selectedMenuItem = (title) => {
    if (currentMenuItem && title === currentMenuItem.title) {
      return { color: "black" }
    }
  }

  const seasonStyling = (season) => {
    if (season !== "year") {
      return { visibility: "hidden" }
    } else {
      return { visibility: "visible" }
    }
  }

  // console.log(menuItems.length)

  return (
    <div className="menubar" style={seasonStyling(season)}>
      {menuItems.map((item) => {
        if (item.order < menuItems.length) {
          console.log("menuItem rendered first:", item.order)
          return (
            <Link
              key={item.id}
              to="/"
              // fires callback function (scrollIntoView)
              onClick={item.callback}
              style={selectedMenuItem(item.title)}
            >
              {item.title}
            </Link>
          )
        } else if (item.order === menuItems.length) {
          console.log("menuItem rendered last:", item.order)
          return (
            <Link
              key={item.id}
              to="/"
              // fires callback function (scrollIntoView)
              onClick={item.callback}
              style={selectedMenuItem(item.title)}
            >
              {item.title}
            </Link>
          )
        }
      })}
    </div>
  )
}
