import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";

export const browserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products/:id",
    async lazy() {
      let { ProductDetails } = await import("../../pages/ProductDetails");
      return { Component: ProductDetails };
    },
  },
]);
