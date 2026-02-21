import { createBrowserRouter } from "react-router";
import { lazy, Suspense } from "react";
import PrivateRoute from "./PrivateRoute";
import Loading from "../pages/Loading";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProfilePage = lazy(() => import("../pages/ProfilePage"));
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Login = lazy(() => import("../pages/Login"));
const Register = lazy(() => import("../pages/Register"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loading />}>
        <HomePage />
      </Suspense>
    ),
  },
  {
    path: "/profile",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loading />}>
          <ProfilePage />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<Loading />}>
          <Dashboard />
        </Suspense>
      </PrivateRoute>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<Loading />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/register",
    element: (
      <Suspense fallback={<Loading />}>
        <Register />
      </Suspense>
    ),
  },
]);