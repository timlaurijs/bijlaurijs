import React from "react"
import "./BodyText.scss"
import BlockContent from "@sanity/block-content-to-react"
import { useSelector } from "react-redux"
import { selectCurrentMenuItem } from "../store/homepage/selectors"

export default function BodyText() {
  const menuItem = useSelector(selectCurrentMenuItem)

  return (
    <div className="BodyText">
      {menuItem &&
        menuItem.body
          .filter(({ _type }) => _type === "block")
          .map((block) => (
            <BlockContent key={menuItem.id} blocks={block} serializers={{}} />
          ))}
    </div>
  )
}
