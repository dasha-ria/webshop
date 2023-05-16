import { useShoppingCart } from "@/context/ShoppingCartContext";

export const AddToCartButton = ({ id }) => {
  const { increaseCartQuantity } = useShoppingCart();
  return (
    <button
      onClick={() => increaseCartQuantity(id)}
      className="p-2 border border-black border-1"
    >
      add to cart
    </button>
  );
};

export const ChangeAmount = ({ quantity, id }) => {
  const { increaseCartQuantity, decreaseCartQuantity, removeFromCart } =
    useShoppingCart();
  return (
    <div>
      <div
        className="flex gap-2 p-2
      "
      >
        <button onClick={() => decreaseCartQuantity(id)}>-</button>
        <p>{quantity}</p>
        <button onClick={() => increaseCartQuantity(id)}>+</button>
      </div>
      <div>
        <button
          onClick={() => removeFromCart(id)}
          className="bg-red-500 hover:bg-red-400 text-white p-2 "
        >
          Remove
        </button>
      </div>
    </div>
  );
};
