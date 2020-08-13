import React from "react"
import "./BodyText.scss"
import { useSelector } from "react-redux"
import { selectMenuItems, selectedPost } from "../store/homepage/selectors"

export default function BodyText() {
  const menuItems = useSelector(selectMenuItems)
  const selectedPostItem = useSelector(selectedPost)

  return (
    <div className="BodyText">
      {menuItems.map((menu) => {
        if (menu._id === selectedPostItem[0])
          return (
            <div key={menu._id}>
              <p>{menu.body}</p>
            </div>
          )
      })}
    </div>
  )
}
