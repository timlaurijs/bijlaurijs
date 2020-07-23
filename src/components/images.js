import React from "react"
import "../pages/homepage.scss"

export default function Images(props) {
  return <img className="image" src={props.url}></img>
}
