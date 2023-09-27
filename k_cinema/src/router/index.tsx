import { RouteObject } from "react-router-dom";
import { PATH } from "../constant/config";
import { AuthLayout, MainLayout } from "../components";
import { Home } from "../pages/Home";

export const router: RouteObject[] = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />,
            },
        ],
    },

    {
        element: <AuthLayout />,
        children: [
            {
                path: PATH.login,
            },
            {
                path: PATH.register,
            },
        ],
    },
];
