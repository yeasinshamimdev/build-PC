import OthersPageCard from "@/components/Common/OthersPageCard";
import { Col, Row } from "antd";
import Head from "next/head";

const OthersPage = ({products}) => {
  console.log(products);
  const {mouseData, keyboardData, gpuData} = products;

  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>Others</title>
      </Head>
      <div className="p-4 lg:p-0">
        <h2 className="text-2xl lg:text-4xl mb-4 mt-16 font-semibold text-gray-900 text-center">Others Components</h2>
        <p className="text-gray-500 text-center ">You may like the others components of us.</p>
        <div className="lg:max-w-[1200px] mx-auto">
          <h2 className="text-2xl lg:text-3xl my-16 font-semibold text-gray-900 text-center">Graphics Cards</h2>
          <Row
            gutter={[48, 48]}>
              {gpuData?.map(product => (
                <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                  <OthersPageCard title={'gpu'} product={product} />
                </Col>
              ))}
          </Row>
            <h2 className="text-2xl lg:text-3xl my-16 font-semibold text-gray-900 text-center">Mouse</h2>
            <Row
              gutter={[48, 48]}>
                {mouseData?.map(product => (
                  <Col key={product._id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={8} >
                    <OthersPageCard title={'mouse'} product={product} />
                  </Col>
                ))}
            </Row>
            <h2 className="text-2xl lg:text-3xl my-16 font-semibold text-gray-900 text-center">Keyboard</h2>
            <Row
              gutter={[48, 48]}>
                {keyboardData?.map(product => (
                  <Col key={product._id} className="gutter-row mb-20" xs={24} sm={16} md={12} lg={8} xl={8} >
                    <OthersPageCard title={'keyboard'} product={product} />
                  </Col>
                ))}
            </Row>
        </div>
      </div>
    </div>
  )
}

export default OthersPage;

export const getServerSideProps = async() => {
  const mouseData = await fetch("https://build-pc-backend.vercel.app/mouse").then((res) => res.json());
  const keyboardData = await fetch("https://build-pc-backend.vercel.app/keyboard").then((res) => res.json());
  const gpuData = await fetch("https://build-pc-backend.vercel.app/gpu").then((res) => res.json());
  
  
  return {
    props: {
      products: {
        mouseData: mouseData.data,
        keyboardData: keyboardData.data,
        gpuData: gpuData.data
      }
    }
  }
}