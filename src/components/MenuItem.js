import React, { createRef, useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { selectTimelineItems } from "../store/homepage/selectors"

import "./MenuItem.scss"

const MenuItem = (props) => {
  const { menu } = props
  const timelineItems = useSelector(selectTimelineItems)
  const [itemHeight, setItemHeight] = useState(0)
  const [itemRef, setItemRef] = useState()

  // useEffect(() => {
  //   if (!itemRef) return
  //   setItemHeight(itemRef.offsetHeight)
  // }, [itemRef])

  console.log(`menuItem order: ${menu.order}, menuItem height: ${itemHeight}`)

  return (
    <div
      className="MenuItem"
      id={menu._id}
      ref={(ref) => {
        setItemRef(ref)
      }}
    >
      {timelineItems.map((item) => {
        // const clientSortedAlphabetical = [...item].sort(
        //   (a, b) => a.title - b.title
        // )

        // console.log("what is item?", item)
        if (menu.order === item.postOrder)
          return (
            <img
              key={item._id}
              src={item.imageUrl}
              ref={(ref) => {
                if (!itemRef) return
                setItemHeight(itemRef.offsetHeight)
              }}
            ></img>
          )
      })}
    </div>
  )
}

export default MenuItem
