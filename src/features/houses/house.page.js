import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import useAxios from "../../helpers/use-axios"
import { HouseContext } from "./house.context"

export default function HousePage({ houseName }) {
  const { get } = useAxios()
  const getData = async () => {
    const response = await get(
      `http://hp-api.herokuapp.com/api/characters/house/${houseName.toLowerCase()}`
    )
    return response
  }

  return (
    <HouseContext.Provider value={{ houseState: getData() }}>
      <div className='container is-fluid'>
        <h1>{houseName}</h1>
      </div>
    </HouseContext.Provider>
  )
}

HousePage.propTypes = {
  houseName: PropTypes.string.isRequired
}
