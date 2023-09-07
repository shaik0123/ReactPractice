import React from "react";
import { Navigate } from "react-router-dom";

const AuthRoute =({ children })=>{
    if(localStorage.getItem("token") === undefined || localStorage.getItem("token") === null){
        console.log("false");
        return children;
    }
    return <Navigate to="/dashboard"/>;
    console.log("pass")
};
export default AuthRoute;