import React from 'react';
import { Typography,Card,CardContent,CardMedia,Box } from '@mui/material';
import { demoProfilePicture } from '../utils/constant';
import { Link } from 'react-router-dom';
function ChannelDetail({detail,marginTop}) {
  return (
      <Box sx={{
        boxShadow: 'none',
        borderRadius: '20px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: { xs: '330px', md: '305px' },
        height: '250px',
        margin: 'auto',
        marginTop
      }}>
        <Link to={`/channel/${detail?.id?.channelId}`} style={{display:"flex",flexDirection:"column",justifyItems:"center",alignItems:"center"}}>
            <CardMedia image={detail?.snippet?.thumbnails?.high?.url || demoProfilePicture}
            sx={{borderRadius:"50%" , height:"180px" , width:"180px" , border:"1px solid #e3e3e3"}}/>
            <Typography variant='h6' color="white">
              {detail?.snippet?.title}
            </Typography>
            {detail?.statistics?.subscriberCount &&(
              <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                {parseInt(detail?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
              </Typography>
            
            )}
        </Link>
      </Box>
  )
}

export default ChannelDetail