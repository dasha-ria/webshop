import Link from "next/link";

export default function Category({ clothing }) {
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
      <div>
        {clothing.map((c) => (
          <Link key={c.id} href={`/item/${c.id}`}>
            <div className="flex gap-12 flex-wrap pt-12 ml-12 w-full">
              <div>
                <img
                  className="w-56 h-56 object-cover rounded-md"
                  src={c.url}
                ></img>
                <p>{c.name}</p>
                <p>
                  $<span>{c.price}</span>
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps({ params }) {
  console.log("cat  ", params.category);
  const res = await fetch("http://shop.test/api/category/" + params.category);
  const { clothing } = await res.json();

  console.log("clothing", clothing);

  return {
    props: {
      clothing,
    },
  };
}
