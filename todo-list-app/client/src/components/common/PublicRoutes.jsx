import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/AuthContext";

const PublicRoute = () => {
    const { isAuthenticated } = useAuth();
    return !isAuthenticated ? <Outlet /> : <Navigate to="/todos" replace />;
};

export default PublicRoute;