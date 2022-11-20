//functions
import Product from "./partials/product/Product";

// ts
import { ProductI } from "../../src/lib/interfaces";

export default function ProductFeed({ products }) {
  return (
    <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 z-10 xl:grid-cols-4 mx-auto mt-3">
      {products?.map((product: ProductI) => (
        <Product
          key={product.id}
          id={product.id}
          title={product.title}
          price={product.price}
          description={product.description}
          category={product.category}
          image={product.image}
          rating={product.rating}
        />
      ))}
    </div>
  );
}
