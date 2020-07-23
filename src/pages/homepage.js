import React, { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { fetchMenuItems } from "../store/menubar/actions"
import { selectMenuItems } from "../store/menubar/selectors"
import "./homepage.scss"
import Menubar from "../components/menubar"
import Images from "../components/images"

export default function Homepage() {
  const dispatch = useDispatch()
  const menuItems = useSelector(selectMenuItems)
  console.log("what is menuItems?", menuItems)

  useEffect(() => {
    dispatch(fetchMenuItems())
  }, [dispatch])

  return (
    <div className="grid">
      <div className="menubar">
        <div className="menubar-inner">
          {menuItems.map((item) => {
            return <Menubar key={item.id} item={item.item} />
          })}
        </div>
      </div>
      <div className="images">
        {menuItems.map((item) => {
          return item.images.map((image) => {
            // console.log("what are the images?", image.imageUrl)
            return <Images key={image.id} url={image.imageUrl} />
          })
        })}
      </div>
    </div>
  )
}
