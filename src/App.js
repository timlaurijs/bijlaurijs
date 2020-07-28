import React, { useState, useEffect } from "react"
import "./App.scss"
import { useDispatch, useSelector } from "react-redux"
import { fetchTimeline, fetchChapters } from "./store/homepage/actions"
import { Switch, Route } from "react-router-dom"
import { fetchMenuItems } from "./store/menubar/actions"
import Homepage from "./pages/homepage"
import Admin from "./pages/admin"
import Login from "./pages/login"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTimeline())
    dispatch(fetchChapters())
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route exact path="/admin" component={Admin} />
      {/* <Route exact path="/login" component={Login} /> */}
    </Switch>
  )
}
