import React from "react"
import "./Menubar.scss"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentChapter } from "../store/menubar/actions"
import { selectChapterItems } from "../store/homepage/selectors"

export default function Menubar() {
  const dispatch = useDispatch()
  const chapterItems = useSelector(selectChapterItems)
  // console.log("what are the chapter items?", chapterItems)

  return (
    <div className="menubar">
      {chapterItems.map((chapter) => {
        return (
          <a
            href={`#${chapter._id}`}
            key={chapter._id}
            onClick={() => dispatch(setCurrentChapter(chapter._id))}
          >
            {chapter.title}
          </a>
        )
      })}
    </div>
  )
}
