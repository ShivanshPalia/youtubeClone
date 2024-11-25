import React from 'react'
import { Link } from 'react-router-dom'
import { CardMedia,Card,CardContent } from '@mui/material'
import { demoThumbnailUrl,demoChannelUrl,demoVideoTitle,demoVideoUrl,demoChannelTitle } from '../utils/constant';
import { formatDistanceToNow } from 'date-fns';

function searchPage({video:{id:{videoId},snippet} }) {
    const givenDate = new Date(snippet.publishedAt); 
    const relativeTime = formatDistanceToNow(givenDate, { addSuffix: true });
  return (
    <Card sx={{display:"flex",height:"290px",background:"black"}}>
        <Link to={videoId?`/video/${videoId}`:demoVideoUrl}>
            <div style={{display:"flex"}}>

            
           <CardMedia
           className='search'
            image={snippet?.thumbnails?.high?.url}
            sx={{height:"300px",width:"400px",marginRight:"20px",objectFit:"cover"}}
            />
           <CardContent sx={{display:"flex",flexDirection:"column",paddingTop:"30px"}}>
           <div >
                <div style={{color:"white",fontSize:"20px",fontWeight:"500",marginBottom:"15px"}}>
                {snippet?.title.slice(0,80)}
                </div>
                
                <div style={{color:"#9b9b9b",paddingBottom:"15px"}}>
                    {relativeTime}
                </div>
                <div style={{color:"#9b9b9b"}}>
                    {snippet.channelTitle}
                </div>
            </div>
           </CardContent>
            
            </div>
        </Link>
    </Card>
  )
}

export default searchPage