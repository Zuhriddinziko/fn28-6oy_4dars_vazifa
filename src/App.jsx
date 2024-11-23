// rrd
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
// component
import Navbar from "./component/Navbar";
// Pages
import Aboute from "./pages/Blok";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Works from "./pages/Works";
// layouts
import Layouts from "./layouts/MainLayout";
function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Layouts />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/works",
          element: <Works />,
        },
        {
          path: "/aboute",
          element: <Aboute />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "/Novbar",
          element: <Navbar />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
