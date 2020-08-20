import React, { useEffect } from "react"
import "./App.scss"
import { useDispatch, useSelector } from "react-redux"
import { fetchPosts, fetchMenuItems, setSeason } from "./store/homepage/actions"
import { Switch, Route } from "react-router-dom"
import { selectSeason } from "./store/homepage/selectors"
import Home from "./pages/Home"

export default function App() {
  const dispatch = useDispatch()
  const season = useSelector(selectSeason)

  function topFunction() {
    document.body.scrollTop = 0 // For Safari
    document.documentElement.scrollTop = 0 // For Chrome, Firefox, IE and Opera
  }

  useEffect(() => {
    topFunction()
  }, [season])

  useEffect(() => {
    dispatch(fetchPosts())
    dispatch(fetchMenuItems())
    dispatch(setSeason("year"))
  }, [dispatch])

  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  )
}
