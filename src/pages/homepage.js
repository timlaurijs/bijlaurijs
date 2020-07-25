import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Switch, Route } from "react-router-dom"
import { fetchMenuItems } from "../store/menubar/actions"
import { selectMenuItems } from "../store/menubar/selectors"
import "./homepage.scss"
import sanity from "@sanity/client"
import Menubar from "../components/menubar"
import Images from "../components/images"
const { NODE_ENV, REACT_APP_SANITY_PROJECT_ID: PROJECT_ID } = process.env

export default function Homepage() {
  const [posts, setPosts] = useState([])
  const [images, setImages] = useState([])

  const sanityClient = require("@sanity/client")
  const client = sanityClient({
    projectId: PROJECT_ID,
    dataset: "production",
    useCdn: NODE_ENV === "production",
  })

  const getPostQuery = `
  *[_type=="post"] | order(order asc){
    title,
    body,
  }
  `
  const getImagesQuery = `
  * [_type=="afbeeldingen"]{
    _id,
    "image": mainImage.asset->,
    post->,
    seasons
  }
  `
  useEffect(() => {
    client.fetch(getImagesQuery).then((images) => {
      // console.log("images 1", images)
      setImages(images)
    })
    client.fetch(getPostQuery).then((posts) => {
      // console.log("Posts 1", posts)
      setPosts(posts)
    })
  }, [])

  const pictures = images.map((image) => {
    return image.image.path
  })

  console.log(pictures)
  console.log(images)

  //image.path

  const postBody = posts.map((post) => {
    return `${post.title}
            ${post.body[0].children[0].text}`
  })
  const postTitle = posts.map((post) => {
    return post.title
  })

  return (
    <div className="container">
      <div className="grid">
        <div className="item">
          {posts.map((post) => {
            return (
              <div>
                <h2>{post.title}</h2>
                <p>{post.body[0].children[0].text}</p>
              </div>
            )
          })}
        </div>
        <div className="images">
          {images.map((image) => {
            return <img className="image" src={image.image.url} />
          })}
        </div>
      </div>
    </div>
  )
}

/*
    <div className="grid">
      <div className="menubar">
        <div className="menubar-inner">
          {menuItems.map((item) => {
            return <Menubar key={item.id} item={item.item} />
          })}
        </div>
      </div>
      <div className="images">
        {menuItems.map((item) => {
          return item.images.map((image) => {
            // console.log("what are the images?", image.imageUrl)
            return <Images key={image.id} url={image.imageUrl} />
          })
        })}
      </div>
    </div>
*/
