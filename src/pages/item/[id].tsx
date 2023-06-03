import Link from "next/link";
import { getPrice, showOriginal } from "@/utils/getPrice";
import { Price } from "@/components/price";
import { NavbarNonIndex } from "@/components/navbar";
import { ShoppingCart } from "@/components/shopping-cart";
import { useShoppingCart } from "@/context/ShoppingCartContext";

export default function Item({ clothing }) {
  const { getItemQuantity, isCartOpen } = useShoppingCart();
  return (
    <div className="w-screen h-screen bg-white">
      <NavbarNonIndex></NavbarNonIndex>
      {isCartOpen && <ShoppingCart clothing={clothing}></ShoppingCart>}

      <div className="ml-12 mt-12">
        <img
          className="w-96 h-96 object-cover rounded-md"
          src={clothing.url}
        ></img>
        <p>{clothing.name}</p>
        <Price price={clothing.price} discount={clothing.discount}></Price>
        <p>{`${clothing.quantity} in stock`}</p>
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  const res = await fetch("http://shop.test/api/clothing/" + params.id);
  const { clothing } = await res.json();

  return {
    props: {
      clothing,
    },
  };
}
