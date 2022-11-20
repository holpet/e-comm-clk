import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
} from "../../../../src/features/cart/cartSlice";

// Icons
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlus, faCircleMinus } from "@fortawesome/free-solid-svg-icons";

export default function Quantity({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="inline-grid md:ml-6 ml-4 grid-cols-2 sm:gap-3 lg:gap-6 gap-2 flex-grow-0 flex-shrink-0 xl:basis-64 lg:basis-56 md:basis-52 sm:basis-48 basis-36">
      <div className="font-bold">
        <span className="mr-5 sm:text-lg text-sm">{item.quantity}</span>
        {/* ADD ITEMS */}
        <FontAwesomeIcon
          onClick={() => {
            dispatch(addToCart(item));
          }}
          className="text-mainBrown hover:text-mainLighterBrown hover:cursor-pointer"
          icon={faCirclePlus}
          size="lg"
        />{" "}
        {/* REMOVE ITEMS */}
        <FontAwesomeIcon
          onClick={() => {
            dispatch(removeFromCart(item));
          }}
          className="text-mainBrown hover:text-mainLighterBrown hover:cursor-pointer"
          icon={faCircleMinus}
          size="lg"
        />
      </div>
      <p className="font-bold text-right">{item.totalPrice} €</p>
    </div>
  );
}
