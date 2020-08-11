import React, { createRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTimelineItems } from "../store/homepage/selectors"

import "./MenuItem.scss"

const MenuItem = (props) => {
  const { menu } = props
  const timelineItems = useSelector(selectTimelineItems)
  const [itemHeight, setItemHeight] = useState(0)
  const [itemRef, setItemRef] = useState()

  // console.log("wat is in de itemRef?", itemRef)

  useEffect(() => {
    if (!itemRef) return
    setItemHeight(itemRef.offsetHeight)
  }, [itemRef])

  console.log("dit is de menuItem hoogtn", menu._id, itemHeight)

  return (
    <div
      className="MenuItem"
      key={menu._id}
      id={menu._id}
      ref={(ref) => {
        setItemRef(ref)
      }}
    >
      {timelineItems.map((item) => {
        // console.log(item)
        if (menu.order === item.postOrder)
          return (
            <img
              key={item._id}
              src={item.imageUrl}
              ref={(ref) => {
                console.log("image ref offsetHeight", ref.offsetHeight)
                // if (!itemRef) return
                // setItemHeight(itemRef.offsetHeight)
              }}
            ></img>
          )
      })}
    </div>
  )
}

export default MenuItem
