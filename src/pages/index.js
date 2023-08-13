import FeaturedCategories from "@/components/UI/FeaturedCategories"
import HeroSection from "@/components/UI/Hero"
import { Skeleton } from "antd"
import dynamic from "next/dynamic"
import Head from "next/head"

export default function Home({products}) {
  const DynamicFeaturedProducts = dynamic(() => import('@/components/UI/FeaturedProducts'), {
    loading: () => <Skeleton avatar active></Skeleton> ,
    ssr: false
  })

  return (
    <div className={'font-sans'}>
      <Head>
        <title>{`Shamim's`} Tech </title>
        <meta property="og:title" content="Shamim's tech" key="tech" />
      </Head>
      <div className="lg:px-10">
        <HeroSection />
        <DynamicFeaturedProducts products={products} />
        <FeaturedCategories/>
      </div>
    </div>
  )
}


export const getServerSideProps = async() => {
  const res = await fetch("https://pc-builder-assignment.onrender.com/products")
  const data = await res.json()
  
  return {
    props: {
      products: data.data
    }
  }
}