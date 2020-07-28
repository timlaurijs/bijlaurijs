import { setCurrentChapter } from "../menubar/actions"
export const FETCH_TIMELINE_SUCCESS = "FETCH_TIMELINE_SUCCESS"
export const FETCH_CHAPTERS_SUCCESS = "FETCH_CHAPTERS_SUCCESS"

const fetchTimelineSuccess = (data) => {
  return {
    type: FETCH_TIMELINE_SUCCESS,
    payload: data,
  }
}

export const fetchTimeline = () => async (dispatch, getState) => {
  const client = getState().homepageData.sanityClient
  const query = `
  * [_type=="afbeeldingen"] | order (postOrder, ASC){
    _id,
    ...mainImage.asset->{
     "imageUrl": url,
    },
    ...post->{
    "postId": _id,
    "postOrder": order
  	},
  	seasons,
  }
  `
  await client.fetch(query).then((data) => {
    const clientSorted = [...data].sort((a, b) => a.postOrder - b.postOrder)
    dispatch(fetchTimelineSuccess(clientSorted))
  })
}

const fetchChaptersSuccess = (data) => {
  return {
    type: FETCH_CHAPTERS_SUCCESS,
    payload: data,
  }
}

export const fetchChapters = () => async (dispatch, getState) => {
  const client = getState().homepageData.sanityClient
  const query = `
  * [_type=="post"] | order (order, ASC){
    _id,
    order,
    title,
    ...body[0]{
      ...children[0]{
       "body": text 
      }
    }
  } 
  `
  await client.fetch(query).then((data) => {
    dispatch(fetchChaptersSuccess(data))
    //set default chapter to the 1st in the list
    dispatch(setCurrentChapter(data[0]._id))
  })
}
