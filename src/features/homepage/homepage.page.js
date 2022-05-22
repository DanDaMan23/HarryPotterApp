import React from "react"
import HousesCard from "./components/houses.card.component"

export default function HomePage() {
  return (
    <div className='container is-fluid'>
      <div className='columns'>
        <HousesCard house='Gryffindor' />
        <HousesCard house='Hufflepuff' />
      </div>
      <div className='columns'>
        <HousesCard house='Ravenclaw' />
        <HousesCard house='Slytherin' />
      </div>
    </div>
  )
}
