import React, { useContext } from "react"
import { HouseContext } from "../house.context"
import MemberCard from "./components/member.card.component"

export default function Members({ member }) {
  const { houseState } = useContext(HouseContext)

  return (
    <>
      <div>Members</div>
      <br />
      <div className='is-flex is-flex-wrap-wrap is-justify-content-space-around columns'>
        {houseState.data &&
          houseState.data.map((member) => <MemberCard member={member} />)}
      </div>
    </>
  )
}
