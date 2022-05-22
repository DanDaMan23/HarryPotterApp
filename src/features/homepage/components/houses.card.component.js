import React from "react"
import PropTypes from "prop-types"

export default function HousesCard({ house }) {
  return (
    <div className='column is-half'>
      <figure className='image is-128x128'>
        <img src={require(`../../../assets/pictures/${house.toLowerCase()}.png`)} alt={house} />
      </figure>
    </div>
  )
}

HousesCard.propTypes = {
  house: PropTypes.string.isRequired
}
