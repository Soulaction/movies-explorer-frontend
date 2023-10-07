import {Navigate, Route} from "react-router-dom";
import {useContext} from "react";
import {CurrentUserContext} from "../../context/CurrentUserContext";

const ProtectedRoute = ({element: Component, ...props}) => {
    const {loggedIn} = useContext(CurrentUserContext)
    return (
        loggedIn ? <Component {...props}/> : <Navigate to="/signin"/>
    )
}

export default ProtectedRoute;
