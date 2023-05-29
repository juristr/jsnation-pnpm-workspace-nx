import { SimpleCard } from '@awesomecards/ui';

export const ProductList = ({ products }: { products: any }) => {
  return (
    <div className="grid grid-cols-3 gap-4">
      {products.map((product: any, index: number) => (
        <SimpleCard
          key={index}
          url={product.url}
          title={product.title}
          text={product.description}
        />
      ))}
    </div>
  );
};

export default ProductList;
