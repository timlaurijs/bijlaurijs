import React from "react"
import "./BodyText.scss"
import { useSelector } from "react-redux"
import { selectMenuItems, selectedMenuItem } from "../store/homepage/selectors"

export default function BodyText() {
  const menuItems = useSelector(selectMenuItems)
  const selectedMenu = useSelector(selectedMenuItem)

  return (
    <div className="BodyText">
      {menuItems.map((menuItem) => {
        if (menuItem._id === selectedMenu[0])
          return (
            <div key={menuItem._id}>
              <p>{menuItem.body}</p>
            </div>
          )
      })}
    </div>
  )
}
