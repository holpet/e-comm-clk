import Product from "./partials/product/Product";
import { IProduct } from "../../src/lib/interfaces";

interface Props {
  products: [IProduct];
  loading: boolean;
}

export default function ProductFeed({ products, loading }: Props) {
  return (
    <>
      <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 z-10 xl:grid-cols-4 mx-auto mt-3">
        {products?.map((product: IProduct) => (
          <Product
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
            rating={product.rating}
            loading={loading}
            full={false}
          />
        ))}
      </div>
    </>
  );
}
