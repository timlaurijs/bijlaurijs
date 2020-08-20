import React from "react"
import "./BodyText.scss"
import BlockContent from "@sanity/block-content-to-react"
import { useSelector } from "react-redux"
import {
  selectCurrentMenuItem,
  selectSeason,
} from "../store/homepage/selectors"

export default function BodyText() {
  const menuItem = useSelector(selectCurrentMenuItem)

  const season = useSelector(selectSeason)

  const seasonStyling = (season) => {
    if (season !== "year") {
      return { visibility: "hidden" }
    } else {
      return { visibility: "visible" }
    }
  }

  return (
    <div className="BodyText" style={seasonStyling(season)}>
      {menuItem &&
        menuItem.body
          .filter(({ _type }) => _type === "block")
          .map((block) => (
            <BlockContent key={menuItem.id} blocks={block} serializers={{}} />
          ))}
    </div>
  )
}
