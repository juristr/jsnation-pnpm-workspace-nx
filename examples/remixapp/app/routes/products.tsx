import { ProductList } from '@awesomecards/products';
import { json, type V2_MetaFunction } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';

export const loader = async () => {
  const products = Array.from({ length: 10 }, (_, index) => ({
    url: `/products/${index}`,
    title: `Product ${index}`,
    description: `This is the description for product ${index}`,
  }));

  return json({ products });
};

export const meta: V2_MetaFunction = () => {
  return [
    { title: 'New Remix App' },
    { name: 'description', content: 'Welcome to Remix!' },
  ];
};

export default function Products() {
  const data = useLoaderData<typeof loader>();

  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-2xl font-bold">Product List</h1>
        <ProductList products={data.products} />
      </div>
    </div>
  );
}
