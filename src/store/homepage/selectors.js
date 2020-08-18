// creates array from object with menuItems
export const selectMenuItems = (state) =>
  Object.values(state.homepage.menuItems)

// selects posts with postOrder number corresponding with menuItem.order number
export const selectMenuItemsPosts = (menuItem) => (state) =>
  state.homepage.posts.filter((post) => post.menuItemOrder === menuItem.order)

// create array from object of menuItemData, selects id, title, slug, callbackFn
export const selectMenuItemData = (state) =>
  Object.values(state.homepage.menuItems).map(
    ({ id, title, slug, callback }) => ({
      id,
      title,
      slug,
      callback,
    })
  )

export const selectCurrentMenuItem = (state) => state.homepage.currentMenuItem
