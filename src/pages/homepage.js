import React from "react"
import "./homepage.scss"
import Menubar from "../components/Menubar"
import BodyText from "../components/BodyText"
import Timeline from "../components/Timeline"

export default function Homepage() {
  return (
    <div className="homepage">
      <div className="content-container">
        <Menubar />
        <BodyText />
      </div>
      <Timeline />
    </div>
  )
}
