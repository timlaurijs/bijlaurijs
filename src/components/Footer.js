import React from "react"
import logo from "../style/png/logo.png"
import booking from "../style/png/prijs.png"
import instagram from "../style/png/instagram.png"
import facebook from "../style/png/facebook.png"
import "./Footer.scss"

const Footer = () => {
  return (
    <div className="Footer">
      <img src={logo} className="Logo"></img>

      <div className="Booking">
        <a
          href="https://book4moor.eu/portal.php/nl/8b5a9307/calendar/bij-laurijs"
          target="_blank"
        >
          <img src={booking}></img>
        </a>
        <div className="SocialMedia">
          <a
            href="https://www.instagram.com/vakantiehuis_bij_laurijs/"
            target="_blank"
          >
            <img src={instagram}></img>
          </a>
          <a href="https://www.facebook.com/bijLaurijs/" target="_blank">
            <img src={facebook}></img>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Footer
