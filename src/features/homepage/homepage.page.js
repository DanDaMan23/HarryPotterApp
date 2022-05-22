import React from "react"

export default function HomePage() {
  return (
    <div className='container is-fluid'>
      <div className='columns'>
        <div className='column is-half'>
          <figure className='image is-128x128'>
            <img
              src={require("../../assets/pictures/gryffindor.png")}
              alt='Gryffindor'
            />
          </figure>
        </div>
        <div className='column is-half'>
          <figure className='image is-128x128'>
            <img
              src={require("../../assets/pictures/hufflepuff.png")}
              alt='Gryffindor'
            />
          </figure>
        </div>
      </div>
      <div className='columns'>
        <div className='column is-half'>
          <figure className='image is-128x128'>
            <img
              src={require("../../assets/pictures/ravenclaw.png")}
              alt='Gryffindor'
            />
          </figure>
        </div>
        <div className='column is-half'>
          <figure className='image is-128x128'>
            <img
              src={require("../../assets/pictures/slytherin.png")}
              alt='Gryffindor'
            />
          </figure>
        </div>
      </div>
    </div>
  )
}
