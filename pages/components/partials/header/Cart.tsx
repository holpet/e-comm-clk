import { useState, useEffect } from "react";
import { selectTotalItems } from "../../../../src/features/cart/cartSlice";
import { useSelector } from "react-redux";
import Router from "next/router";

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

export default function Cart() {
  const selNum = useSelector(selectTotalItems);
  const [cartItems, setCartItems] = useState(selNum);

  useEffect(() => {
    setCartItems(selNum);
  }, [selNum]);

  function handleOnClick() {
    Router.push("/checkout");
  }

  return (
    <div className="relative cursor-pointer" onClick={handleOnClick}>
      <FontAwesomeIcon
        className="secondaryLink cartIcon"
        icon={faCartShopping}
        size="lg"
      />
      {cartItems > 0 && (
        <div className="cartCircle">
          <FontAwesomeIcon
            className="absolute top-3 left-[14px] text-blue"
            icon={faCircle}
            size="lg"
            beat
          />
          <span
            className={`absolute top-3 ${
              cartItems > 9 ? "left-[16px]" : "left-[21px]"
            } text-white text-sm font-bold`}
          >
            {cartItems}
          </span>
        </div>
      )}
    </div>
  );
}
