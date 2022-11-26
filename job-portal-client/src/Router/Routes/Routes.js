import { createBrowserRouter } from "react-router-dom";
import Main from './../../layouts/Main';
import Home from './../../Pages/Home/Home/Home';
import Login from './../../Pages/Home/Login/Login';
import SingUp from '../../Pages/Home/SignUp/SingUp';


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
            },
            {
                path: "/signup",
                element: <SingUp />
            },
            {
                path: "*",
                element: <div>Not Found</div>
            }
        ]
    }
]);

export default router;