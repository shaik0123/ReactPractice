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
export const DeleteNote = async(Object)=>{
    let response = await axios.delete(
        "https://fundoonote.azurewebsites.net/api/Note/Note",
        Object,
        Auth()
    )
    return response;
}

export const TrashNote = async(id)=>{
    let response = await axios.patch(
        `https://fundoonote.azurewebsites.net/api/Note/Trash?id=${id}`,
        null,
        Auth()
    )
    return response;
}

export const ArchiveNote = async(id)=>{
    let response = await axios.patch(
        `https://fundoonote.azurewebsites.net/api/Note/Archive?id=${id}`,
        null,
        Auth()
    )
    return response;
}
