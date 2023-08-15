import Head from 'next/head';

const SinglePowerSupplyPage = () => {
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>Single Power Supply</title>
      </Head>
      <h1 >SinglePowerSupplyPage</h1>
    </div>
  )
}

export default SinglePowerSupplyPage;

export const getServerSideProps = async(context) => {
  const {params} = context;

  const res = await fetch(`https://pc-builder-assignment.onrender.com/power-supply-unit/${params.powerSupplyId}`)
  const data = await res.json()
  
  return {
    props: {
      product: data
    }
  }
}
