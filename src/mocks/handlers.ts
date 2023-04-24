import { rest } from "msw";
import { Clothing } from "./types";

export const handlers = [
  rest.get("http://shop.com/api/clothing", (_req, res, ctx) => {
    return res(
      ctx.json<Clothing>({
        name: "Floral T-shirt",
        url: "https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvcmFsJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
        category: "T-shirt",
        price: 25,
        quantity: 50,
        discount: 0,
      })
    );
  }),
];
