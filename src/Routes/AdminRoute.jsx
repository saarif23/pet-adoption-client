
import { ImSpinner9 } from "react-icons/im";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types'
import useAuth from "../Hooks/useAuth";
import useAdmin from "../Hooks/useAdmin";

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    const location = useLocation();
    if (loading || isAdminLoading) {
        return <div className="animate-spin flex justify-center items-center min-h-screen text-9xl"><ImSpinner9 /></div>
    } if (user && isAdmin) {
        return children;
    }
    return <Navigate to="/" state={{ from: location }} replace></Navigate>



};
AdminRoute.propTypes = {
    children: PropTypes.node.isRequired
}

export default AdminRoute;