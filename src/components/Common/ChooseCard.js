import { removeComponent } from '@/redux/features/buildPC/buildPCSlice';
import { chooseBuildPC } from '@/utils/chooseBuildPC';
import Image from 'next/image';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import Rotate from '../Icon/Rotate';
import XClose from '../Icon/XClose';

export default function ChooseCard({value, index}) {
  const data = chooseBuildPC;
  const dispatch = useDispatch();

  return (
    <div className="md:mb-4 mb-16 lg:px-0 shadow-xl rounded-lg md:shadow-none" >
      <div className="flex flex-col md:flex-row justify-between items-center lg:h-32 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center">
          <Image src={value ? value?.image : data[index].image } 
          alt="Image"
          className='mx-auto'
          height={100} width={100} responsive="true" />
          <div className="">
            <div className="flex">
              <h2 className={`text-sm mt-2 font-bold m-0`}>{data[index].title}</h2>
              <p className="text-sm m-0 mt-2 text-red-500">{data[index]?.required && " *"}</p>
            </div>
            {
              value ? <>
              <h2 className={`text-sm md:text-xl mt-2 font-normal m-0`}>{value?.productName}</h2>
              <p className="m-0 text-xs md:text-sm mt-1"><b>Category:</b> {value?.category}</p>
              <p className="m-0 text-xs md:text-sm mt-1 mb-6"><b>Brand:</b> {value?.keyFeatures?.brand}</p>
              </>
              :
              <div className="md:grid gap-6 animate-pulse mt-4 w-[150px] hidden">
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
            }
          </div>
        </div>
        <div className='md:flex gap-4 md:gap-10 lg:gap-20 items-center'>
          {
            value ? <h2 className={`text-sm font-bold m-0 mb-6 md:mb-0`}>${value?.price}</h2>
            :
            <div className="md:grid gap-6 animate-pulse w-[200px] hidden">
              <div className="h-2 bg-slate-300 rounded col-span-1"></div>
            </div>
          }
          {
            value ? <div className="flex gap-4 mb-6 md:mb-0">
              <span className="text-red-500 cursor-pointer" 
              onClick={() => dispatch(removeComponent(value?.componentType))}
              >
                <XClose size={18} />
              </span>
              <Link href={data[index].redirectPath} className="cursor-pointer text-blue-500"><Rotate size={18}/></Link>
            </div>
            :
            <Link href={data[index].redirectPath} className="btn btn-primary my-4 md:my-0">Choose</Link>
          }
        </div>
      </div>
      <div className="bg-slate-200 md:flex hidden h-[2px] mt-3 w-full"></div>
    </div>
  )
}
