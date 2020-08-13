import React from "react"
import "./Menubar.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSelectedPost } from "../store/homepage/actions"
import { selectMenuItems } from "../store/homepage/selectors"

export default function Menubar() {
  const dispatch = useDispatch()
  const menuItems = useSelector(selectMenuItems)
  // console.log("what are the chapter items?", menuItems)

  return (
    <div className="menubar">
      {menuItems.map((menu) => {
        return (
          <a
            href={`#${menu._id}`}
            key={menu._id}
            onClick={() => dispatch(setSelectedPost(menu._id))}
          >
            {menu.title}
          </a>
        )
      })}
    </div>
  )
}
