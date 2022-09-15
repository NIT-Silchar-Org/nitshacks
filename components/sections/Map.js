import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '400px',
  height: '250px',
}

const center = {
  lat: -3.745,
  lng: -38.523,
}

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA-6DCycflSCjUTfIQ8yWFAiqCY-bj1wSY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker position={{lat:27.2046, lng:77.4977}} />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
