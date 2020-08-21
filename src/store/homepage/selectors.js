// creates array from object with menuItems
export const selectMenuItems = (state) =>
  Object.values(state.homepage.menuItems)

export const isLoading = (state) => state.homepage.loading

// selects posts with postOrder number corresponding with menuItem.order number
export const selectMenuItemsPosts = (menuItem, season) => (state) => {
  const posts = state.homepage.posts.filter(
    (post) => post.menuItemOrder === menuItem.order
  )
  const filteredPosts = [...posts].filter((post) => {
    if (season === "year") {
      return post
    } else if (post.seasons === season) {
      return post
    }
  })
  return filteredPosts
}

// export const selectMenuItemsPosts = (menuItem) => (state) =>
//   state.homepage.posts.filter((post) => post.menuItemOrder === menuItem.order)

// create array from object of menuItemData, selects id, title, slug, callbackFn
export const selectMenuItemData = (state) =>
  Object.values(state.homepage.menuItems).map(
    ({ id, title, slug, order, callback }) => ({
      id,
      title,
      slug,
      order,
      callback,
    })
  )

export const selectCurrentMenuItem = (state) => state.homepage.currentMenuItem

export const selectSeason = (state) => state.homepage.currentSeason
