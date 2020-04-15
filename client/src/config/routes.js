import LayoutAdmin from "../layouts/LayoutAdmin";
import LayoutBasic from "../layouts/LayoutBasic";

//Admin Pages
import AdminHome from "../pages/Admin";

import Login from "../pages/Login";

//Pages
import Home from "../pages/Home";
import Contact from "../pages/Contact";

import Error404 from "../pages/Error404";

const routes = [
  {
    path: "/admin",
    component: LayoutAdmin,
    exact: false,
    routes: [
      {
        path: "/admin",
        component: AdminHome,
        exact: true
      },
      {
        component: Error404
      }
    ]
  },
  {
    path: "/",
    component: LayoutBasic,
    exact: false,
    routes: [
      {
        path: "/",
        component: Home,
        exact: true
      },
      { 
        path: "/contact", 
        component: Contact, 
        exact: true 
      },
      { 
        path: "/login", 
        component: Login, 
        exact: true 
      },
      {
        component: Error404
      }
    ]
  }
];

export default routes;
