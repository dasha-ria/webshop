import { useShoppingCart } from "@/context/ShoppingCartContext";

export const ShoppingCart = ({ clothing }) => {
  const { closeCart, cartItems, removeFromCart } = useShoppingCart();

  console.log(cartItems);
  return (
    <div className="flex justify-end pr-10">
      <div className="flex flex-row gap-40 mt-5 items-center justify-center">
        <p>Cart</p>
        <button onClick={closeCart}>
          <img className="w-6 h-6" src="close.svg"></img>
        </button>
      </div>
      <div>
        {cartItems.map((item) => {
          const clothingData = clothing.find((data) => data.id === item.id);
          return (
            <div key={item.id} {...item}>
              <p>{clothingData.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
