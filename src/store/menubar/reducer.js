import { setCurrentChapterSuccess } from "./actions"

const initialState = []

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_CURRENT_CHAPTER_SUCCESS":
      return [...payload]

    default:
      return state
  }
}
