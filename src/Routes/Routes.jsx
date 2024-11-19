import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Contact from "../Pages/Contact/Contact/Contact";
import Gallery from "../Pages/Gallery/Gallery/Gallery";
import AboutUs from "../Pages/AboutUs/AboutUs/AboutUs";
import Academic from "../Pages/Academic/Academic/Academic";
import Admission from "../Pages/Admission/Admission/Admission";

export const router = createBrowserRouter(
  [
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
        {
          path: "/gallery",
          element: <Gallery />,
        },
        {
          path: "/aboutUs",
          element: <AboutUs />,
        },
        {
          path: "/academic",
          element: <Academic />,
        },
        {
          path: "/admission",
          element: <Admission />,
        },
      ],
    },
  ],
  {
    future: {
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_relativeSplatPath: true,
      v7_skipActionErrorRevalidation: true,
      v7_startTransition: true,
    },
  }
);
