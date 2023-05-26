import { useShoppingCart } from "@/context/ShoppingCartContext";

export const ShoppingCart = ({ cartPopup, setCartPopup, id, quantity }) => {
  const { closeCart, cartItems, removeFromCart } = useShoppingCart();
  const closeCartPopup = () => setCartPopup(false);
  console.log(cartItems);
  return (
    <div className="flex justify-end pr-10">
      <div className="flex flex-row gap-40 mt-5 items-center justify-center">
        <p>Cart</p>
        <button onClick={(closeCart, closeCartPopup)}>
          <img className="w-6 h-6" src="close.svg"></img>
        </button>
      </div>
      <div>
        {cartItems.map((item) => (
          <div key={item.id} {...item}></div>
        ))}
      </div>
    </div>
  );
};
