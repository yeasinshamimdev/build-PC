import OthersPageCard from "@/components/Common/OthersPageCard";
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
        <div className="lg:max-w-[1200px] mx-auto py-10 lg:py-20">
          <Row
            gutter={[48, 48]}>
              {products?.products?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <ProductCard product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Processors</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.processors?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'processor'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Motherboards</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.motherboards?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'motherboard'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">RAM</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.ram?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'ram'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">graphics Card</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.gpu?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'gpu'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">keyboard</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.keyboard?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'keyboard'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Monitor</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.monitor.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'monitor'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Mouse</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.mouse?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'mouse'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Power supply</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.powerSupply?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'power-supply-unit'} product={product} />
                </Col>
              ))}
          </Row>
          <h2 className="text-2xl lg:text-3xl mt-16 font-semibold text-gray-900 text-center">Storage</h2>
          <div className="divider mb-8 lg:mb-20 "></div> 
          <Row
            gutter={[48, 48]}>
              {products?.storage?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'ssd'} product={product} />
                </Col>
              ))}
          </Row>
        </div>
      </div>
    </div>
  )
}

export default Products;

export const getStaticProps = async() => {
  const products = await fetch("https://build-pc-backend.vercel.app/products").then((res)=> res.json());
  const processors = await fetch("https://build-pc-backend.vercel.app/processor").then((res)=> res.json());
  const motherboards = await fetch("https://build-pc-backend.vercel.app/motherboard").then((res)=> res.json());
  const ram = await fetch("https://build-pc-backend.vercel.app/ram").then((res)=> res.json());
  const gpu = await fetch("https://build-pc-backend.vercel.app/gpu").then((res)=> res.json());
  const keyboard = await fetch("https://build-pc-backend.vercel.app/keyboard").then((res)=> res.json());
  const monitor = await fetch("https://build-pc-backend.vercel.app/monitor").then((res)=> res.json());
  const mouse = await fetch("https://build-pc-backend.vercel.app/mouse").then((res)=> res.json());
  const powerSupply = await fetch("https://build-pc-backend.vercel.app/power-supply-unit").then((res)=> res.json());
  const storage = await fetch("https://build-pc-backend.vercel.app/ssd").then((res)=> res.json());

  return {
    props: {
      products: {
        products: products.data,
        processors: processors.data,
        motherboards: motherboards.data,
        ram: ram.data,
        gpu: gpu.data,
        keyboard: keyboard.data,
        monitor: monitor.data,
        mouse: mouse.data,
        powerSupply: powerSupply.data,
        storage: storage.data
      }
    }
  }
}