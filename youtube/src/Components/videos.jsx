import React from 'react';
import { Box } from '@mui/material';
import VideoCard from './videoCard';
import ChannelDetail from './ChannelDetail';
function Videos({ videos }) {
  return (
    <Box
      // sx={{
      //   display: 'grid',
      //   gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      //   gap: 2, 
      // }}
      sx={{display:"flex",flexWrap:"Wrap",gap:3}}
    >
      {videos.map((item, idx) => (
        <Box key={idx}  >
          {item.id.videoId && <VideoCard video={item} />}
          {/* {item.id.channelId && <ChannelDetail detail={item} />} */}
        </Box>
      ))}
    </Box>
  );
}

export default Videos;
