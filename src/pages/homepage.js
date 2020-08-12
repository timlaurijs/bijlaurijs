import React from "react"
import "./Homepage.scss"
import Menubar from "../components/Menubar"
import BodyText from "../components/BodyText"
import Timeline from "../components/Timeline"
import Footer from "../components/Footer"

export default function Homepage() {
  return (
    <div className="Homepage">
      <div className="menu-container">
        <Menubar />
        <BodyText />
      </div>
      <Timeline />
      <Footer />
    </div>
  )
}
