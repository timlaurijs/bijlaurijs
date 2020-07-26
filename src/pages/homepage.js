import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { fetchTimeline, fetchChapters } from "../store/homepage/actions"
import { setCurrentChapter } from "../store/menubar/actions"
import { selectedChapter } from "../store/menubar/selectors"
import {
  selectChapterItems,
  selectTimelineItems,
} from "../store/homepage/selectors"
import "./homepage.scss"
import Menubar from "../components/menubar"
import BodyText from "../components/bodyText"
import Images from "../components/images"

export default function Homepage() {
  const dispatch = useDispatch()
  const chapterItems = useSelector(selectChapterItems)
  const timelineItems = useSelector(selectTimelineItems)
  const selectedItem = useSelector(selectedChapter)

  useEffect(() => {
    dispatch(fetchTimeline())
    dispatch(fetchChapters())
  }, [dispatch])

  return (
    <div>
      {chapterItems.map(({ _id, order, title }) => (
        <Menubar key={_id} id={_id} order={order} title={title} />
      ))}

      {chapterItems.map((chapter, index) => {
        if (chapter._id === selectedItem[0]) {
          return (
            <BodyText
              key={chapter._id}
              order={chapter.order}
              title={chapter.title}
              body={chapter.body}
            />
          )
        }
      })}

      {timelineItems.map((image) => {
        const season = !image.season ? null : image.season
        return (
          <Images
            key={image._id}
            url={image.imageUrl}
            postId={image.postId}
            order={image.postOrder}
            season={season}
          />
        )
      })}
    </div>
  )
}
