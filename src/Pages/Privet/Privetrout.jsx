import { useContext } from "react";
import { Authcontext } from "../../Authprovider/Authprovider";
import { Navigate, useLocation } from "react-router-dom";

const Privetrout = ({children}) => {
    const {user, loading} = useContext(Authcontext)
    const location = useLocation();
    console.log(location)

    if(loading){
        return <span className="loading loading-dots loading-lg"></span>
    }
    if (user) {
        return children;
    }
    
    return <Navigate state={location.pathname} to="/login"></Navigate>
};

export default Privetrout;