export const ShoppingCart = ({ cartPopup, setCartPopup }) => {
  const closeCartPopup = () => setCartPopup(false);
  return (
    <div className="flex justify-end pr-10">
      <div className="flex flex-row gap-40 mt-5">
        <p>Cart</p>
        <button onClick={closeCartPopup}>close</button>
      </div>
    </div>
  );
};
