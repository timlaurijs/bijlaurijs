import React, { useState, useEffect } from "react"
import { login } from "../store/user/actions"
import { selectToken } from "../store/user/selectors"
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router-dom"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const dispatch = useDispatch()
  const token = useSelector(selectToken)
  const history = useHistory()

  useEffect(() => {
    if (token !== null) {
      history.push("/admin")
    }
  }, [token, history])

  const submitForm = (event) => {
    event.preventDefault()
    dispatch(login(email, password))
    setEmail("")
    setPassword("")
  }

  return (
    <div>
      <form>
        <label htmlFor="email">Email</label>
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="text"
          placeholder="email"
          required
        ></input>
        <label htmlFor="password">Email</label>
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          placeholder="password"
          required
        ></input>
      </form>
      <button type="submit" onClick={submitForm}>
        Log in
      </button>
    </div>
  )
}
