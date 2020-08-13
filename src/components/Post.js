import React, { useState, useEffect } from "react"
import { useSelector } from "react-redux"
import { selectPosts } from "../store/homepage/selectors"

import "./Post.scss"

const Post = (props) => {
  const { menu } = props
  const Posts = useSelector(selectPosts)
  const [postHeight, setPostHeight] = useState(0)
  const [postRef, setPostRef] = useState()

  // useEffect(() => {
  //   if (!postRef) return
  //   setPostHeight(postRef.offsetHeight)
  // }, [postRef])

  console.log(`menuItem order: ${menu.order}, menuItem height: ${postHeight}`)

  return (
    <div
      className="MenuItem"
      id={menu._id}
      ref={(ref) => {
        setPostRef(ref)
      }}
    >
      {Posts.map((post) => {
        // const clientSortedAlphabetical = [...post].sort(
        //   (a, b) => a.title - b.title
        // )

        // console.log("what is post?", post)
        if (menu.order === post.postOrder)
          return (
            <img
              key={post._id}
              src={post.imageUrl}
              ref={(ref) => {
                if (!postRef) return
                setPostHeight(postRef.offsetHeight)
              }}
            ></img>
          )
      })}
    </div>
  )
}

export default Post
