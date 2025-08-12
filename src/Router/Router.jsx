import { createBrowserRouter } from "react-router";

import App from "../App";
import ProjectDetails from "../Page/ProjectDetails";
import Render from "../Page/Render";




const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
     
    ],
  },
  {
    path:'/render',
    Component : Render ,
    children : [
      {
       path : "/render/projects/:id" ,
       Component : ProjectDetails ,
     }
    ]
  }
 
]);

export default router;
