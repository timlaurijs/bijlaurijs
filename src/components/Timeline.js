import React from "react"
import "./Timeline.scss"
import { useDispatch, useSelector } from "react-redux"
import {
  selectTimelineItems,
  selectChapterItems,
} from "../store/homepage/selectors"
import "../pages/homepage.scss"

export default function Timeline() {
  const timelineItems = useSelector(selectTimelineItems)
  const chapterItems = useSelector(selectChapterItems)

  // console.log("show me timeline items", timelineItems)
  // console.log("show me the chapter items", chapterItems)

  return (
    <div className="Timeline">
      {chapterItems.map((chapter) => {
        const orderNumber = chapter.order
        return (
          <div className="chapter" key={chapter._id} id={chapter._id}>
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
