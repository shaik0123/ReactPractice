import React from "react";
import axios from "axios";

export const signup = async(object)=>{
    let response = await axios.post(
        //"https://localhost:44353/api/User/Register",
        "https://fundoonote.azurewebsites.net/api/User/Register",
       //"/api/User/Register",
      // https://localhost:44353/api/User/Register
        object
    );
    return response;
};

export const signin = async(object)=>{
    let response = await axios.post(
        "https://fundoonote.azurewebsites.net/api/User/Login",
        object
    );
    return response;
};