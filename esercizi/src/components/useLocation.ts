import { useState } from "react";

export function useCurrentLocation() {
    const [position, setPosition] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

 function getLocation() {
  setLoading(true)

  navigator.geolocation.getCurrentPosition(
    function successCallback(position) {
      setPosition(position)
      setLoading(false)
    },

    function errorCallback(error) {
      setError(error)
      setLoading(false)
    }
  )
} return {
  position,
  loading,
  error,
  getLocation
}
    }
