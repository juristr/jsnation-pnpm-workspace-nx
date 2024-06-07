import { ProductList } from '@awesomecards/products';
import React from 'react';

export default function Home() {
  const products = Array.from({ length: 10 }, (_, index) => ({
    url: `/products/${index}`,
    title: `Product ${index}`,
    description: `This is the description for product ${index}`,
  }));

  return (
    <main className="flex flex-col items-center justify-between min-h-screen p-24">
      <ProductList products={products} />
    </main>
  );
}
