import ProductList from "@/components/shared/product/product-list";
import sampleData from "@/db/sample-data";
const Homepage = () => {
  const { products } = sampleData;
  return (
    <div className=''>
      <ProductList data={products} title='Newest Arrivals' limit={4} />
    </div>
  );
};

export default Homepage;
