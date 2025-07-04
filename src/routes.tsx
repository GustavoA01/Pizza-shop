import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/dashboard/dashboard"
import { SignIn } from "./pages/auth/sing-in"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"
import { signUp } from "./pages/auth/sign-up"
import { Orders } from "./pages/app/orders/orders"
import { NotFound } from "./pages/404"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: "/", Component: Dashboard },
      { path: "/orders", Component: Orders },
      { path: "/dashboard", Component: Dashboard },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", Component: SignIn },
      { path: "/sign-up", Component: signUp },
    ],
  },
])
