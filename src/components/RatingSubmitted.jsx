import arrowBack from '../assets/ArrowBack.png'

import './RatingSubmitted.css'

const RatingSubmitted = ({rating, setRatingSubmitted}) => {
  return (
    <div className='rating-submitted-container'>
        <button className="rating-back-option" onClick={() => setRatingSubmitted(false)}>
          <img src={ arrowBack } alt="" />
        </button>
        <img src="/RatingSubmittedImage.png" alt="" className='rating-submitted-image'/>
        <p className='rating-info'>You selected {rating} out of 5</p>
        <article className='rating-submitted-article'>
            <h2>Thank you!</h2>
            <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
        </article>
    </div>
  )
}

export default RatingSubmitted
