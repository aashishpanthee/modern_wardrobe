import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

const StarIcon = () => (
  <svg width='16' height='16' viewBox='0 0 20 20' fill='currentColor' className='text-yellow-400 inline-block mr-1'>
    <path d='M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.561-.955L10 0l2.951 5.955 6.561.955-4.756 4.635 1.122 6.545z' />
  </svg>
);

const ProductCard = ({ product }: { product: any }) => {
  return (
    <Card className='w-full max-w-sm transition-transform hover:scale-105 hover:shadow-lg'>
      <CardHeader className='p-0 items-center'>
        <Link href={`/products/${product.slug}`}>
          <div className='relative w-full h-64 overflow-hidden rounded-t-xl bg-gray-100'>
            <Image
              src={product.images[0]}
              alt={product.name}
              fill
              style={{ objectFit: "fill" }}
              priority
              sizes='100vh'
            />
          </div>
        </Link>
      </CardHeader>
      <CardContent className='p-4 grid gap-2'>
        <div className='text-xs text-muted-foreground mb-1'>{product.brand}</div>
        <Link href={`/products/${product.slug}`}>
          <h2 className='font-medium text-base line-clamp-1 hover:text-primary transition-colors'>{product.name}</h2>
        </Link>
        <div className='flex items-center gap-2 text-sm mt-1'>
          <span className='flex items-center'>
            <StarIcon />
            {product.rating}
          </span>
          <span className='ml-auto text-xs text-muted-foreground'>{product.stock > 0 ? "" : "Out of Stock"}</span>
        </div>
      </CardContent>
      <CardFooter className='flex items-center justify-between px-4 pb-4 pt-2'>
        <span className='font-bold text-lg text-primary'>${Number(product.price).toFixed(2)}</span>
        <Button size='sm' disabled={product.stock <= 0} variant='default' className='rounded-full px-4'>
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
