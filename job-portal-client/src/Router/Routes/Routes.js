import { createBrowserRouter } from "react-router-dom";
import Main from './../../layouts/Main';
import Home from './../../Pages/Home/Home/Home';
import Login from './../../Pages/Login/Login';
import SingUp from '../../Pages/SignUp/SingUp';
import Error from './../../Pages/Error/Error';
import CreatePost from './../../Pages/Home/CreatePost/CreatePost';
import ViewPost from './../../Pages/Home/ViewPost/ViewPost';


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
                path: "/create-post",
                element: <CreatePost />
            },
            {
                path: "/view-post",
                element: <ViewPost />
            },
            {
                path: "*",
                element: <Error />
            }
        ]
    }
]);

export default router;