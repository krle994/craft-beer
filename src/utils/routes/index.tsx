import { createBrowserRouter } from "react-router-dom";
import { Home } from "@/pages/Home";
import { ROUTES } from "@/constants/routes";
import { ProductDetails } from "@/pages/ProductDetails";
import { Manage } from "@/pages/Manage";

export const browserRouter = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: <Home />,
  },
  {
    path: ROUTES.PRODUCT_DETAILS,
    element: <ProductDetails />,
  },
  {
    path: ROUTES.MANAGE,
    element: <Manage />,
  },
]);
