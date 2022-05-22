import React, { useContext } from "react"
import { HouseContext } from "../house.context"
import MemberCard from "./components/member.card.component"

export default function Members({ member }) {
  const { houseState } = useContext(HouseContext)

  return (
    <>
      <div>Members</div>
      {houseState.data &&
        houseState.data.map((member) => <MemberCard member={member} />)}
    </>
  )
}
