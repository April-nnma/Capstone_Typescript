import { RouteObject } from "react-router-dom";
import { PATH } from "constant";
import { MainLayout } from "components";
import { Home } from "pages";
import { Login, Register } from "pages";



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
        ],
    },

    // {
    //     element: <AuthLayout />,
    //     children: [],
    // },
];
