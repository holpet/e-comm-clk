import Banner from "../components/Banner";
import HeaderAdvert from "../components/HeaderAdvert";
import { useRouter } from "next/router";
import Separator from "../components/partials/ui/Separator";
import CategoryLinker from "../components/partials/category/CategoryLinker";

export default function CategoryPage({ data }) {
  const router = useRouter();
  return (
    <>
      <HeaderAdvert />
      <Banner category={false} />
      <Separator size={2} />
      <CategoryLinker />
    </>
  );
}
