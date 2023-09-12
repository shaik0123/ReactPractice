import React, { useEffect, useState } from "react";
import axios from "axios";

let token
function Auth(){
    return token = 
    {
        headers:{

            Authorization:`Bearer ${localStorage.getItem("token")}`
        }
    } 
}

export const  CreateNote =async(Object)=>{

    let response = await axios.post(
       //"https://localhost:44353/api/Note/Note",
       "https://fundoonote.azurewebsites.net/api/Note/Note",
        Object,
        Auth()
        
    )
    console.log(response);
    return response;   
}

export const GetAllNotes = async()=>{
    let response = await axios.get(
        "https://fundoonote.azurewebsites.net/api/Note/AllNotes",
        Auth()
    )
    return response;
}
