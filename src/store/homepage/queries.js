export const fetchMenuItemsQuery = `
* [_type=="post"] | order (order, ASC){
  "id": _id,
  "slug": slug.current,
  order,
  title,
  body,
} 
`

export const fetchPostsQuery = `
* [_type=="afbeeldingen"] | order (postOrder, ASC){
  "id": _id,
  ...mainImage.asset->{
   "imageUrl": url,
  },
  ...post->{
  "postId": _id,
  "postOrder": order
  },
  seasons,
  title
}
`
