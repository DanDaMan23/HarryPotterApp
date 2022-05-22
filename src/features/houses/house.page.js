import React, { useEffect, useState } from "react"
import PropTypes from "prop-types"
import useAxios from "../../helpers/use-axios"
import { HouseContext } from "./house.context"
import Members from "./members/members"

export default function HousePage({ houseName }) {
  const { get } = useAxios()
  const [houseState, setHouseState] = useState({ data: null, error: null })

  useEffect(() => {
    const fetchData = async () => {
      const response = await get(
        `http://hp-api.herokuapp.com/api/characters/house/${houseName.toLowerCase()}`
      )
      setHouseState(response)
    }
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [houseName])

  return (
    <HouseContext.Provider value={{ houseState }}>
      <div className='container is-fluid'>
        <h1>{houseName}</h1>
        <Members />
      </div>
    </HouseContext.Provider>
  )
}

HousePage.propTypes = {
  houseName: PropTypes.string.isRequired
}
