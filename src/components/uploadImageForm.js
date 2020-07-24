import React, { useState, useEffect } from "react"
import axios from "axios"

export default function UploadImageForm() {
  const [fileInputState, setFileInputState] = useState("")
  // const [selectedFile, setSelectedFile] = useState("")
  const [previewSource, setPreviewSource] = useState()

  const handleFileInputChange = (event) => {
    const file = event.target.files[0]
    previewFile(file)
  }

  const previewFile = (file) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onloadend = () => {
      setPreviewSource(reader.result)
    }
  }

  const handleSubmitFile = (event) => {
    console.log("submitting")
    event.preventDefault()
    if (!previewSource) return
    uploadImage(previewSource)
  }

  const uploadImage = async (base64EncodedImage) => {
    try {
      await fetch("/api/upload", {
        method: "POST",
        body: JSON.stringify({ data: base64EncodedImage }),
        headers: { "Content-Type": "application/json" },
      })
      setFileInputState("")
      setPreviewSource("")
      // setSuccessMsg("Image uploaded successfully")
    } catch (err) {
      console.error(err)
      // setErrMsg("Something went wrong!")
    }
  }

  return (
    <div>
      <form onSubmit={handleSubmitFile}>
        <input
          type="file"
          name="image"
          onChange={handleFileInputChange}
          value={fileInputState}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {previewSource && <img src={previewSource} style={{ height: "150px" }} />}
    </div>
  )
}
