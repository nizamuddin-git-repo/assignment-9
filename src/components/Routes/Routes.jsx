import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import NotFound from "../Pages/NotFound";
import PropertyDetails from "../Pages/PropertyDetails";

const router = createBrowserRouter([
    {
      path: '/',
      element: <Root></Root>,
      errorElement: <NotFound></NotFound>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch("/data.json"),
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>,
        },
        {
            path: '/about',
            element: <About></About>,
            loader: ()=> fetch("/data.json"),
        },
        {
            path: '/contact',
            element: <Contact></Contact>,
        },
        {
            path: '/property/:id',
            element: <PropertyDetails></PropertyDetails>,
            loader: ()=> fetch('/data.json')
        },
      ],
    },
])

export default router;