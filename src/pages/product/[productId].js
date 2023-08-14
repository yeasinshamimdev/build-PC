import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

const ProductDetailsPage = ({product}) => {
  return (
    <div>
      <Head>
        <title>{product?.productName}</title>
        <meta name="description" content={product?.description} />
      </Head>
      <Row className={"min-h-screen"} style={{ marginTop: "60px", marginBottom: "60px", alignItems: "center" }}>
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
        <p>
          {product?.description}
        </p>
      </Col>
    </Row>
  </div>
  )
}

export default ProductDetailsPage;

export const getServerSideProps = async(context) => {
  const {params} = context;

  const res = await fetch(`https://pc-builder-assignment.onrender.com/product/${params.productId}`)
  const data = await res.json()
  
  return {
    props: {
      product: data
    }
  }
}