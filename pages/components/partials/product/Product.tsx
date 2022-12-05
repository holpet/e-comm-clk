// functions
import { isPrime } from "../../../../src/lib/productUtils";
import { useEffect, useState } from "react";

// components
import StarRating from "./StarRating";
import PrimeFree from "./prime/PrimeFree";
import PrimeDeli from "./prime/PrimeDeli";
import ImgPreview from "./ImgPreview";
import Price from "./Price";
import AddToCart from "./AddToCart";
import CategoryLink from "./CategoryLink";

// ts
import { IProduct } from "../../../../src/lib/interfaces";
import TitleLink from "./TitleLink";
import Description from "./Description";

interface Props extends IProduct {
  loading: boolean;
  full: boolean;
}

export default function Product(props: Props) {
  const [hasPrime, setHasPrime] = useState(false);
  useEffect(() => {
    setHasPrime(isPrime());
  }, []);

  return (
    <div className="product">
      {/* CATEGORY */}
      <CategoryLink category={props.category} />

      {/* IMAGE */}
      <ImgPreview image={props.image} />

      {/* RATING */}
      <StarRating rating={props.rating} id={props.id} />

      {/* TITLE */}
      <TitleLink title={props.title} id={props.id} category={props.category} />

      {/* PRIME STATUS */}
      {hasPrime && <PrimeDeli />}

      {/* DESCRIPTION */}
      <Description description={props.description} full={props.full} />

      {/* PRICE */}
      <Price price={props.price} hasPrime={hasPrime} />

      {/* PRIME DELIVERY */}
      {hasPrime && <PrimeFree />}

      {/* ADD BUTTTON */}
      <AddToCart product={props} hasPrime={hasPrime} />
    </div>
  );
}
