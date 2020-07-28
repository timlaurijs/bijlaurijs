import React from "react"
import "./BodyText.scss"
import { useSelector } from "react-redux"
import { selectChapterItems } from "../store/homepage/selectors"
import { selectedChapter } from "../store/menubar/selectors"

export default function BodyText() {
  const chapterItems = useSelector(selectChapterItems)
  const selectedChapterItem = useSelector(selectedChapter)
  // console.log("what is selected chapter item?", selectedChapterItem)

  return (
    <div className="BodyText">
      {chapterItems.map((chapter) => {
        if (chapter._id === selectedChapterItem[0])
          return (
            <div key={chapter._id}>
              <p>{chapter.body}</p>
            </div>
          )
      })}
    </div>
  )
}
