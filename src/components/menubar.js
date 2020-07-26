import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentChapter } from "../store/menubar/actions"

export default function Menubar(props) {
  const dispatch = useDispatch()

  return (
    <div key={props.id}>
      <button onClick={() => dispatch(setCurrentChapter(props.id))} href="#">
        {props.title}
      </button>
    </div>
  )
}
