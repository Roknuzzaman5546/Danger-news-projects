import { createBrowserRouter } from "react-router-dom";
import Roots from "../Roots/Roots";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Newsdetails from "../Pages/Newsdetails";
import Privetrout from "../Pages/Privet/Privetrout";

const rout = createBrowserRouter([
    {
        path: "/",
        element: <Roots></Roots>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('/news.json')
            },
            {
                path: "/login",
                element: <Login></Login> 
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/news/:id",
                element: <Privetrout><Newsdetails></Newsdetails></Privetrout>,
                loader: () => fetch('/news.json')
            }
        ]
    }
])

export default rout;