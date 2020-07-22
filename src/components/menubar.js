import React from "react"

export default function Menubar(props) {
  return (
    <div key={props.id}>
      <a href="#">{props.item}</a>
    </div>
  )
}
