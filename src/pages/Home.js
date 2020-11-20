import React from "react"
import "./Home.scss"
import Menubar from "../components/Menubar"
import BodyText from "../components/BodyText"
import Timeline from "../components/Timeline"
import Footer from "../components/Footer"
import SeasonPicker from "../components/SeasonPicker"

//ok

export default function Home() {
  return (
    <div className="Home">
      <div className="menu-container">
        <Menubar />
        <SeasonPicker />
        <BodyText />
      </div>
      <Timeline />
      <Footer />
    </div>
  )
}
