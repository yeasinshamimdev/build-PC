
const Description = ({product}) => {
  return (
    <>
    <div className="my-8">
      <p className="text-[15px]"><b>Individual Rating:</b> {product?.individualRating}</p>
      <p className="text-[15px]"><b>Average Rating:</b> {product?.averageRating}</p>
    </div>
    <p className="my-8">{product?.description}</p>
    </>
  )
}

export default Description;
