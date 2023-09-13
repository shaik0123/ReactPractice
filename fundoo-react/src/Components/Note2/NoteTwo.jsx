import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsPausedOutlinedIcon from '@mui/icons-material/NotificationsPausedOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'; import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { TextareaAutosize } from '@mui/base/TextareaAutosize';
import TextField from '@mui/material/TextField';
import { Button, IconButton } from '@mui/material';
import { blue } from '@mui/material/colors';
import { CreateNote, GetAllNotes } from '../../Services/NoteServices';



export default function SimplePaperTwo({settoggle,ResponseData}) {
  // const [retrivedata,setretrivedata]=React.useState()
  const [data,setData] = React.useState({
    Title:"",
    TakeNote:""
  })

  const taketitle=(event)=>{
    setData({...data,Title:event.target.value})
  }
  const takenote=(event)=>{
    setData({...data,TakeNote:event.target.value})
  }
  const handlefirstpage= async(event)=>{
    settoggle(true)
    console.log(data)
    if(data != null && data.Title != ""){
      let response = await CreateNote(data)
      console.log(response)
      ResponseData()
    }
}
  

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600
        },
      }}
    >

      <Paper elevation={3}>
        <div style={{ display: 'flex' }}>
          <Box>
            <div>
              <input type='text' placeholder='Title' value={data.Title} onChange={taketitle}
                style={{ width: 530, height: 50, font: 'caption', border: 'none', marginLeft:10, outline: 'none' }}></input>
              <IconButton><PushPinOutlinedIcon style={{ marginLeft: 10 }} /></IconButton>
              {/* <TextareaAutosize placeholder='Take a Note...' style={{ width: 550, font: 'caption',border:'none',outline:'none',marginLeft:5 }}/> */}
              <TextField value={data.TakeNote} onChange={takenote}  id="standard-basic" placeholder='Take a Note...' variant="standard" multiline
                InputProps={{ disableUnderline: true }} style={{ marginLeft: 10, font: 'caption' }} />
            </div>
            <div style={{ display: 'flex'}}>
              <div style={{ display: 'flex' }}>
                <div><IconButton><NotificationsPausedOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><PersonAddAltOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><PaletteOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><InsertPhotoOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><ArchiveOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><MoreVertOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><UndoOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
                <div><IconButton><RedoOutlinedIcon style={{marginLeft:20}}/></IconButton></div>
              </div>
              <div>
                <div><Button onClick={handlefirstpage} style={{marginLeft:50,color:'black'}} type='button'>close</Button></div>
              </div>
            </div>
          </Box>
        </div>
      </Paper>
    </Box>
  );
}
