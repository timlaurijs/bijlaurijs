import React from "react"
import "./Timeline.scss"
import { useDispatch, useSelector } from "react-redux"
import {
  selectTimelineItems,
  selectMenuItems,
} from "../store/homepage/selectors"
import "../pages/homepage.scss"

export default function Timeline() {
  const timelineItems = useSelector(selectTimelineItems)
  const menuItems = useSelector(selectMenuItems)

  return (
    <div className="Timeline">
      {menuItems.map((menu) => {
        const orderNumber = menu.order
        return (
          <div className="menuItems" key={menu._id} id={menu._id}>
            {timelineItems.map((item) => {
              if (orderNumber === item.postOrder)
                return (
                  <img
                    key={item._id}
                    className="item"
                    src={item.imageUrl}
                  ></img>
                )
            })}
          </div>
        )
      })}
    </div>
  )
}
