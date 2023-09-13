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
    const [typeOfNotes,settypeOfNotes]=useState('Notes') 
   // const [particularNotes,setparticularNotes]=useState(' ')

     async function ResponseData(){
        let response = await GetAllNotes();
        console.log(response.data.data)
        let newdata = response.data.data;
        //setnotedata(newdata)
        console.log(typeOfNotes)
        if(typeOfNotes == 'Notes'){
        let alldata = newdata.filter((x)=>x.isArchive == false && x.isTrash == false)
        console.log(alldata)
        setnotedata(alldata)
        }
        else if(typeOfNotes == 'Archive'){
            let archivedata = newdata.filter((x)=>x.isArchive == true && x.isTrash == false)
            console.log(archivedata)
            setnotedata(archivedata)
        }
        else{
            let trashdata = newdata.filter((x)=>x.isArchive == false && x.isTrash == true)
            console.log(trashdata)
            setnotedata(trashdata)
        }

        //setnotedata(newdata)
    }
        
    useEffect(()=>{
        ResponseData()
    },[typeOfNotes])


    return(
        <div>
            <MiniDrawer settypeOfNotes={settypeOfNotes}/>
            {
                toggle? <SimplePaper settoggle={settoggle}/>:<SimplePaperTwo settoggle={settoggle} ResponseData={ResponseData}/>
            }
           <div className="takethree">
           {
                notesdata.map((data)=>
                    // console.log(data)
                  (<SimplePaperThree data={data} ResponseData={ResponseData}/>)
                )

            }
           </div>
            
        </div>
    )
}
export default Dashboard