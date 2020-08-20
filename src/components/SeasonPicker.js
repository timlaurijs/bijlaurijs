import React from "react"
import "./SeasonPicker.scss"
import { useDispatch } from "react-redux"
import { setSeason } from "../store/homepage/actions"

const SeasonPicker = () => {
  const dispatch = useDispatch()

  return (
    <form className="SeasonPicker">
      <label htmlFor="seasons">Selecteer een seizoen </label>
      <select onChange={(event) => dispatch(setSeason(event.target.value))}>
        <option value="year"> Alle seizoenen</option>
        <option value="winter"> Winter</option>
        <option value="spring"> Lente</option>
        <option value="summer"> Zomer</option>
        <option value="autumn"> Herfst</option>
      </select>
    </form>
  )
}

export default SeasonPicker
