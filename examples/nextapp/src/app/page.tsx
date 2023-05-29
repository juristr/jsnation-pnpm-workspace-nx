import Image from 'next/image';
import { ProductList } from '@awesomecards/products';

export default function Home() {
  const products = Array.from({ length: 10 }, (_, index) => ({
    url: `/products/${index}`,
    title: `Product ${index}`,
    description: `This is the description for product ${index}`,
  }));

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <ProductList products={products} />
    </main>
  );
}
