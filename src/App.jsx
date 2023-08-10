import { Routes, Route } from 'react-router-dom'

import RatingComponent from './components/RatingComponent'
import RatingSubmitted from './components/RatingSubmitted'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<RatingComponent/>} />
      <Route path="/rating-submitted" element={<RatingSubmitted/>} />
    </Routes>
  )
}

export default App
