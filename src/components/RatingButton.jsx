const RatingButton = ({ selectedRating, setSelectedRating, rating }) => {

    function checkIsSelected(num) {
        return num === selectedRating ? 'selected' : '';
    }

    return (
        <button className={`rating-button ${(checkIsSelected(rating))}`} onClick={() => setSelectedRating(rating)}>{rating}</button>
    )
}

export default RatingButton