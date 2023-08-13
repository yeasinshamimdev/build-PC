import { Col, Row } from "antd";
import ProductCard from "../Common/ProductCard";

const FeaturedProducts = ({products}) => {

  return (
    <div className="p-4 lg:p-0">
      <h2 className="text-2xl lg:text-4xl mb-4 font-semibold text-gray-900 text-center">Featured Products</h2>
      <p className="text-gray-500 text-center mb-16">These are the products that are featured on the site.</p>
      <Row
        gutter={[48, 48]}>
          {products?.map(product => (
            <Col key={product.id} className="gutter-row" xs={24} sm={16} md={12} lg={8} xl={6} xxl={4} >
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
    </div>
  )
}

export default FeaturedProducts;
