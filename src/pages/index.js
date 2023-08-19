import Loader from "@/components/Common/Loader";
import FeaturedCategories from "@/components/UI/FeaturedCategories";
import FeaturedProducts from "@/components/UI/FeaturedProducts";
import HeroSection from "@/components/UI/Hero";
import Head from "next/head";

export default function Home({products, isFallback}) {
  if (isFallback) {
    return (
      <div className={"min-h-screen"}>
        <Loader />
      </div>
    );
  }

  return (
    <div className={'font-sans'}>
      <Head>
        <title>Shamim Tech </title>
        <meta property="og:title" content="Shamim's tech" key="tech" />
      </Head>
      <div className="lg:px-10">
        <HeroSection />
        <FeaturedProducts products={products} />
        <FeaturedCategories />
      </div>
    </div>
  )
}


export const getServerSideProps = async() => {
  const res = await fetch("https://build-pc-backend.vercel.app/products")
  const data = await res.json()
  
  return {
    props: {
      products: data.data
    }
  }
}