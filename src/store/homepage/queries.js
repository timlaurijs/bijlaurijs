export const fetchMenuItemsQuery = `
* [_type=="menuItem"] | order (order, ASC){
  "id": _id,
  "slug": slug.current,
  order,
  title,
  body,
} 
`

export const fetchPostsQuery = `
* [_type=="post"] | order (menuItemOrder, ASC){
  "id": _id,
  ...mainImage.asset->{
   "imageUrl": url,
  },
  ...menuItem->{
  "menuItemId": _id,
  "menuItemOrder": order
  },
  seasons,
  title,
  order,
  "slug": slug.current,
}
`
