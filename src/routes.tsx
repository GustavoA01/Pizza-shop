import { createBrowserRouter } from "react-router-dom"
import { Dashboard } from "./pages/app/dashboard"
import { SignIn } from "./pages/auth/sing-in"
import { AppLayout } from "./pages/_layouts/app"
import { AuthLayout } from "./pages/_layouts/auth"
import { signUp } from "./pages/auth/sign-up"
import { Orders } from "./pages/app/orders/orders"

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", Component: Dashboard },
      { path: "/orders", Component: Orders },
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
