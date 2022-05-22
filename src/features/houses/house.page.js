import React from "react"
import PropTypes from "prop-types"
import { HouseContext } from "./house.context"

export default function HousePage({ houseName }) {
  const state = {
    data: null,
    error: null
  }

  return (
    <HouseContext.Provider value={{ state }}>
      <h1>{houseName}</h1>
    </HouseContext.Provider>
  )
}

HousePage.propTypes = {
  houseName: PropTypes.string.isRequired
}
