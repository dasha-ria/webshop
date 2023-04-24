import { useState } from "react";
import { Clothing } from "../mocks/types";

type Props = {
  clothing: Clothing[];
};

export default function Home({ clothing }: Props) {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex items-end">
        <img className="w-40 h-auto ml-12 pt-8" src="studio47.svg"></img>

        <ul className="flex gap-4 ml-12">
          <li className="font-bold text-lg">Home</li>
          <li className="font-bold text-lg underline underline-offset-4">
            Shop
          </li>
          <li className="font-bold text-lg">About</li>
        </ul>
      </div>
      <div>
        <div className="flex gap-12 flex-wrap pt-12 ml-12 w-full">
          {clothing.map((c) => (
            <div key="c">
              <img
                className="w-56 h-56 object-cover rounded-md"
                src={c.url}
              ></img>
              <p>{c.name}</p>
              <p>{c.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const res = await fetch("http://shop.com/api/clothing");
  const { clothing } = await res.json();

  return {
    props: {
      clothing,
    },
  };
}
