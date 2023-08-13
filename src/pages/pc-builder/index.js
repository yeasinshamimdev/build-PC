import RootLayout from "@/components/Layouts/RootLayout";
import Head from "next/head";

const PcBuilder = () => {
  return (
    <div className='min-h-screen text-black'>
      <Head>
        <title>Build PC</title>
        <meta property="og:title" content="build my dream pc" key="build-pc"  />
      </Head>
      <h1>PC Builder</h1>
    </div>
  )
}

export default PcBuilder;

PcBuilder.getLayout = function getLayout(page) {
  return <RootLayout >
    { page}
  </RootLayout>
}