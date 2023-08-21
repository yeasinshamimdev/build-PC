import Head from "next/head";
import { useRouter } from "next/router";

export default function Complete() {
  const router = useRouter();

  setTimeout(() => {
    router.push("/")
  }, 3000);

  return (
    <>
    <Head>
      <title>Congratulation</title>
    </Head>
    <div className="md:mb-4 mb-16 lg:px-0 shadow-xl rounded-lg md:shadow-none min-h-screen" >
      <h2 className={`text-4xl font-bold m-0 text-center mt-10`}>Congratulation</h2>
      <h2 className={`text-2xl font-bold m-0 text-center mt-10`}>Your PC build has been complete!</h2>
      <div className="flex flex-col md:flex-row justify-between items-center lg:h-32 px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-3 md:gap-6 justify-center">
          {/* <Image src={value ? value?.image : data[index].image } 
          alt="Image"
          className='mx-auto'
          height={100} width={100} responsive="true" /> */}
          <div className="">
          </div>
        </div>
        <div className='md:flex gap-4 md:gap-10 lg:gap-20 items-center'>
          <h2 className={`text-sm font-bold m-0 mb-6 md:mb-0`}></h2> 
        </div>
      </div>
    </div>
    </>
  )
}
