import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Main from "../layout/Main";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: ()=> fetch('http://localhost:5000/courses')
            }
        ]
    }
])

export default router;