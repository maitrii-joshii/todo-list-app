import { Navigate, Outlet, useNavigate } from "react-router";
import { useAuth } from "../../context/AuthContext";
import { useEffect } from "react";

const ProtectedRoute = () => {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("/login");
        }
    }, [isAuthenticated]);

    return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
};

export default ProtectedRoute;