import Link from "next/link";
import { useState } from "react";
import { Clothing } from "../mocks/types";
import { Price } from "@/components/price";
import { AddToCartButton, ChangeAmount } from "@/components/cart-button";

type Props = {
  clothing: Clothing[];
};

export default function Home({ clothing }: Props) {
  const quantity = 0;
  return (
    <div className="w-full h-full bg-white">
      <div className="flex items-end">
        <Link href="/">
          <img className="w-40 h-auto ml-12 pt-8" src="studio47.svg"></img>
        </Link>

        <ul className="flex gap-4 ml-12">
          <Link href="/">
            <li className="font-bold text-lg">Home</li>
          </Link>
          <li className="font-bold text-lg underline underline-offset-4">
            Shop
          </li>
          <li className="font-bold text-lg">About</li>
        </ul>
      </div>
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
                {quantity === 0 ? (
                  <AddToCartButton></AddToCartButton>
                ) : (
                  <ChangeAmount quantity={quantity}></ChangeAmount>
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
