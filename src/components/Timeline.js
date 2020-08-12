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
  const [itemHeight, setItemHeight] = useState(0)
  const [itemRef, setItemRef] = useState()

  // console.log("what is itemRef in Timeline?", itemRef)
  console.log("what is itemHeight in Timeline?", itemHeight)

  useEffect(() => {
    if (!itemRef) return
    setItemHeight(itemRef.offsetHeight)
  }, [itemRef])

  return (
    <div className="Timeline" ref={setItemRef}>
      {menuItems.map((menu) => (
        <MenuItem menu={menu} key={menu._id} />
      ))}
    </div>
  )
}
