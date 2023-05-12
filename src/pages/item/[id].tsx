import Link from "next/link";
import { getPrice, showOriginal } from "@/utils/getPrice";
import { Price } from "@/components/price";

export default function Item({ clothing }) {
  return (
    <div className="w-screen h-screen bg-white">
      <div className="flex items-end">
        <Link href="/">
          <img className="w-40 h-auto ml-12 pt-8" src="../studio47.svg"></img>
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
