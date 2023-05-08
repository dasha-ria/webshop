import { rest } from "msw";
import { Clothing } from "./types";

const clothing = [
  {
    name: "Floral T-shirt",
    url: "https://images.unsplash.com/photo-1517191297489-48c463380e8f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8ZmxvcmFsJTIwdHNoaXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    category: "T-shirts & tops",
    price: 25,
    quantity: 50,
    discount: 0,
    id: "RJrGJL2V9X0qW1zVjvHJb",
  },
  {
    name: "Denim Jacket",
    url: "https://images.unsplash.com/photo-1521145376700-41c84a766b12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1364&q=80",
    category: "Jackets & blazers",
    price: 80,
    quantity: 20,
    discount: 0,
    id: "0Zt8KmDv5gBn1hYkE9tLW",
  },
  {
    name: "Leather Pants",
    url: "https://images.unsplash.com/photo-1633599429054-12a32fdfa9e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8bGVhdGhlciUyMHBhbnRzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    category: "Trousers",
    price: 120,
    quantity: 10,
    discount: 20,
    id: "5xhjZd7FfPpU6Kv9nMqXG",
  },
  {
    name: "Floral Maxi Dress",
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
    category: "Dresses",
    price: 70,
    quantity: 25,
    discount: 10,
    id: "KjGvX8Wl1Rt5zNc3rPdMq",
  },
  {
    name: "Printed Maxi Dress",
    url: "https://images.unsplash.com/photo-1490505658643-e96d613eb642?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Dresses",
    price: 75,
    quantity: 20,
    discount: 0,
    id: "rCgU7jWv6Pz0Hk9BfTlXy",
  },
  {
    name: "Ruffle Hem Shift Dress",
    url: "https://images.unsplash.com/photo-1527481790178-35cbe6efa44a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1939&q=80",
    category: "Dresses",
    price: 55,
    quantity: 30,
    discount: 0,
    id: "xMqNc3rKjGvZ8Wl1Rt5pTb",
  },
  {
    name: "Ruffled Pink Dress",
    url: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    category: "Dresses",
    price: 80,
    quantity: 15,
    discount: 15,
    id: "g9VxPcLlPf5Jh2Zt1KrQwS",
  },
  {
    name: "Striped T-shirt",
    url: "https://images.unsplash.com/photo-1490092218187-0713ea317e21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1773&q=80",
    category: "T-shirts & Tops",
    price: 25,
    quantity: 30,
    discount: 0,
    id: "TShGvX8Wl1Rt5zNc3rPdMq",
  },
  {
    name: "V-neck Blouse",
    url: "https://images.unsplash.com/photo-1533399710066-c33de66fe6bb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Shirts & Blouses",
    price: 30,
    quantity: 25,
    discount: 0,
    id: "qTwSd1Fh2Zl4RtKg9VxPc",
  },
  {
    name: "Floral Print Blouse",
    url: "https://images.unsplash.com/photo-1619154677229-44e6343b2fbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Shirts & Blouses",
    price: 40,
    quantity: 15,
    discount: 0,
    id: "uQwSd1Fh2Zl4RtKg9VxPc",
  },
  {
    name: "Striped Button-up Shirt",
    url: "https://images.unsplash.com/photo-1602564658744-7394bb96f699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=986&q=80",
    category: "Shirts & Blouses",
    price: 35,
    quantity: 30,
    discount: 10,
    id: "h9VxPcLlPf5Jh2Zt1KrQwS",
  },
  {
    name: "Graphic Tee",
    url: "https://images.unsplash.com/photo-1626543750227-7686f9bd3e96?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "T-shirts & Tops",
    price: 20,
    quantity: 40,
    discount: 5,
    id: "TpjVlI6Tz0Gm1dNk8cHsKx",
  },
  {
    name: "Ribbed Top",
    url: "https://images.unsplash.com/photo-1513097847644-f00cfe868607?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=985&q=80",
    category: "T-shirts & Tops",
    price: 15,
    quantity: 50,
    discount: 0,
    id: "yCgU7jWv6Pz0Hk9BfTlXx",
  },
  {
    name: "Skinny Jeans",
    url: "https://images.unsplash.com/photo-1599447541321-50706296bb7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80",
    category: "Jeans",
    price: 50,
    quantity: 25,
    discount: 0,
    id: "JnGvX8Wl1Rt5zNc3rPdMq",
  },
  {
    name: "Mom Jeans",
    url: "https://images.unsplash.com/photo-1603772655621-378ee14b5a7f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Jeans",
    price: 60,
    quantity: 20,
    discount: 0,
    id: "JpjVlI6Tz0Gm1dNk8cHsKx",
  },
  {
    name: "Faux Fur Jacket",
    url: "https://images.unsplash.com/photo-1542088216-a7aed3b59586?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Jackets & Blazers",
    price: 110,
    quantity: 15,
    discount: 20,
    id: "JkCgU7jWv6Pz0Ht9BfTlXx",
  },
  {
    name: "Puffer Jacket",
    url: "https://images.unsplash.com/photo-1548624313-0396c75e4b1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Jackets & Blazers",
    price: 90,
    quantity: 25,
    discount: 0,
    id: "Blz9VxPcLlPf5Jh2Zt1KrQwS",
  },
  {
    name: "Gray Blazer",
    url: "https://images.unsplash.com/photo-1615898290828-b276839ad3d5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGJsYXplciUyMHdvbWFufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
    category: "Jackets & Blazers",
    price: 130,
    quantity: 10,
    discount: 0,
    id: "BlzQwSd1Fh2Zl4RtKg9VxPc",
  },
  {
    name: "Patterned Blazer",
    url: "https://images.unsplash.com/photo-1617647858823-2424b6dc472f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1010&q=80",
    category: "Jackets & Blazers",
    price: 150,
    quantity: 15,
    discount: 0,
    id: "JkMqNc3rKjGvZ8Wl1Rt5pTb",
  },
  {
    name: "Blue Trench Coat",
    url: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
    category: "Jackets & Blazers",
    price: 170,
    quantity: 20,
    discount: 0,
    id: "BlzCgU7jWv6Pz0Hk9BfTlXy",
  },
];

export const handlers = [
  rest.get("http://shop.test/api/clothing", (_req, res, ctx) => {
    return res(
      ctx.json<{ clothing: Clothing[] }>({
        clothing: clothing,
      })
    );
  }),

  rest.get("http://shop.test/api/clothing/:id", (req, res, ctx) => {
    const id = req.params.id;
    return res(
      ctx.json<{ clothing: Clothing }>({
        clothing: clothing.find((item) => item.id === id)!,
      })
    );
  }),

  rest.get("http://shop.test/api/category/:category", (req, res, ctx) => {
    const category = req.params.category;
    return res(
      ctx.json<{ clothing: Clothing[] }>({
        clothing: clothing.filter((item) => item.category === category)!,
      })
    );
  }),
];
