import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Price, PriceWithoutOriginalPrice } from "@/components/price";
import { getPrice } from "@/utils/getPrice";

export const ShoppingCart = ({ clothing }) => {
  const { closeCart, cartItems, removeFromCart } = useShoppingCart();

  console.log(cartItems);
  return (
    <div className="flex flex-col justify-end p-4 gap-4 absolute top-24 right-10 border border-black bg-white shadow-md rounded-md w-96">
      <div className="flex justify-end">
        <button onClick={closeCart}>
          <img className="w-6 h-6" src="close.svg"></img>
        </button>
      </div>
      <div className="flex flex-col gap-3 mt-5 items-center justify-center">
        {cartItems.length === 0 ? (
          <p className="mb-8">Your cart is empty</p>
        ) : (
          cartItems.map((item) => {
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
                <div className="w-8">
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
          })
        )}
      </div>
    </div>
  );
};
