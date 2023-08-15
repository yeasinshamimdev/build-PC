
const DetailsTop = ({product}) => {
  return (
    <>
    <h1 className="text-xl lg:text-3xl mt-8 lg:mt-0">{product?.productName}</h1>
    <div className="text-sm lg:text-xl mt-4 lg:mt-0 flex flex-wrap">
      <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Price: <b>${product?.price}</b></p>
      <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Status: <b>{product?.status}</b></p>
      <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Category: <b>{product?.category}</b></p>
      <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Brand: <b>{product?.keyFeatures?.brand}</b></p>
    </div>
    </>
  )
}

export default DetailsTop;
