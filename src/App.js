import React, { useState, useEffect } from "react"
import "./App.scss"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { fetchMenuItems } from "./store/menubar/actions"
import Homepage from "./pages/homepage"

export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Homepage} />
      </Switch>
    </div>
  )
}
