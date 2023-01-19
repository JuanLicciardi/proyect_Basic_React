import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import { routesPractices } from "./routesPractices";
import { routesPrivate } from "./routesPrivate";
import { routesPublic } from "./routesPublic";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [...routesPublic, ...routesPrivate, ...routesPractices]
  }
]);

export const ProviderRouter = () => <RouterProvider router={router} />