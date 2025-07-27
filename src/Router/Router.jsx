import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../Page/home";

import About from "../Page/About";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
     
    ],
  },
]);

export default router;
