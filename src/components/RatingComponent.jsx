import RatingButton from './RatingButton'

import './RatingComponent.css'

const RatingComponent = ({ setRatingSubmitted, selectedRating, setSelectedRating}) => {

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
        <img src="/StarIcon.png" className='star-img' alt='Small star'/>        
      </div>
      <article>
        <h2>How did we do?</h2>
        <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
      </article>
      <div className="rating-buttons-container">
        <RatingButton selectedRating={selectedRating} setSelectedRating={setSelectedRating} rating={1} />
        <RatingButton selectedRating={selectedRating} setSelectedRating={setSelectedRating} rating={2} />
        <RatingButton selectedRating={selectedRating} setSelectedRating={setSelectedRating} rating={3} />
        <RatingButton selectedRating={selectedRating} setSelectedRating={setSelectedRating} rating={4} />
        <RatingButton selectedRating={selectedRating} setSelectedRating={setSelectedRating} rating={5} />
      </div>
      <button className="submit-button" onClick={submitRating}>
        SUBMIT
      </button>
    </div>
  )
}

export default RatingComponent