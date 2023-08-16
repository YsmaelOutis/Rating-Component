import { useState } from 'react'

import RatingComponent from './components/RatingComponent'
import RatingSubmitted from './components/RatingSubmitted'

import './App.css'

function App() {
  const [selectedRating, setSelectedRating] = useState(null)
  const [ratingSubmitted, setRatingSubmitted] = useState(false)

  if (!ratingSubmitted) {
    return (
      <RatingComponent setRatingSubmitted={setRatingSubmitted} selectedRating={selectedRating} setSelectedRating={setSelectedRating}/>
    )
  } else {
    return (
      <RatingSubmitted rating={selectedRating} setRatingSubmitted={setRatingSubmitted}/>
    )
  }
}

export default App
