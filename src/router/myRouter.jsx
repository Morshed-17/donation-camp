import { createBrowserRouter } from "react-router-dom"
import MainLayout from "../layout/MainLayout"
import ErrorPage from "../pages/ErrorPage"
import Home from "../pages/Home"
import Donation from "../pages/Donation"
import Statistics from "../pages/Statistics"
import DonationDetails from "../pages/DonationDetails"


const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: '/',
                element: <Home/>,
                loader: () => fetch('/data.json')
            },
            {
                path: '/donation',
                element: <Donation/>
            },
            {
                path: '/statistics',
                element: <Statistics/>
            },{
                path: '/donate/:id',
                element: <DonationDetails/>,
                loader: () => fetch('/data.json')
            }
        ]
    }
])

export default myRouter