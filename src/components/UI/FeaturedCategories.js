import processorIcon from '@/assets/img/cpuIcon.png';
import gpuIcon from '@/assets/img/gpuIcon.png';
import keyboardIcon from '@/assets/img/keyboardIcon.png';
import monitorIcon from '@/assets/img/monitorIcon.png';
import motherboardIcon from '@/assets/img/motherboardIcon.png';
import mouseIcon from '@/assets/img/mouseIcon.png';
import powerSupplyIcon from '@/assets/img/powerSupply.png';
import ramIcon from '@/assets/img/ramIcon.png';
import storageIcon from '@/assets/img/ssdIcon.png';


import Image from "next/image";
import Link from "next/link";

const FeaturedCategories = () => {
  const dynamicRoutes = [{
      id: 1,
      route: '/processor',
      img: processorIcon,
      title: "Processor"
    }, 
    {
      id: 2,
      route:'/motherboard',
      img: motherboardIcon,
      title: "Motherboard"
    }, 
    {
      id: 3,
      route:'/gpu',
      img: gpuIcon,
      title: "Graphics Card"
    }, 
    {
      id: 4,
      route:'/power-supply-unit',
      img: powerSupplyIcon,
      title: "Power Supply Unit"
    }, 
    {
      id: 5,
      route:'/keyboard',
      img: keyboardIcon,
      title: "Keyboard"
    }, 
    {
      id: 6,
      route:'/monitor',
      img: monitorIcon,
      title: "Monitor"
    }, 
    {
      id: 7,
      route:'/mouse',
      img: mouseIcon,
      title: "Mouse"
    }, 
    {
      id: 8,
      route:'/ram',
      img: ramIcon,
      title: "RAM"
    }, 
    {
      id: 9,
      route:'/storage',
      img: storageIcon,
      title: "Storage"
    }];

  return (
    <div className="p-4 lg:p-0 lg:mt-24 mb-16">
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-gray-900 text-center"> Featured Categories </h2>
      <p className="text-gray-500 text-center mb-16">These are the categories featured on the site.</p>
      <div className={"flex flex-wrap gap-8 mx-auto justify-center"}>
      {
        dynamicRoutes.map((data) => <Link key={data.id} href={data.route} className={'no-underline'}>
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
