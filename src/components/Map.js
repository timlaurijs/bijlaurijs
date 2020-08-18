import React, { useEffect, useRef } from "react"
import "./Map.scss"
import mapboxgl from "mapbox-gl"
const { REACT_APP_MAPBOX_ACCESS_TOKEN: ACCESS_TOKEN } = process.env
mapboxgl.accessToken = ACCESS_TOKEN

const Map = () => {
  const mapContainerRef = useRef(null)

  useEffect(() => {
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: "mapbox://styles/mapbox/streets-v11",
      center: [6.64136, 52.006236],
      zoom: 10,
    })
    const marker = new mapboxgl.Marker()
      .setLngLat([6.64136, 52.006236])
      .addTo(map)

    // map.addControl(new mapboxgl.NavigationControl(), "bottom-right")
    // return () => map.remove()
  }, [])

  return (
    <div ref={mapContainerRef} className="Mapbox">
      mapbox
    </div>
  )
}

export default Map
