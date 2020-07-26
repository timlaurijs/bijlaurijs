export const setCurrentChapter = (data) => {
  const SET_CURRENT_CHAPTER_SUCCESS = "SET_CURRENT_CHAPTER_SUCCESS"
  return {
    type: SET_CURRENT_CHAPTER_SUCCESS,
    payload: [data],
  }
}
