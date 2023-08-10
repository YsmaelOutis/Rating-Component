import { useState } from 'react'
import { Navigate } from 'react-router-dom'

import './RatingComponent.css'

const RatingComponent = () => {
  const [selectedRating, setSelectedRating] = useState(null)
  const [ratingSubmitted, setRatingSubmitted] = useState(false)

  function checkIsSelected(num) {
    return num === selectedRating ? 'selected' : '';
  }

  function submitRating() {
    if (selectedRating === null) {
      alert('Please select a rating')
      return
    }
    setRatingSubmitted(true)
  }

  
  return (
    <div className='rating-component'>
      <div className="star-container">
        <img src="/StarIcon.png" className='star-img'/>        
      </div>
      <article>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </article>
      <div className="rating-buttons-container">
        <button className={`rating-button ${checkIsSelected(1)}`} onClick={() => setSelectedRating(1)}>1</button>
        <button className={`rating-button ${checkIsSelected(2)}`} onClick={() => setSelectedRating(2)}>2</button>
        <button className={`rating-button ${checkIsSelected(3)}`} onClick={() => setSelectedRating(3)}>3</button>
        <button className={`rating-button ${checkIsSelected(4)}`} onClick={() => setSelectedRating(4)}>4</button>
        <button className={`rating-button ${checkIsSelected(5)}`} onClick={() => setSelectedRating(5)}>5</button>
      </div>
      <button className="submit-button" onClick={submitRating}>
        SUBMIT
        {ratingSubmitted && <Navigate to={{pathname: "/rating-submitted", search: `rating=${selectedRating}`}} />}
      </button>
    </div>
  )
}

export default RatingComponent