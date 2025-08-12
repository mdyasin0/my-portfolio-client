import { createBrowserRouter } from "react-router";

import App from "../App";
import Home from "../Page/home";

import About from "../Page/About";
import Admindashbord from "../Admin/Admindashbord";

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
     
    ],
  },
  {
    path:"/dashboard" ,
    Component : Admindashbord ,
  }
]);

export default router;
