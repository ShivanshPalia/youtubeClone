import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from 'react-player'
import { Typography, Box, Stack,CardMedia } from "@mui/material";
import Videos from "./videos";
import { FetchApi } from "../utils/FetchApi";

function VideoDetail() {
  const [videos,setVideos] = useState([])
  const [videoDetail,setVideoDetail] = useState();
  const [picture,setPicture] = useState();
  console.log(videos);
  const {id} = useParams();
  useEffect(()=>{
    FetchApi(`videos?part=contentDetails,snippet,statistics&id=${id}`).then((data)=>{setVideoDetail(data.items[0])})
    FetchApi(`search?part=id,snippet&relatedToVideoId=${id}&type=video`).then((data)=>{setVideos(data.items)})
    FetchApi(`search?part=id,snippet&id=${id}`).then((data)=>{setPicture(data.items[0])})
  },[id])
  if(!videoDetail?.snippet) return (<div>Loading...</div>);
  const { snippet: { title, channelId, channelTitle }, statistics: { viewCount, likeCount } } = videoDetail;
  return (
   <Box minHeight="95vh">
    <Stack direction={{xs:"column",md:"row"}}>
      <Box flex={1}>
        <Box sx={{top:"86px" , objectFit:"cover", borderRadius:"10px",marginLeft: "70px",marginRight:"40px",borderRadius:"20%"}}>
          <div style={{objectFit:"cover"}}>
          <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
</div>
            <Typography color="white" variant="h6" fontWeight="bold" p={1}>
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{ color: "#fff" }} py={1} px={1}>
                <Link to={`/channel/${channelId}`}>
                    <Typography variant={{sm:"subtitle1",md:"h6"}} color="#fff">
                   {channelTitle}
                    </Typography>
                </Link>
                <Stack direction="row" gap="20px" alignItems="center">
                      <Typography variant="body1" sx={{opacity:0.7}}>
                        {parseInt(viewCount).toLocaleString()} views
                      </Typography>
                      <Typography variant="body1" sx={{opacity:0.7}}>
                        {parseInt(likeCount).toLocaleString()} likes
                      </Typography>
                </Stack>
            </Stack>
        </Box>
      </Box>
      <Box justifyContent="centre" alignItems="center" sx={{paddingRight:"20px"}}>
        <Videos videos={videos} />
      </Box>
    </Stack>
   </Box>
   
  )
}
export default VideoDetail