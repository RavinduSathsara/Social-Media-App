import { useRoutes } from "react-router-dom";
import AppNavigation from "./Layout/AppNavigation";
import Layout from "./Layout/Layout";
import Home from "./pages/Home";

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <Layout />,
      children: [{ path: "/", element: <Home /> }],
    },
  ]);
}
