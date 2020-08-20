import React from "react"
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

  return (
    <div className="SeasonPicker" style={seasonStyling(season)}>
      {/* <label htmlFor="seasons">Selecteer een seizoen </label> */}
      {/* <select onChange={(event) => dispatch(setSeason(event.target.value))}> */}
      <button
        style={seasonStyling(season)}
        onClick={(event) => dispatch(setSeason(event.target.value))}
        value="year"
        className="all"
      >
        ☃️ 🌱 ☀️ 🍂
      </button>
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
      {/* </select> */}
    </div>
  )
}

export default SeasonPicker
