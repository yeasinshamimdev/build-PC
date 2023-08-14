import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

const GpuPage = ({product}) => {
console.log(product)
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>{product?.productName}</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Row style={{ marginTop: "60px", marginBottom: "60px", alignItems: "center" }}>
        <Col md={6} lg={12}>
          <div className={"lg:w-1/2 w-full mx-auto h-1/6 "}>
            <Image
              alt="Product Details"
              src={product?.image}
              width={200}
              height={200}
              responsive
              className={"w-full h-full pl-10 md:pl-0"}
              />
          </div>
        </Col>
        <Col md={6} lg={12} className="px-4" >
          <h1 className="text-xl lg:text-2xl mt-8 lg:mt-0">{product?.productName}</h1>
          <div className="text-sm lg:text-xl mt-4 lg:mt-0 flex">
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Price: <b>{product?.price}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Stock: <b>{product?.status}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Category: <b>{product?.category}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Brand: <b>{product?.keyFeatures?.brand}</b></p>
          </div>
          <p>
            {product?.description}
          </p>
        </Col>
      </Row>
    </div>
  )
}

export default GpuPage;

export const getServerSideProps = async(context) => {
  const {params} = context;

  const res = await fetch(`https://pc-builder-assignment.onrender.com/gpu/${params.gpuId}`)
  const data = await res.json()
  
  return {
    props: {
      product: data
    }
  }
}