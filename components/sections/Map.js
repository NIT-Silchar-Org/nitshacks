import React from 'react'
import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '340px',
  height: '250px',
}

const center = { lat: 24.757777212959663, lng: 92.79353820284805 }

function MyComponent() {
  return (
    <LoadScript googleMapsApiKey="AIzaSyA-6DCycflSCjUTfIQ8yWFAiqCY-bj1wSY">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15}>
        {/* Child components, such as markers, info windows, etc. */}
        <Marker
          position={{ lat: 24.757777212959663, lng: 92.79353820284805 }}
        />
        <></>
      </GoogleMap>
    </LoadScript>
  )
}

export default React.memo(MyComponent)
