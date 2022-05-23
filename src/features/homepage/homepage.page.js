import React from "react"
import HousesCard from "./components/houses.card.component"

export default function HomePage() {
  return (
    <div
      className='container is-fluid is-max-desktop'
      style={{ marginLeft: "1.5rem" }}
    >
      <div className='is-flex is-flex-wrap-wrap is-justify-content-space-center columns'>
        <HousesCard house='Gryffindor' />
        <HousesCard house='Hufflepuff' />
        <HousesCard house='Ravenclaw' />
        <HousesCard house='Slytherin' />
      </div>
    </div>
  )
}
