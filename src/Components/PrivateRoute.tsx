import { Navigate, Outlet} from "react-router-dom";

const PrivateRoute = () => {
//   const isLoggedIn = !!sessionStorage.getItem('token');
    const isLoggedIn = true;
    return isLoggedIn ? <Outlet /> : <Navigate to='/login' />

}

export default PrivateRoute