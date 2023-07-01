import { element } from "prop-types";
import React from "react";

const Dashboard = React.lazy(() => import("../views/dashboard/Index"));

const routes = [
  { path: "/", exact: true, name: "Home" },
  { path: "/dashboard", name: "Dashboard", element: Dashboard },
];

export default routes;
