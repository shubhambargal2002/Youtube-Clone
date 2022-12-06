import { Box, Stack } from '@mui/material';
import React from 'react'
import VideoCard from './VideoCard';

const Videos = ({videos,direction}) => {
  if(!videos?.length) return "Loading..."
  return (
    <>
    <Stack direction={direction || "row"} flexWrap="wrap" justifyContent="start" gap={2}>
         {videos.map((item, idx)=>(
            <Box key={idx}>
                 {item.id.videoId && <VideoCard video={item} channelDetail={item}/>}
            </Box>
         ))}
    </Stack>
    </>
  )
}

export default Videos
