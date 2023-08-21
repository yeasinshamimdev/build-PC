import { setComponent } from "@/redux/features/buildPC/buildPCSlice";
import Image from "next/image";
import { useDispatch } from "react-redux";

const AddCard = ({product}) => {
  const dispatch = useDispatch();
  
  return (
    <div className="mb-16 md:mb-6" >
      <div className="bg-slate-200 h-[2px] w-full"></div>
      <div className="flex flex-col md:flex-row justify-between items-center md:h-40">
        <div className="flex flex-col md:flex-row items-center md:items-start  pt-6 gap-3  md:gap-6 justify-center">
          <Image src={product?.image} alt="Image" height={150} responsive="true" width={150} />
          <div className="">
            <h2 className={`lg:text-2xl text-[20px] font-normal m-0`}>{product?.productName}</h2>
            <p className="text-[14px] font-normal m-0 mt-3"><b>Category:</b> {product?.category}</p>
            <p className="text-[14px] font-normal m-0 my-1"><b>Status:</b> {product?.status}</p>
            <p className="text-[14px] font-normal m-0"><b>Rating:</b> {product?.individualRating}</p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mt-6 md:mt-0">
          <p className="text-[16px] font-medium m-0 mb-2">${product?.price}</p>
          <button onClick={() => dispatch(setComponent({ componentType: product.componentType, payload: product }))} className="btn btn-primary">Add To Builder</button>
        </div>
      </div>
    </div>
  )
}

export default AddCard;