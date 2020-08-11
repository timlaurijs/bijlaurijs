import React, { useEffect, createRef, useState } from "react"
import "./Timeline.scss"
import { useSelector } from "react-redux"
import MenuItem from "./MenuItem"
import {
  selectTimelineItems,
  selectMenuItems,
} from "../store/homepage/selectors"

export default function Timeline() {
  const menuItems = useSelector(selectMenuItems)

  return (
    <div className="Timeline">
      {menuItems.map((menu) => (
        <MenuItem menu={menu} />
      ))}
    </div>
  )
}
