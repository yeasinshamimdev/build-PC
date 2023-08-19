import RootLayout from "@/components/Layouts/RootLayout";
import { chooseBuildPC } from "@/utils/chooseBuildPC";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

const PcBuilder = () => {

  const data = chooseBuildPC;

  return (
    <div className='min-h-screen text-black mx-auto max-w-[1280px]'>
      <Head>
        <title>Build PC</title>
        <meta property="og:title" content="build my dream pc" key="build-pc"  />
      </Head>
      <div className="border border-blue-200 shadow rounded-md mt-8 lg:mt-16 px-4 lg:px-10 mb-12">
        <h1 className="text-3xl font-bold text-center mb-10">Build Your Dream PC</h1>
        {
          data.map((el, index) =>
          <div className="mb-4" key={index}>
            <div className="bg-slate-200 h-[2px] w-full"></div>
            <div className="flex justify-between items-center h-24">
              <div className="flex gap-3 md:gap-6 justify-center">
                <Image src={el.img} alt="Image" height={50} width={50} />
                <div className="">
                  <div className="flex">
                    <h2 className={`text-sm mt-2 font-bold m-0`}>{el.title}</h2>
                    <p className="text-sm m-0 mt-2 text-red-500">{el?.required && " *"}</p>
                  </div>
                  <div className="md:grid gap-6 animate-pulse mt-4 w-[150px] hidden">
                    <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                  </div>
                </div>
              </div>
              <div className="md:grid gap-6 animate-pulse w-[200px] hidden">
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
                <div className="h-2 bg-slate-300 rounded col-span-1"></div>
              </div>
              <Link href={el.redirectPath} className="btn btn-primary">Choose</Link>
            </div>
          </div>
          )
        }
        <div className="flex justify-end py-4">
          <button className="btn btn-primary disabled:text-white " disabled>Complete Build </button>
        </div>
      </div>
    </div>
  )
}

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout >
    { page}
  </RootLayout>
}