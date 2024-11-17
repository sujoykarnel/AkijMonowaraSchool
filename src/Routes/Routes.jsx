import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Contact from "../Pages/Contact/Contact/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <PageNotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },
]);
