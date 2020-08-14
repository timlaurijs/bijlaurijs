import React, { useState, useEffect, useCallback } from "react"
import "./Post.scss"
import { useSelector, useDispatch } from "react-redux"
import { selectMenuItemsPosts } from "../store/homepage/selectors"
import {
  setCurrentMenuItem,
  setMenuItemCallback,
} from "../store/homepage/actions"

const Post = (props) => {
  const dispatch = useDispatch()
  const { menuItem } = props
  // selects posts of corresponding menuItem
  const posts = useSelector(selectMenuItemsPosts(menuItem))
  // local states that store DOM node info
  const [menuItemOffsetTop, setMenuItemOffsetTop] = useState(0)
  const [menuItemOffsetBottom, setMenuItemOffsetBottom] = useState(0)
  const [postsLoaded, setPostsLoaded] = useState(0)

  const scrollHandler = (ev) => {
    // amount of pixels scrolled
    const { scrollTop } = ev.target.scrollingElement
    // sets boundries offset top
    if (
      scrollTop > menuItemOffsetTop - 20 &&
      scrollTop - window.innerHeight < menuItemOffsetTop - 20
    ) {
      // sets new current menuItem
      dispatch(setCurrentMenuItem(menuItem))
    } else if (
      // boundries for offset bottom
      scrollTop < menuItemOffsetBottom - 20 &&
      scrollTop + window.innerHeight > menuItemOffsetBottom - 20
    ) {
      // sets new current menuItem
      dispatch(setCurrentMenuItem(menuItem))
    }
  }

  useEffect(() => {
    // on mount listens to scroll events
    window.addEventListener("scroll", scrollHandler)
    // on dismount stops listening for scroll events
    return () => window.removeEventListener("scroll", scrollHandler)
  }, [scrollHandler])

  const menuItemRef = useCallback(
    // reference to DOM node
    (node) => {
      // checks is node is rendered
      if (node === null) return
      // heigh of DOM node
      const { height } = node.getBoundingClientRect()
      // sets offset to top of node
      setMenuItemOffsetTop(node.offsetTop)
      // sets offset to bottom of node
      setMenuItemOffsetBottom(height + node.offsetTop)
      // callback fn to scroll to node offsettop
      const scrollCallback = () => {
        node.scrollIntoView({
          behavior: "smooth",
          block: "start",
        })
      }
      // dispatches fn to store with menuItem information
      dispatch(setMenuItemCallback(menuItem, scrollCallback))
    },
    // checks all posts are rendered
    [menuItem, postsLoaded !== posts.length]
  )

  return (
    <div className="MenuItem" ref={menuItemRef}>
      {posts.map((post) => (
        <img
          key={post.id}
          src={post.imageUrl}
          onLoad={() => setPostsLoaded(postsLoaded + 1)}
        ></img>
      ))}
    </div>
  )
}

export default Post
