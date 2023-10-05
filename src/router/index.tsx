import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { MainLayout } from "components";
import { Booking, Detail, Home } from "pages";
import { Login, Register } from "pages";
import { Account } from "pages/Account";



export const router: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: PATH.login,
                element: <Login />,
            },
            {
                path: PATH.register,
                element: <Register />,
            },
            {
                path: PATH.account,
                element: <Account />,
            },
            {
                path: PATH.booking,
                element: <Booking />,
            },
            {
                path: PATH.detail,
                element: <Detail/>
            }
        ],
    },

    // {
    //     element: <AuthLayout />,
    //     children: [],
    // },
];
