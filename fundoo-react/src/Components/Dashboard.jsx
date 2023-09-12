import React, { useEffect, useState } from "react";
import MiniDrawer from "./AppBar";
import SimplePaper from "./Note1/NoetOne";
import SimplePaperTwo from "./Note2/NoteTwo";
import SimplePaperThree from "./Note3/NoteThree";
import { GetAllNotes } from "../Services/NoteServices";
import './Dashboard.css'


function Dashboard(){
    const [toggle,settoggle]=useState(true)
    const [notesdata,setnotedata]=useState([]) 

     async function ResponseData(){
        let response = await GetAllNotes();
        console.log(response.data.data)
        let newdata = response.data.data;
        setnotedata(newdata)
    }
        
    useEffect(()=>{
        ResponseData()
    },[])
    
    return(
        <div>
            <MiniDrawer/>
            {
                toggle? <SimplePaper settoggle={settoggle}/>:<SimplePaperTwo settoggle={settoggle}/>
            }
           <div className="takethree">
           {
                notesdata.map((data)=>
                    // console.log(data)
                  (<SimplePaperThree data={data}/>)
                )
            }
           </div>
            
        </div>
    )
}
export default Dashboard