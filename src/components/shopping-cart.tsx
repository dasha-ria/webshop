import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Price, PriceWithoutOriginalPrice } from "@/components/price";
import { getPrice } from "@/utils/getPrice";

export const ShoppingCart = ({ clothing }) => {
  const { closeCart, cartItems, removeFromCart } = useShoppingCart();

  console.log(cartItems);
  return (
    <div className="flex flex-col justify-end pr-10 gap-4">
      <div className="flex flex-row gap-40 mt-5 items-center justify-center">
        <p>Cart</p>
        <button onClick={closeCart}>
          <img className="w-6 h-6" src="close.svg"></img>
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-5 items-center justify-center">
        {cartItems.map((item) => {
          const clothingData = clothing.find((data) => data.id === item.id);
          return (
            <div className="flex flex-row gap-14" key={item.id} {...item}>
              <div className="flex flex-row gap-4">
                <div>
                  <img
                    className="w-20 h-20 object-cover rounded-md"
                    src={clothingData.url}
                  ></img>
                </div>
                <div>
                  <p>{clothingData.name}</p>
                  <PriceWithoutOriginalPrice
                    price={clothingData.price}
                    discount={clothingData.discount}
                  ></PriceWithoutOriginalPrice>
                </div>
              </div>
              <div>
                $
                <span>
                  {getPrice(clothingData.price, clothingData.discount) *
                    item.quantity}
                </span>
              </div>
              <div
                className="cursor-pointer"
                onClick={() => removeFromCart(item.id)}
              >
                <img className="w-5 h-5" src="trash.svg"></img>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
