import sanity from "@sanity/client"
import { FETCH_TIMELINE_SUCCESS, FETCH_CHAPTERS_SUCCESS } from "./actions.js"

const { NODE_ENV, REACT_APP_SANITY_PROJECT_ID: PROJECT_ID } = process.env

const initialState = {
  sanityClient: sanity({
    projectId: PROJECT_ID,
    dataset: "production",
    useCdn: NODE_ENV === "production",
  }),
  chapters: [],
  timeline: [],
}

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_TIMELINE_SUCCESS:
      return { ...state, timeline: [...state.timeline, ...payload] }
    case FETCH_CHAPTERS_SUCCESS:
      return { ...state, chapters: [...state.chapters, ...payload] }

    default:
      return state
  }
}
