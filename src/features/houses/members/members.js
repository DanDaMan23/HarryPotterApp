import React, { useContext } from "react"
import { HouseContext } from "../house.context"

export default function Members() {
  const { houseState } = useContext(HouseContext)

  console.log(houseState)



  return <div>Members</div>
}
