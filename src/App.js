import { Route, Routes } from "react-router-dom"
import "./App.css"

function App() {
  return (
    <div className='App'>
      <div className='box'>Harry Potter App</div>
      <Routes>
        <Route path='' element={<div>Home Page</div>} />
        <Route path='Gryffindor' element={<div>Gryffindor</div>} />
        <Route path='Hufflepuff' element={<div>Hufflepuff</div>} />
        <Route path='Ravenclaw' element={<div>Ravenclaw</div>} />
        <Route path='Slytherin' element={<div>Slytherin</div>} />
      </Routes>
    </div>
  )
}

export default App
