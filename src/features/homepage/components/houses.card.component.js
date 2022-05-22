import React from "react"
import PropTypes from "prop-types"

import "./house.card.css"

export default function HousesCard({ house }) {
  return (
    <div className='column is-half'>
      <button className='button card-button'>
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
