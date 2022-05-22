import { Route, Routes } from "react-router-dom"
import HousePage from "../houses/house.page"
import HomePage from "./homepage.page"

export default function HomepageRoutes() {
  const houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"]

  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      {houses.map((house) => (
        <Route
          key={house}
          path={house}
          element={<HousePage houseName={house} />}
        />
      ))}
    </Routes>
  )
}
