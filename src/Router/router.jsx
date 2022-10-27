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
        element: <Home></Home>,
        loader: () => fetch('https://ed-web-server.vercel.app/courses')
      },
      {
        path: '/course/:id',
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
      {
        path: '/premium-access/:id',
        element: <PremiumAccess></PremiumAccess>,
        loader: ({ params }) => fetch(`https://ed-web-server.vercel.app/courses/${params.id}`)
      },
    ]
  }
])

export default router;