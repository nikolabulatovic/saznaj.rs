import { Box, BoxProps } from "@mui/material"
import React, { useState } from "react";

interface CustomVideoProps extends BoxProps {
  name: string;
  video: any;
}

export const CustomVideo = ({
  children, name, video,
}: CustomVideoProps) => {
  const [videoPlayed, playVideo] = useState<boolean>(false);

  const onVideoClick = () => {
    playVideo(true);
    window.mixpanel.track(`Video Clicked - ${name}`);
  }

  return (
    <Box sx={{ position: 'relative' }} onClick={onVideoClick}>
      {!videoPlayed && children || video}

      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          right: 0,
          width: '15%',
          height: '27%',
          cursor: 'pointer',
        }}
      />
    </Box>
  );
}