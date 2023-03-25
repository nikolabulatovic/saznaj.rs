import { Box, BoxProps } from "@mui/material"
import React, { useState } from "react";

interface CustomVideoProps extends BoxProps {
  video: any;
}

export const CustomVideo = ({
  children, video
}: CustomVideoProps) => {
  const [videoPlayed, playVideo] = useState<boolean>(false);

  return (
    <Box sx={{ position: 'relative' }} onClick={() => playVideo(true)}>
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