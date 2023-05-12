import { getPrice } from "@/utils/getPrice";

export const Price = ({ price, discount }) => {
  return (
    <div className="flex gap-2">
      <p>
        $<span>{getPrice(price, discount)}</span>
      </p>
      {discount !== 0 ? (
        <p className="line-through text-gray-500">${price}</p>
      ) : null}
    </div>
  );
};
