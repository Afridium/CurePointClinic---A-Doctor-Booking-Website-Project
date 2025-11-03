import { createBrowserRouter } from "react-router";
import Root from "../pages/rootPage/Root";
import Error from "../pages/ErrorPage/Error";
import Home from "../pages/HomePage/Home";
import BookingPage from "../pages/BookingPage/BookingPage";
import Blogs from "../pages/BlogsPage/Blogs";
import Contact from "../pages/ContactPage/Contact"
export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
            path:"bookings",
            Component: BookingPage
        },
        {
            path:"blogs",
            Component: Blogs
        },
        {
            path:"contact",
            Component: Contact
        }
    ]
  },
]);

