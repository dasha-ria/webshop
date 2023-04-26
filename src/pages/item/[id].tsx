export default function Item({ clothing }) {
  return (
    <div className="w-screen h-screen bg-white">
      <img
        className="w-96 h-96 object-cover rounded-md"
        src={clothing.url}
      ></img>
      <p>{clothing.name}</p>
      <p>{`$${clothing.price}`}</p>
      <p>{`${clothing.quantity} in stock`}</p>
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
