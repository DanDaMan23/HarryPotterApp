import HomepageRoutes from "./features/homepage/homepage.routes"

import './App.css'

export default function App() {
  return (
    <div className='App'>
      <div className='box is-flex is-justify-content-center'>
        <figure className='resize'>
          <img
            src={require("./assets/pictures/HarryPotterLogo.png")}
            alt='Harry Potter Logo'
          />
        </figure>
      </div>
      <HomepageRoutes />
    </div>
  )
}
