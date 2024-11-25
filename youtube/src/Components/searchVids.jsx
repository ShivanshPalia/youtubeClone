import React from 'react'
import { Link } from 'react-router-dom'
import { demoThumbnailUrl,demoChannelUrl,demoVideoTitle,demoVideoUrl,demoChannelTitle } from '../utils/constant';
import { CardMedia,Box ,Card} from '@mui/material';
import SearchPage from './searchPage';
function searchVids({videos}) {
  return (
    <Box >
        {videos.map((item,idx)=>{
            // console.log(item.snippet?.thumbnails?.high?.url);
           
            return (
              <div style={{height:"300px",width:"100%"}}>
                   <SearchPage video={item}/>
              </div>
             )
            
           
        })}
    </Box>
  )
}

export default searchVids