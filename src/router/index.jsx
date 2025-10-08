import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetails from "../components/products/ProductDetails";
import About from "../pages/About";
import Contact from "../pages/Contact";

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    children: [
      {
        index: true,
        element: <Home/>,
      },
      {
        path: 'products',
        element: <Products/>,
      },
      {
        path: "products/:id",
        element: <ProductDetails/>,
      },
      {
        path: 'about',
        element: <About/>,
      },
      {
        path: 'contact',
        element: <Contact/>,
      }
    ]
  },
]);

export default router;