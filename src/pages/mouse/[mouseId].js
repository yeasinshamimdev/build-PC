import RatingSection from "@/components/Common/RatingSection";
import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

const MousePage = ({product}) => {
  console.log(product)
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>{product?.productName}</title>
      </Head>
      <h1 className="text-2xl lg:text-4xl pt-8 text-center">Mouse Details</h1>
      <div className="divider mb-8 lg:mb-20 "></div> 
      <Row style={{ marginTop: "60px", marginBottom: "60px" }}>
        <Col md={6} lg={12}>
          <div className={"lg:w-1/2 w-full mx-auto lg:pt-20"}>
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
          <h1 className="text-xl lg:text-3xl mt-8 lg:mt-0">{product?.productName}</h1>
          <div className="text-sm lg:text-xl mt-4 lg:mt-0 flex flex-wrap">
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Price: <b>${product?.price}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Status: <b>{product?.status}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Category: <b>{product?.category}</b></p>
            <p className="text-sm mr-2 bg-slate-200 px-3 rounded-full py-1">Brand: <b>{product?.keyFeatures?.brand}</b></p>
          </div>
          <h4 className="mb-6 text-xl">Key Features</h4> 
          <p className="text-[15px]"><b>batteryLife:</b> {product?.keyFeatures.batteryLife}</p>
          <p className="text-[15px]"><b>brand:</b> {product?.keyFeatures?.brand}</p>
          <p className="text-[15px]"><b>connectionType:</b> {product?.keyFeatures?.connectionType}</p>
          <p className="text-[15px]"><b>dpiRange:</b> {product?.keyFeatures?.dpiRange}</p>
          <p className="text-[15px]"><b>extraFeatures:</b> {product?.keyFeatures?.extraFeatures}</p>
          <p className="text-[15px]"><b>programmableButtons:</b> {product?.keyFeatures?.programmableButtons}</p>
          <p className="text-[15px]"><b>sensorType:</b>  {product?.keyFeatures?.sensorType}</p>
          <p className="text-[15px]"><b>model:</b> {product?.keyFeatures?.model}</p>
          <p className="text-[15px]"><b>warranty:</b> {product?.keyFeatures?.warranty}</p>
          <p className="text-[15px]"><b>weight:</b> {product?.keyFeatures?.weight}</p>
          <div className="my-8">
            <p className="text-[15px]"><b>Individual Rating:</b> {product?.individualRating}</p>
            <p className="text-[15px]"><b>Average Rating:</b> {product?.averageRating}</p>
          </div>
          <p className="my-8">{product?.description}</p>
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

export default MousePage;

export const getServerSideProps = async(context) => {
  const {params} = context;

  const res = await fetch(`https://pc-builder-assignment.onrender.com/mouse/${params.mouseId}`)
  const data = await res.json()
  
  return {
    props: {
      product: data
    }
  }
}