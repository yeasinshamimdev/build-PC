import AddCard from "@/components/Common/AddCard"
import ArrowLeftLong from "@/components/Icon/ArrowLeftLong"
import { Col, Row } from "antd"
import Head from "next/head"
import Link from "next/link"

const ChooseMouse = ({products}) => {
  return (
    <div>
      <Head>
        <title>Add Mouse</title>
      </Head>
      <div className="p-4 lg:p-0">
        <h2 className="text-2xl lg:text-4xl mb-4 mt-16 font-semibold text-gray-900 text-center">Add Mouse</h2>
        <p className="text-gray-500 text-center ">Choose your favorite Mouse</p>
        <div className="lg:max-w-[1200px] mx-auto py-10 lg:py-16 ">
          <Link href={"/pc-builder"} passHref className="mb-3 w-[30px] h-[30px] cursor-pointer border border-slate-400 shadow-md text-gray-600 flex items-center rounded-md">
              <ArrowLeftLong size={24} />
            </Link>
          <Row className="">
              {products?.map(product => (
                <Col key={product._id} className="gutter-row w-full "  >
                  <AddCard product={product} />
                </Col>
              ))}
          </Row>
          <div className="bg-slate-200 h-[2px]"></div>
        </div>
      </div>
    </div>
  )
}

export default ChooseMouse;

export const getServerSideProps = async() => {
  const res = await fetch("https://build-pc-backend.vercel.app/mouse")
  const data = await res.json()
  
  return {
    props: {
      products: data.data
    }
  }
}