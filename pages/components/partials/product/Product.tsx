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
import Loading from "../ui/Loading";

// ts
import { IProductLoad } from "../../../../src/lib/interfaces";

export default function Product(props: IProductLoad) {
  const [hasPrime, setHasPrime] = useState(false);
  useEffect(() => {
    setHasPrime(isPrime());
  }, []);

  return (
    <div className="product">
      {props.loading && <Loading fullScreen={false} />}

      {/* CATEGORY */}
      <CategoryLink category={props.category} />

      {/* IMAGE */}
      <ImgPreview image={props.image} />

      {/* RATING */}
      <StarRating rating={props.rating} id={props.id} />

      {/* TITLE */}
      <h4 className="mainLink font-semibold text-lg">{props.title}</h4>

      {/* PRIME STATUS */}
      {hasPrime && <PrimeDeli />}

      {/* DESCRIPTION */}
      <p className="line-clamp-3 text-xs my-2">{props.description}</p>

      {/* PRICE */}
      <Price price={props.price} hasPrime={hasPrime} />

      {/* PRIME DELIVERY */}
      {hasPrime && <PrimeFree />}

      {/* ADD BUTTTON */}
      <AddToCart product={props} hasPrime={hasPrime} />
    </div>
  );
}
