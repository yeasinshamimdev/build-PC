import { Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';

const ProductCard = ({product}) => {
  return (
      <Card
        hoverable
        style={{ width: "auto" }}
        >
        <Image width={100}  height={200} responsive alt="products" className="p-2 w-full"  src={product?.image} />
        <p className='text-sm mt-0 mb-2'><b>Category: </b>{product?.category}</p>
        <p className='text-sm mt-0 mb-2'><b>Price: $</b>{product?.price}</p>
        <p className='text-sm mt-0 mb-2'><b>Status: </b>{product?.status}</p>
        <p className='text-sm mt-0 mb-2'><b>Rating: </b>{product?.averageRating}</p>
        <div className="mt-8">
          <Link href={`/product/${product?._id}`}>
            <Button type="primary" shape="round" className={"w-full"}>More Details</Button>
          </Link>
        </div>
      </Card>
  )
}

export default ProductCard;
