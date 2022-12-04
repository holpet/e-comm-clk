import { fetchOneProductById } from "../../../../src/fetchers/products";
import Banner from "../../../components/Banner";
import Product from "../../../components/partials/product/Product";
import Separator from "../../../components/partials/ui/Separator";
import SeparatorInv from "../../../components/partials/ui/SeparatorInv";

function IndividualProductPage({ data }) {
  return (
    <>
      <SeparatorInv size={2} />
      <Banner category={true} />
      <Separator size={2} />
      <Product
        key={data.id}
        id={data.id}
        title={data.title}
        price={data.price}
        description={data.description}
        category={data.category}
        image={data.image}
        rating={data.rating}
        loading={false}
        full={true}
      />
    </>
  );
}

function getProductId(productPath: string) {
  const array = productPath.split("-");
  const idFromPath = array[array.length - 1].replace("d", "");
  return idFromPath;
}

export async function getServerSideProps(context) {
  const id = getProductId(context.query.product);
  let data = await fetchOneProductById(id);
  return {
    props: { data },
  };
}

export default IndividualProductPage;
