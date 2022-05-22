import React from "react"
import PropTypes from "prop-types"
import { useNavigate } from "react-router-dom"

import "./house.card.css"

export default function HousesCard({ house }) {
  const navigate = useNavigate()

  return (
    <div className='column is-half'>
      <button
        className='button card-button'
        onClick={() => {
          navigate(house, { state: { name: house } })
        }}
      >
        <figure className='image is-128x128'>
          <img
            src={require(`../../../assets/pictures/${house.toLowerCase()}.png`)}
            alt={house}
          />
        </figure>
      </button>
    </div>
  )
}

HousesCard.propTypes = {
  house: PropTypes.string.isRequired
}
