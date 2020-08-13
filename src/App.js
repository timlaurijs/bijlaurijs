import React, { useEffect } from "react"
import "./App.scss"
import { useDispatch } from "react-redux"
import { fetchPosts, fetchMenuItems } from "./store/homepage/actions"
import { Switch, Route } from "react-router-dom"
import Homepage from "./pages/Homepage"

export default function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchMenuItems())
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={Homepage} />
    </Switch>
  )
}
