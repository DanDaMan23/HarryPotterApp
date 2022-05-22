import React from "react"
import PropTypes from "prop-types"

export default function MemberCard({ member }) {
  return (
    <div className='card'>
      <div className='card-image'>
        <figure className='image is-4by3'>
          <img src={member.image} alt={member.name} />
        </figure>
      </div>
      <div className='card-content'>
        <div className='media'>
          <div className='media-content'>
            <p className='title is-4'>{member.name}</p>
            <p className='subtitle is-6'>Actor: {member.actor}</p>
            <p className='subtitle is-6'>Ancestry: {member.ancestry}</p>
          </div>
        </div>
        <div className='content'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec
          iaculis mauris.
        </div>
      </div>
    </div>
  )
}

MemberCard.propTypes = {
  member: PropTypes.shape({})
}
