import RootLayout from "@/components/Layouts/RootLayout"
import FeaturedCategories from "@/components/UI/FeaturedCategories"
import FeaturedProducts from "@/components/UI/FeaturedProducts"
import HeroSection from "@/components/UI/Hero"
import Head from "next/head"

export default function Home() {
  return (
    <div className={'font-sans'}>
      <Head>
        <title>{`Shamim's`} Tech </title>
        <meta property="og:title" content="Shamim's tech" key="tech" />
      </Head>
      <div className="lg:px-10">
        <HeroSection />
        <FeaturedProducts/>
        <FeaturedCategories/>
      </div>
    </div>
  )
}



Home.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}