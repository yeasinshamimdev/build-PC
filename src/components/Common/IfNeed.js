
export default function IfNeed() {
  return (
    {/* <div className="mb-4" >
            <div className="flex justify-between items-center h-32">
              <div className="flex gap-3 md:gap-6 justify-center">
                <Image src={processorData ? processorData?.image : data[0].image } 
                alt="Image" 
                height={120} width={120} />
                <div className="">
                  <div className="flex">
                    <h2 className={`text-sm mt-2 font-bold m-0`}>{data[0].title}</h2>
                    <p className="text-sm m-0 mt-2 text-red-500">{data[0]?.required && " *"}</p>
                  </div>
                  {
                    processorData ? <>
                    <h2 className={`text-xl mt-2 font-normal m-0`}>{processorData?.productName}</h2>
                    <p className="m-0 text-sm mt-1"><b>Category:</b> {processorData?.category}</p>
                    <p className="m-0 text-sm mt-1"><b>Brand:</b> {processorData?.keyFeatures?.brand}</p>
                    </>
                    :
                    <div className="md:grid gap-6 animate-pulse mt-4 w-[150px] hidden">
                      <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                    </div>
                  }
                </div>
              </div>
              {
                processorData ? <h2 className={`text-sm mt-2 font-bold m-0`}>${processorData?.price}</h2>
                :
                <div className="md:grid gap-6 animate-pulse w-[200px] hidden">
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                </div>
              }
              {
                processorData ? <div className="flex gap-4 ">
                  <span className="text-red-500 cursor-pointer" 
                  onClick={() => dispatch(removeComponent("processor"))}
                  >
                    <XClose size={18} />
                  </span>
                  <Link href={data[0].redirectPath} className="cursor-pointer text-blue-500"><Rotate size={18}/></Link>
                </div>
                :
                <Link href={data[0].redirectPath} className="btn btn-primary">Choose</Link>
              }
            </div>
            <div className="bg-slate-200 h-[2px] mt-3 w-full"></div>
          </div> */}
  )
}
