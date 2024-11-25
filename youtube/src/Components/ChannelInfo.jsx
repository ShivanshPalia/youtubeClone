import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import { FetchApi } from '../utils/FetchApi';
import { useParams } from 'react-router-dom';
import ChannelDetail from './ChannelDetail';
import Videos from './videos';

function ChannelInfo() {
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    FetchApi(`channels?part=snippet&id=${id}`).then((data) => setChannelDetail(data.items[0]));
    FetchApi(`search?channelId=${id}&part=snippet%2Cid&order=date`).then((data) =>
      setVideos(data?.items)
    );
  }, [id]);

  return (
   
    <Box minHeight="95vh">
    <Box>
      <div 
        style={{
          background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(88,9,121,0.9103290974592962) 39%, rgba(0,212,255,1) 100%)',
          height: "300px",
          zIndex: "10"
        }}
      />
      <ChannelDetail detail={channelDetail} marginTop="-93px" />
    </Box>
    <Box p={4} >
      <Box>
        <Videos videos={videos} />
      </Box>
    </Box>
  </Box>
  );
}

export default ChannelInfo;

