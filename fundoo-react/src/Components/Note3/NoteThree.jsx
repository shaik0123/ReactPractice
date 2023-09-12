import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import NotificationsPausedOutlinedIcon from '@mui/icons-material/NotificationsPausedOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined'; import PaletteOutlinedIcon from '@mui/icons-material/PaletteOutlined';
// import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import { IconButton, Typography } from '@mui/material';
import './NoteThree.css'
import { GetAllNotes } from '../../Services/NoteServices';


export default function SimplePaperThree({data}) {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                flexWrap: 'wrap',
                '& > :not(style)': {
                    m: 1,
                    width: 300,
                    // height: 300,
                },
            }}
        >
            <div>
                <Paper elevation={3}>
                    <div className='displaytitle'>
                        <div>
                            {data.title}
                            {/* <Typography><div>{data}</div></Typography> */}
                        </div>
                        <div>
                            <IconButton><PushPinOutlinedIcon /></IconButton>
                        </div>
                    </div>
                    <div className='displaynote'>
                        {data.takeNote}
                    </div>
                    <div className='displayicons'>
                        <div><IconButton><NotificationsPausedOutlinedIcon /></IconButton></div>
                        <div><IconButton><PersonAddAltOutlinedIcon /></IconButton></div>
                        <div><IconButton><PaletteOutlinedIcon /></IconButton></div>
                        {/* <div><IconButton><InsertPhotoOutlinedIcon /></IconButton></div> */}
                        <div><IconButton><ArchiveOutlinedIcon /></IconButton></div>
                        <div><IconButton><DeleteOutlinedIcon /></IconButton></div>
                        <div><IconButton><MoreVertOutlinedIcon /></IconButton></div>
                    </div>

                </Paper>
            </div>
        </Box>
    );
}
