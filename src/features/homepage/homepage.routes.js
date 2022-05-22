import { Route, Routes } from "react-router-dom"
import HomePage from "./homepage.page"

export default function HomepageRoutes() {
  return (
    <Routes>
      <Route path='' element={<HomePage />} />
      <Route path='Gryffindor' element={<div>Gryffindor</div>} />
      <Route path='Hufflepuff' element={<div>Hufflepuff</div>} />
      <Route path='Ravenclaw' element={<div>Ravenclaw</div>} />
      <Route path='Slytherin' element={<div>Slytherin</div>} />
    </Routes>
  )
}
