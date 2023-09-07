import React from "react";
import { BrowserRouter, Route ,Routes} from "react-router-dom";
import AuthRoute from "./AuthRoute";
import SignIn from "../Forms/SignIn";
import SignUp from "../Forms/SignUp";
import Dashboard from '../Dashboard';
import ProtectedRoute from "./ProtectedRoute";

function Router(){
    return(
        <div>
            <BrowserRouter>
            <Routes>
                <Route exact path={"/"} element={<AuthRoute><SignIn/></AuthRoute>}/>
                <Route  path={"/Signup"} element={<AuthRoute><SignUp/></AuthRoute>}/>
                <Route  path={"/Dashboard"} element={<ProtectedRoute><Dashboard/></ProtectedRoute>}/>
            </Routes>
            </BrowserRouter>
        </div>
    )
}
export default Router;