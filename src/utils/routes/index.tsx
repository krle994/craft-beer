import { createBrowserRouter } from "react-router-dom";

import { Home } from "@/pages/Home";
import { ProductDetails } from "@/pages/ProductDetails";
import { Dashboard } from "@/pages/Dashboard";

import { ROUTES } from "@/constants/routes";

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
    path: ROUTES.DASHBOARD,
    element: <Dashboard />,
  },
]);
