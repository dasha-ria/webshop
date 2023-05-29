import { useShoppingCart } from "@/context/ShoppingCartContext";
import Link from "next/link";

export const Navbar = () => {
  const { openCart, cartQuantity } = useShoppingCart();

  return (
    <div className="flex items-end">
      <Link href="/">
        <img className="w-40 h-auto ml-12 pt-8" src="studio47.svg"></img>
      </Link>

      <ul className="flex gap-4 ml-12">
        <Link href="/">
          <li className="font-bold text-lg">Home</li>
        </Link>
        <li className="font-bold text-lg underline underline-offset-4">Shop</li>
        <li className="font-bold text-lg">About</li>
      </ul>

      <div className="ml-80 relative">
        <div>
          <button
            className="h-10 w-10 rounded-full cursor-pointer border border-black border-2 flex justify-center items-center hover:bg-gray-100"
            onClick={openCart}
          >
            <img className="h-6 w-auto" src="shopping-cart.svg"></img>
          </button>
        </div>
        {cartQuantity > 0 && (
          <div className="absolute top-8 left-5 h-5 w-5 rounded-full bg-black flex justify-center items-center">
            <p className="text-white text-xs">{cartQuantity}</p>
          </div>
        )}
      </div>
    </div>
  );
};
