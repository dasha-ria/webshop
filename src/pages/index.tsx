import Link from "next/link";
import { useState } from "react";
import { Clothing } from "../mocks/types";
import { Price } from "@/components/price";

type Props = {
  clothing: Clothing[];
};

export default function Home({ clothing }: Props) {
  return (
    <div className="w-screen h-screen bg-white">
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
        <div className="flex gap-12 flex-wrap pt-12 ml-12 w-full">
          {clothing.map((c) => (
            <Link key={c.id} href={`/item/${c.id}`}>
              <div>
                <img
                  className="w-56 h-56 object-cover rounded-md"
                  src={c.url}
                ></img>
                <p>{c.name}</p>
                <Price price={c.price} discount={c.discount}></Price>
              </div>
            </Link>
          ))}
        </div>
      </div>
      {clothing.map((c) => (
        <Link key={c.category} href={`/category/${c.category}`}>
          <p>{c.category}</p>
        </Link>
      ))}
    </div>
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
