export const AddToCartButton = () => {
  return (
    <button className="p-2 border border-black border-1">add to cart</button>
  );
};

export const ChangeAmount = ({ quantity }) => {
  return (
    <div>
      <div className="flex gap-2 p-2">
        <button>-</button>
        <p>{quantity}</p>
        <button>+</button>
      </div>
      <div>
        <button className="bg-red-500 hover:bg-red-400 text-white p-2 ">
          Remove
        </button>
      </div>
    </div>
  );
};
