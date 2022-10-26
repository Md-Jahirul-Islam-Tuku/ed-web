import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import Home from "../components/Home";
import Login from "../components/Login";
import PremiumAccess from "../components/PremiumAccess";
import Register from "../components/Register";
import Main from "../layout/Main";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/courses',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
      {
        path: '/premium-access/:id',
        element: <PremiumAccess></PremiumAccess>,
        loader: ({params}) => fetch(`http://localhost:5000/courses/${params.id}`)
      },
    ]
  }
])

export default router;