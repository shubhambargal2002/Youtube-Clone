import { CheckCircle } from "@mui/icons-material";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import {
  demoThumbnailUrl,
  demoVideoUrl,
  demoVideoTitle,
  demoChannelUrl,
  demoChannelTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <div>
      <Card
        sx={{
          width: { xs: "100%", md: "360px" },
          boxShadow: "none",
          borderRadius: 0,
        }}
      >
        <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
          <CardMedia
            image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
            alt={snippet?.title}
            sx={{ width: { xs: "100%", md: "360px" }, height: 180 }}
          />
          <CardContent sx={{ backgroundColor: "#1e1e1e", height: "75px" }}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
              <Typography variant="subtitle1" fontWeight="bold" color="#FFF">
                {snippet?.title.slice(0, 60) || demoVideoTitle.slice(0, 60)}
              </Typography>
            </Link>

            <Link
              to={
                snippet?.channelId
                  ? `/channel/${snippet?.channelId}`
                  : demoChannelUrl
              }
            >
              <Typography variant="subtitle2" fontWeight="bold" color="gray">
                {snippet?.channelTitle.slice(0, 60) ||
                  demoChannelTitle.slice(0, 60)}
                <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
          </CardContent>
        </Link>
      </Card>
    </div>
  );
};

export default VideoCard;
