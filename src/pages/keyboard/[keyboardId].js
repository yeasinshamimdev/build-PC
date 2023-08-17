import Description from "@/components/Common/Description"
import DetailsTop from "@/components/Common/DetailsTop"
import RatingSection from "@/components/Common/RatingSection"
import { Col, Row } from "antd"
import Head from "next/head"
import Image from "next/image"

const KeyboardPage = ({product}) => {
  
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>{product?.productName}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="text-2xl lg:text-4xl pt-8 text-center">keyboard Details</h1>
      <div className="divider mb-8 lg:mb-20 "></div> 
      <Row style={{ marginTop: "60px", marginBottom: "60px" }}>
        <Col md={6} lg={12}>
          <div className={"lg:w-1/2 w-full mx-auto lg:pt-20"}>
            <Image alt="Product Details" src={product?.image} width={200} height={200} responsive="true" className={"w-full h-full pl-10 md:pl-0"} />
          </div>
        </Col>
        <Col md={6} lg={12} className="px-4" >
          <DetailsTop product={product} />
          <h4 className="mb-6 text-xl">Key Features</h4>
          <p className="text-[15px]"><b>anti Ghosting:</b> {product?.keyFeatures.antiGhosting}</p>
          <p className="text-[15px]"><b>brand:</b> {product?.keyFeatures?.brand}</p>
          <p className="text-[15px]"><b>back lighting:</b> {product?.keyFeatures?.backlighting}</p>
          <p className="text-[15px]"><b>Dedicated Media Controls:</b> Yes</p>
          <p className="text-[15px]"><b>Extra Features:</b> {product?.keyFeatures?.extraFeatures}</p>
          <p className="text-[15px]"><b>interface:</b> {product?.keyFeatures?.interface}</p>
          <p className="text-[15px]"><b>switchType:</b>  {product?.keyFeatures?.switchType}</p>
          <p className="text-[15px]"><b>model:</b> {product?.keyFeatures?.model}</p>
          <p className="text-[15px]"><b>ten keyless:</b> Yes</p>
          <p className="text-[15px]"><b>warranty:</b> {product?.keyFeatures?.warranty}</p>
          <p className="text-[15px]"><b>wristRest:</b> No</p>
          <Description product={product} />
          <h4 className='text-xl mb-5'><b>Reviews:</b></h4>
          <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
            {
              product?.reviews?.map((review, index) => <div key={index} className="card w-72 bg-base-800 shadow-xl">
              <div className="card-body p-6">
                <h2 className="card-title">{review.username}</h2>
                <div className="flex items-center">
                  <p className="m-0">review: {review?.rating}</p>
                  <RatingSection/>
                </div>
                <p className="m-0">{review?.review}</p>
              </div>
            </div>
            )}
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default KeyboardPage;

export const getServerSideProps = async(context) => {
  const {params} = context;

  const res = await fetch(`https://build-pc-backend.vercel.app/keyboard/${params.keyboardId}`)
  const data = await res.json()
  
  return {
    props: {
      product: data
    }
  }
}