import { rest } from "msw";
import { Clothing } from "./types";

export const handlers = [
  rest.get("http://shop.com/api/clothing", (_req, res, ctx) => {
    return res(
      ctx.json<{ clothing: Clothing[] }>({
        clothing: [
          {
            name: "Floral T-shirt",
            url: "https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvcmFsJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            category: "T-shirt",
            price: 25,
            quantity: 50,
            discount: 0,
          },
          {
            name: "Denim Jacket",
            url: "https://images.unsplash.com/photo-1521145376700-41c84a766b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
            category: "Jacket",
            price: 80,
            quantity: 20,
            discount: 0,
          },
          {
            name: "Leather Pants",
            url: "https://images.unsplash.com/photo-1633599429054-12a32fdfa9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVhdGhlciUyMHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
            category: "Pants",
            price: 120,
            quantity: 10,
            discount: 20,
          },
        ],
      })
    );
  }),
];
