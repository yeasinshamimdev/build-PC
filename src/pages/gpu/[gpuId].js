import Head from "next/head"

const GpuPage = () => {
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>Single gup</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1>This is Gpu ID page</h1>
    </div>
  )
}

export default GpuPage