import ProductCard from "@/components/Common/ProductCard";
import { Col, Row } from "antd";
import Head from "next/head";

const Products = ({products}) => {

  return (
    <div className="min-h-screen">
      <Head>
        <title>All Products</title>
      </Head>
      <div className="p-4 lg:p-0">
        <h2 className="text-2xl lg:text-4xl mb-4 mt-16 font-semibold text-gray-900 text-center">Our all products</h2>
        <p className="text-gray-500 text-center ">Choose your favorite components parts</p>
        <div className="lg:max-w-[1200px] mx-auto py-20">
          <Row
            gutter={[48, 48]}>
              {products?.map(product => (
                <Col key={product.id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Products;

export const getServerSideProps = async() => {
  const products = await fetch("https://pc-builder-assignment.onrender.com/products").then((res)=> res.json());
  // const processors = await fetch("https://pc-builder-assignment.onrender.com/processor").then((res)=> res.json());
  // const motherboards = await fetch("https://pc-builder-assignment.onrender.com/motherboard").then((res)=> res.json());

  return {
    props: {
      products: products.data
    }
  }
}