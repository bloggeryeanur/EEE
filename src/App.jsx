import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Project from "./Personal/Project";
import Product from "./Personal/Product";
import Research from "./Personal/Research";
import About from "./Personal/About";
import Contact from "./connection/Contact";
import Hire from "./connection/Hire";
import Experience from "./connection/Experience";
import AllPage from "./HomeCompoent/AllPage";

const App = () => {
  const route = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children: [
        {
          path: "/",
          element: <AllPage></AllPage>,
        },
        {
          path: "/myproduct",
          element: <Product></Product>,
        },
        {
          path: "/project",
          element: <Project></Project>,
        },
        {
          path: "/research",
          element: <Research></Research>,
        },
        { path: "/about", element: <About></About> },

        // Contact Section

        { path: "/contact", element: <Contact></Contact> },

        { path: "/hire", element: <Hire></Hire> },

        { path: "/Experience", element: <Experience></Experience> },
      ],
    },
  ]);
  return (
    <div>
      <CssBaseline />
      <RouterProvider router={route}>
         </RouterProvider>
    </div>
  );
};

export default App;
