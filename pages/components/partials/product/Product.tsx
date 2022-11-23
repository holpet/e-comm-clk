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

// ts
import { ProductI } from "../../../../src/lib/interfaces";

export default function Product(props: ProductI) {
  const [hasPrime, setHasPrime] = useState(false);
  useEffect(() => {
    setHasPrime(isPrime());
  }, []);

  return (
    <div className="product hover:scale-105">
      {/* CATEGORY */}
      <p className="self-end text-xs italic text-gray-400">{props.category}</p>

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
