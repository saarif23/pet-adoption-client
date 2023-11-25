
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
// import useAdmin from "../Hooks/useAdmin";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const location = useLocation();

    if (loading) {
        return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    }
    if (user) {
        return children;
    } else {

        return <Navigate to="/login" state={{ from: location }} replace></Navigate>
    }
};

export default PrivateRoute;