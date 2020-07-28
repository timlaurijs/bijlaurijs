import React, { useEffect } from "react"
import "./App.scss"
import { useDispatch } from "react-redux"
import { fetchTimeline, fetchChapters } from "./store/homepage/actions"
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/homepage"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTimeline())
    dispatch(fetchChapters())
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  )
}
