import React from 'react';
import StarBorderPurple500OutlinedIcon from '@mui/icons-material/StarBorderPurple500Outlined';
import DriveFileMoveOutlinedIcon from '@mui/icons-material/DriveFileMoveOutlined';
import CloudDoneOutlinedIcon from '@mui/icons-material/CloudDoneOutlined';
import HttpsOutlinedIcon from '@mui/icons-material/HttpsOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import VideoChatOutlinedIcon from '@mui/icons-material/VideoChatOutlined';
import CommentOutlinedIcon from '@mui/icons-material/CommentOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
const Toolbar = () => {
  return (
    <div className="toolbar">
        
      <div className="toolbar__left">

        <div className="toolbar__document-name">Untitled document</div>

        <div><StarBorderPurple500OutlinedIcon/></div>
        <div><DriveFileMoveOutlinedIcon/></div>
        <div><CloudDoneOutlinedIcon/></div>
        
      </div>
      <div className='a1w'>
        <div className='g1'>File</div>
        <div className='f1'> Edit</div>
        <div className='e1'>View</div>
        <div className='d1'>Insert</div>
        <div className='c1'>Tools</div>
        <div className='b1'>Extensions</div>
        <div className='a1'>Help</div>

        </div>
      <div className="toolbar__right">
      
      <div >
      <HistoryOutlinedIcon/>
      <CommentOutlinedIcon/>
        <VideoChatOutlinedIcon/> <button className="toolbar__share-button"><HttpsOutlinedIcon/>Share</button><AccountCircleOutlinedIcon/>
      </div>
     
       
        
        
      </div>
     
    </div>
  )
    
  ;
};

export default Toolbar;

