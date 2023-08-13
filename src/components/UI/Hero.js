import Banner from '@/assets/img/banner.jpg'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-screen text-black flex justify-center gap-10">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="rounded-lg shadow-2xl lg:w-1/2 2xl:h-1/2">
            <Image src={Banner} className='w-full ' width={400} height={400} responsive alt='Hero image' />
          </div>
          <div className="flex-1">
            <h1 className="text-4xl lg:text-5xl font-bold">Build your dream PC with {`Shamim's`} Tech</h1>
            <p className="py-6 text-xl  font-mono">Leading Computer, Laptop & Gaming PC Retail & Online best Shop in Bangladesh. Build your dream PC with us. We are here to help you to build best performance PC.</p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection