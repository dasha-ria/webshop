import Link from "next/link";
import { useState } from "react";
import { Clothing } from "../mocks/types";
import { Price } from "@/components/price";
import { AddToCartButton, ChangeAmount } from "@/components/cart-button";
import { useShoppingCart } from "@/context/ShoppingCartContext";
import { Navbar } from "@/components/navbar";
import { ShoppingCart } from "@/components/shopping-cart";

type Props = {
  clothing: Clothing[];
};

export default function Home({ clothing }: Props) {
  const { getItemQuantity } = useShoppingCart();
  const [showCart, setShowCart] = useState(false);

  return (
    <div className="w-full h-full bg-white text-black">
      <Navbar showCart={showCart} setShowCart={setShowCart}>
        {showCart && <ShoppingCart />}
      </Navbar>
      <div>
        <div className="flex gap-12 flex-wrap pt-12 pb-8 ml-12 w-full">
          {clothing.map((c) => (
            <div key={c.id}>
              <Link href={`/item/${c.id}`}>
                <div>
                  <img
                    className="w-56 h-56 object-cover rounded-md"
                    src={c.url}
                  ></img>
                  <p>{c.name}</p>
                  <Price price={c.price} discount={c.discount}></Price>
                </div>
              </Link>
              <div>
                {getItemQuantity(c.id) === 0 ? (
                  <AddToCartButton id={c.id}></AddToCartButton>
                ) : (
                  <ChangeAmount
                    id={c.id}
                    quantity={getItemQuantity(c.id)}
                  ></ChangeAmount>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* {clothing.map((c) => (
        <Link key={c.category} href={`/category/${c.category}`}>
          <p>{c.category}</p>
        </Link>
      ))} */}
    </div>
    //make new API endpoints for categories and fetch
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://shop.test/api/clothing");
  const { clothing } = await res.json();

  return {
    props: {
      clothing,
    },
  };
}
