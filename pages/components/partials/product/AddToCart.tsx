import { useDispatch } from "react-redux";
import { addToCart } from "../../../../src/features/cart/cartSlice";
import { createFinalProduct } from "../../../../src/lib/productUtils";

export default function AddToCart({ product, hasPrime }) {
  const dispatch = useDispatch();

  const quantity = 1;
  const totalPrice = quantity * product.price;

  function handleAddToCart() {
    const finProduct = createFinalProduct(
      product,
      hasPrime,
      quantity,
      totalPrice
    );
    dispatch(addToCart(finProduct));
  }

  return (
    <button onClick={handleAddToCart} className="mt-auto button">
      Add to cart
    </button>
  );
}
