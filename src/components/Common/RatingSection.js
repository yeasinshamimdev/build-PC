
const RatingSection = () => {
  return (
    <div className="rating rating-2xl rating-half flex items-center mb-1">
      <input type="radio" name="rating-10" className="rating-hidden" />
      <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-3" />
      <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-3" />
      <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-3"  />
      <input type="radio" name="rating-10" className="bg-orange-400 mask mask-star-2 mask-half-3" />
      <input type="radio" name="rating-10" className={`bg-orange-400 mask mask-star-2 mask-half-3`} />
    </div>
  )
}

export default RatingSection