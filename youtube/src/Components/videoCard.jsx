// import React from 'react'
// import { Link } from 'react-router-dom'
// import {Typography,Card,CardContent,CardMedia} from "@mui/material"
// import CheckCircleIcon from '@mui/icons-material/CheckCircle';
// import { demoThumbnailUrl,demoChannelUrl,demoVideoTitle,demoVideoUrl,demoChannelTitle } from '../utils/constant';
// function videoCard({video:{id:{videoId},snippet} }) {
//   return (
//     <Card sx={{width:{md:"320px", xs:"100%" ,sm: '300px'}, boxShadow:"none" , borderRadius:"10px"}}>
//       <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
//         <CardMedia 
//         image={snippet?.thumbnails?.high?.url}
//         sx={{height:150, width:358}}/>
//         </Link>
//         <CardContent
//         sx={{backgroundColor:"#1e1e1e", height:"70px"}}>
//           <Link  to={videoId?`/video/${videoId}`:demoVideoUrl}>
//               <Typography variant='subtitle1' fontWeight="bold" color="#FFF">
//                   {snippet?.title.slice(0,57) || demoChannelTitle.slice(0,60)}
//               </Typography>
//           </Link>
//           <Link  to={videoId?`/video/${videoId}`:demoVideoUrl}>
//               <Typography variant='subtitle2' fontWeight="bold" color="gray">
//                  {snippet?.channelTitle || demoChannelTitle}
//                  <CheckCircleIcon 
//                  sx={{fontSize:"16px", color:"gray", ml:"5px"}}
//                  />
//               </Typography>
//           </Link>
//         </CardContent>
//     </Card>
//   )
// }
// export default videoCard

import React from 'react';
import { Link } from 'react-router-dom';
import { Typography } from "@mui/material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { demoThumbnailUrl, demoChannelUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle } from '../utils/constant';
function videoCard({ video: { id: { videoId }, snippet } }) {
  return (
    <div style={styles.videoContainer}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <img 
          src={snippet?.thumbnails?.high?.url} 
          alt={snippet?.title} 
          style={styles.thumbnail} 
        />
      </Link>
      <div style={styles.content}>
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <Typography variant='subtitle1' fontWeight="bold" color="#FFF" style={styles.title}>
            {snippet?.title.slice(0, 57) || demoChannelTitle.slice(0, 60)}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
          <Typography variant='subtitle2' fontWeight="bold" color="gray" style={styles.channel}>
            {snippet?.channelTitle || demoChannelTitle}
            <CheckCircleIcon sx={{ fontSize: "16px", color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </div>
    </div>
  );
}
const styles = {
  videoContainer: {
    width: '400px',
    marginBottom: '20px',
    cursor: 'pointer',
    display: 'flex',
    flexDirection: 'column',
  },
  thumbnail: {
    width: '100%',
    height: '200px',
    borderRadius: '8px',
    objectFit: 'cover',
  },
  content: {
    padding: '10px',
  },
  title: {
    color: '#FFF',
    fontSize: '14px',
    marginBottom: '5px',
  },
  channel: {
    color: 'gray',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
  },
};

export default videoCard;
