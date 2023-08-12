import Banner from '@/assets/img/banner.jpg'
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-white text-black flex justify-center gap-10">
      <div className="hero-content flex-col lg:flex-row-reverse flex-1">
        <Image src={Banner} className="rounded-lg shadow-2xl transition duration-700 ease-in-out w-1/2" width={400} height={400} responsive alt='Hero image' />
        <div className="flex-1">
          <h1 className="text-5xl font-bold">Build your dream PC with {`Shamim's`} Tech</h1>
          <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default HeroSection