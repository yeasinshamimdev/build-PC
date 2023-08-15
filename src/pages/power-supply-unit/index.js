import Head from "next/head";

const PowerSupplyPage = () => {
  return (
    <div>
      <Head>
        <title>Power Supply</title>
      </Head>
      <h1 className={"min-h-screen"}>This is PowerSupply page</h1>
    </div>
  )
}

export default PowerSupplyPage;

export const getServerSideProps = async() => {
  const res = await fetch("https://pc-builder-assignment.onrender.com/power-supply-unit")
  const data = await res.json()
  
  return {
    props: {
      products: data.data
    }
  }
}