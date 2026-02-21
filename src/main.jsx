import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
import { router } from "./routes/AppRouter";
import "./index.css";
import "./styles.css";
import AuthProvider from "./context/AuthProvider";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" reverseOrder={false} />
    </AuthProvider>
  </React.StrictMode>,
);
