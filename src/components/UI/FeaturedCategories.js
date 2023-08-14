import { dynamicRoutes } from '@/utils/daynamicRoute';
import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
 
  return (
    <div className="p-4 lg:p-0 lg:mt-24 mb-16">
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-gray-900 text-center"> Featured Categories </h2>
      <p className="text-gray-500 text-center mb-16">These are the categories featured on the site.</p>
      <div className={"flex flex-wrap gap-8 mx-auto justify-center"}>
      {
        dynamicRoutes.map((data) => <Link key={data.id} href={data.route} className={'no-underline cursor-pointer'}>
          <div className="card w-64 bg-white shadow-xl cursor-pointer">
            <div className="card-body p-0 items-center text-center">
            <figure className="">
              <Image src={data.img} alt="Categories images" height={100} width={100} responsive className="rounded-xl" />
            </figure>
              <h2 className="card-title">{data.title}</h2>
            </div>
            </div>
          </Link>)
        }
      </div>
    </div>
  )
}

export default FeaturedCategories;
