import SeparatorInv from "../ui/SeparatorInv";
import { useSelector } from "react-redux";
import Router from "next/router";
import {
  selectItems,
  selectTotalPrice,
} from "../../../../src/features/cart/cartSlice";
import { FinProductI } from "../../../../src/lib/interfaces";

import Quantity from "./Quantity";
import CheckoutLogo from "./CheckoutLogo";
import TotalPrice from "./TotalPrice";

export default function Checkout() {
  const cart = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice).toFixed(2);

  return (
    <div className="md:mx-20 sm:mx-12 mx-6 sm:my-14 my-8">
      <div className="border-mainWhiteGray border-t-2 shadow-lg rounded-3xl flex flex-col m-5 bg-white p-5 md:p-7 lg:p-8">
        {/* CART ICON */}
        <CheckoutLogo />

        {/* EMPTY CART */}
        {cart.length === 0 && (
          <div className="text-mainDarkGray">
            <p className="my-5 text-xl font-bold">Cart is empty.</p>
            <p
              className="button inline-flex p-3"
              onClick={() => Router.push("/")}
            >
              Continue shopping?
            </p>
          </div>
        )}

        {/* SELECTED ITEMS */}
        {cart.length > 0 &&
          cart.map((item: FinProductI) => (
            <div
              key={item.id}
              className="flex justify-between my-5 text-mainBlackGray text-xs md:text-base sm:text-sm"
            >
              <p className="hover:cursor-pointer hover:text-mainGray hover:underline">
                {item.title}
              </p>
              <Quantity item={item} />
            </div>
          ))}

        {cart.length > 0 && (
          <>
            <SeparatorInv size={1} />
            {/* TOTAL PRICE */}
            <TotalPrice totalPrice={totalPrice} />
            {/* CONTINUE */}
            <button className="button">CONTINUE</button>
          </>
        )}
      </div>
    </div>
  );
}
