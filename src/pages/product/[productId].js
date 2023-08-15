import Description from "@/components/Common/Description";
import DetailsTop from "@/components/Common/DetailsTop";
import RatingSection from "@/components/Common/RatingSection";
import { Col, Row } from "antd";
import Head from "next/head";
import Image from "next/image";

const ProductDetailsPage = ({product}) => {
  
  return (
    <div className={"min-h-screen"}>
      <Head>
        <title>{product?.productName}</title>
        <meta name="description" content={product?.description} />
      </Head>
      <h1 className="text-2xl lg:text-4xl pt-8 text-center">Product Details</h1>
      <div className="divider mb-8 lg:mb-20 "></div> 
      <Row  style={{ marginTop: "60px", marginBottom: "60px" }}>
      <Col md={6} lg={12}>
        <div className={"lg:w-1/2 w-full mx-auto lg:pt-20"}>
          <Image alt="Product Details" src={product?.image} width={200} height={200} responsive="true" className={"w-full h-full pl-10 md:pl-0"} />
        </div>
      </Col>
      <Col md={6} lg={12} className="px-4" >
        <DetailsTop product={product} />
        <h4 className="mb-6 text-xl">Key Features</h4>
        <p className="text-[15px]"><b>RAM:</b> {product?.keyFeatures.RAM}</p>
        <p className="text-[15px]"><b>brand:</b> {product?.keyFeatures?.brand}</p>
        <p className="text-[15px]"><b>case:</b> {product?.keyFeatures?.case}</p>
        <p className="text-[15px]"><b>cooling:</b> {product?.keyFeatures?.cooling}</p>
        <p className="text-[15px]"><b>graphicsCard:</b> {product?.keyFeatures?.graphicsCard}</p>
        <p className="text-[15px]"><b>model:</b> {product?.keyFeatures?.model}</p>
        <p className="text-[15px]"><b>powerSupply:</b>  {product?.keyFeatures?.powerSupply}</p>
        <p className="text-[15px]"><b>processor:</b> {product?.keyFeatures?.processor}</p>
        <p className="text-[15px]"><b>specification:</b> {product?.keyFeatures?.specification}</p>
        <p className="text-[15px]"><b>storage:</b> {product?.keyFeatures?.storage}</p>
        <Description product={product} />
        <h4 className='text-xl mb-5'><b>Reviews:</b></h4>
        <div className="flex flex-wrap gap-8 justify-center lg:justify-start">
          {
            product?.reviews?.map((review, index) => <div key={index} className="card w-72 bg-base-800 shadow-xl">
            <div className="card-body p-6">
              <h2 className="card-title">{review.username}</h2>
              <div className="flex items-center">
                <p className="m-0">review: {review?.rating}</p>
                <RatingSection />
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