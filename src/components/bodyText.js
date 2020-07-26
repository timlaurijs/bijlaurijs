import React from "react"

export default function BodyText(props) {
  return (
    <div key={props.id}>
      <p>{props.body}</p>
    </div>
  )
}
