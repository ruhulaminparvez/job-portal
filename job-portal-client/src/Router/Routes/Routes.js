import { createBrowserRouter } from "react-router-dom";
import Main from './../../layouts/Main';
import Home from './../../Pages/Home/Home/Home';
import Login from './../../Pages/Home/Login/Login';


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
]);

export default router;