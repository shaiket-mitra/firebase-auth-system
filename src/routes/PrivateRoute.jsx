import { Navigate, useLocation } from "react-router";
import { useAuthContext } from "../hooks/hooks";
import Loading from "../pages/Loading";

export default function PrivateRoute({ children }) {
  const { user, loading } = useAuthContext();
  const location = useLocation();

  if (loading) {
    return <Loading/>
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location.pathname }} replace />;
  }

  return children;
}
