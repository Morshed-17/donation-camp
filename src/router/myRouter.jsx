import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Donation from "../pages/Donation"
import Statistics from "../pages/Statistics"


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            }
        ]
    }
])

export default myRouter