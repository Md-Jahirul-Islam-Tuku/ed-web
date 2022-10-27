import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/CourseDetails";
import Courses from "../components/Courses";
import Login from "../components/Login";
import PremiumAccess from "../components/PremiumAccess";
import Register from "../components/Register";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Courses></Courses>,
        loader: () => fetch('https://ed-web-server.vercel.app/courses')
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
        element: <Courses></Courses>,
        loader: () => fetch('https://ed-web-server.vercel.app/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
      {
        path: '/premium-access/:id',
        element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
    ]
  }
])

export default router;