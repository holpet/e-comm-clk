import SeparatorInv from "../ui/SeparatorInv";
import { useSelector } from "react-redux";
import {
  selectItems,
  selectTotalPrice,
} from "../../../../src/features/cart/cartSlice";
import { FinProductI } from "../../../../src/lib/interfaces";

import Quantity from "./Quantity";
import CheckoutLogo from "./CheckoutLogo";

export default function Checkout() {
  const cart = useSelector(selectItems);
  const totalPrice = useSelector(selectTotalPrice).toFixed(2);

  return (
    <div className="md:mx-20 sm:mx-12 mx-6 sm:my-14 my-8">
      <div className="border-mainWhiteGray border-t-2 shadow-lg rounded-3xl flex flex-col m-5 bg-white p-5 md:p-7 lg:p-8">
        {/* CART ICON */}
        <CheckoutLogo />

        {/* SELECTED ITEMS */}
        {cart.length === 0 && <p>Cart is empty.</p>}

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

        <SeparatorInv size={1} />

        {/* TOTAL PRICE */}
        <div className="flex justify-between items-center mt-5 text-mainBlackGray text-xs md:text-base sm:text-sm">
          <p className="md:mr-32 mr-16 text-xs">(price without VAT)</p>
          <p className="font-bold">{((totalPrice / 100) * 80).toFixed(2)} €</p>
        </div>
        <div className="flex justify-between items-center my-5 text-mainBlackGray text-xs md:text-base sm:text-sm">
          <p className="md:mr-32 mr-16 font-semibold">TOTAL PRICE:</p>
          <p className="sm:text-2xl text-lg font-bold">{totalPrice} €</p>
        </div>

        {/* CONTINUE */}
        <button className="button">CONTINUE</button>
      </div>
    </div>
  );
}
