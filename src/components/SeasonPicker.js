import React, { useState } from "react"
import "./SeasonPicker.scss"
import { useDispatch, useSelector } from "react-redux"
import { setSeason } from "../store/homepage/actions"
import { selectSeason } from "../store/homepage/selectors"

const SeasonPicker = () => {
  const dispatch = useDispatch()
  const season = useSelector(selectSeason)

  const seasonStyling = (season) => {
    if (season !== "year") {
      return { display: "block" }
    } else {
      return {}
    }
  }

  const seasonColor = (season) => {
    if (season === "spring") {
      return {
        color: "#468840",
      }
    } else if (season === "summer") {
      return {
        color: "#F8A30F",
      }
    } else if (season === "autumn") {
      return {
        color: "#F58417",
      }
    } else {
      return {
        color: "#3379b2",
      }
    }
  }

  const seasonName = (season) => {
    if (season === "winter") return "Winter"
    else if (season === "spring") return "Lente"
    else if (season === "summer") return "Zomer"
    else if (season === "autumn") return "Herfst"
  }

  if (season !== "year") {
    return (
      <div className="SeasonPicker" style={seasonStyling(season)}>
        <p> Laat alle jaargetijde zien</p>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="year"
          className="all"
        >
          ☃️ 🌱 ☀️ 🍂
        </button>
        <p style={seasonColor(season)} className="seasonName">
          {seasonName(season)}
        </p>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="winter"
        >
          ☃️
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="spring"
        >
          🌱
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="summer"
        >
          ☀️
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="autumn"
        >
          🍂
        </button>
      </div>
    )
  } else {
    return (
      <div className="SeasonPicker" style={seasonStyling(season)}>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="winter"
        >
          ☃️
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="spring"
        >
          🌱
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="summer"
        >
          ☀️
        </button>
        <button
          style={seasonStyling(season)}
          onClick={(event) => dispatch(setSeason(event.target.value))}
          value="autumn"
        >
          🍂
        </button>
        <p> Kies een jaargetijde</p>
      </div>
    )
  }
}

export default SeasonPicker
