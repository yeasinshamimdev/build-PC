import RootLayout from "@/components/Layouts/RootLayout"
import HeroSection from "@/components/UI/Hero"
import Head from "next/head"


export default function Home() {
  return (
    <div>
      <Head>
        <title>{`Shamim's`} Tech </title>
        <meta property="og:title" content="Shamim's tech" key="tech" />
      </Head>
      <div>
        <HeroSection />
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