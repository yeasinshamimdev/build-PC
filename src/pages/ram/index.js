import ProductCard from "@/components/Common/ProductCard";
import { Col, Row } from "antd";
import Head from "next/head";

const RamPage = ({products}) => {
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>RAM</title>
      </Head>
      <div className="p-4 lg:p-0">
        <h2 className="text-2xl lg:text-4xl mb-4 mt-16 font-semibold text-gray-900 text-center">RAM</h2>
        <p className="text-gray-500 text-center ">Choose your favorite RAM</p>
        <div className="lg:max-w-[1200px] mx-auto py-10 lg:py-20">
          <Row
            gutter={[48, 48]}>
              {products?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default RamPage;

export const getServerSideProps = async() => {
  const res = await fetch("https://build-pc-backend.vercel.app/ram")
  const data = await res.json()
  
  return {
    props: {
      products: data.data
    }
  }
}