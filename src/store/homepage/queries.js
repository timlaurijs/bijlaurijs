export const fetchMenuItemsQuery = `
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

export const fetchPostsQuery = `
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
  title
}
`
