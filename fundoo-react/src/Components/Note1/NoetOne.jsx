import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';

export default function SimplePaper({settoggle}) {
  

  
  const handleSecondpage=(event)=>{
    settoggle(false)
  }
  
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 600,
          height: 50,
        },
      }}

    >
      <Paper elevation={3}  onClick={handleSecondpage}>
        <div style={{display:'flex',justifyContent:'space-between'}} >
          <div style={{marginTop:12,marginLeft:10 }}><span>Take a Note...</span></div>
          <div style={{marginTop:12,marginRight:20}}>
            <CheckBoxOutlinedIcon style={{marginRight:20}}/>
            <BrushOutlinedIcon style={{marginRight:20}}/>
            <ImageOutlinedIcon/>
          </div>
        </div>
      </Paper>
    </Box>
  );
}
