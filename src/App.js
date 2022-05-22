// import { useContext } from "react"
import HomepageRoutes from "./features/homepage/homepage.routes"
// import HouseContext from "./features/houses/house.context"
// import useAxios from "./helpers/use-axios"

export default function App() {
  // const { get } = useAxios()

  // async function x() {
  //   console.log(
  //     await get("http://hp-api.herokuapp.com/api/characters/stussdents")
  //   )
  // }

  // x()

  // console.log(house)

  return (
    <div className='App'>
      <div className='box'>Harry Potter App</div>
      <HomepageRoutes />
    </div>
  )
}
