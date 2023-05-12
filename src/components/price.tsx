import { getPrice } from "@/utils/pricing";

export const Price = ({ price, discount }) => {
  return (
    <div className="flex gap-2">
      <p>
        $<span>{getPrice(price, discount)}</span>
      </p>
      {discount !== 0 ? <p className="line-through">${price}</p> : null}
    </div>
  );
};
