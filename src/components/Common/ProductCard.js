import { Button, Card } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import RatingSection from './RatingSection';

const ProductCard = ({product}) => {
  const router = useRouter();
  
  return (
    <Card
      hoverable
      style={{ width: "auto" }}
      >
      <Image width={100}  height={200} responsive="true" alt="products" className="p-2 w-auto mx-auto"  src={product?.image} />
      <p className='text-[17px] mt-0 mb-4 font-bold'><b></b>{product?.productName}</p>
      <p className='text-sm mt-0 mb-2'><b>Category: </b>{product?.category}</p>
      <p className='text-sm mt-0 mb-2'><b>Price: $</b>{product?.price}</p>
      <p className='text-sm mt-0 mb-2'><b>Status: </b>{product?.status}</p>
      <div className="flex gap-0 items-center">
        <p className='text-sm my-0'><b>Rating: </b>{product?.averageRating}</p>
        <RatingSection />
      </div>
      <div className="mt-8">
        <Link href={`${router?.route === '/' ? '/product': router.route}/${product?._id}`}>
          <Button type="primary" shape="round" className={"w-full"}>More Details</Button>
        </Link>
      </div>
    </Card>
  )
}

export default ProductCard;
