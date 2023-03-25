import { Box, BoxProps } from "@mui/material"
import { AspectRatioBox } from "components/aspect-ratio-box";
import Image from "next/image";
import React, { useState } from "react";

interface CustomVideoProps extends BoxProps {
  video: any;
}

export const CustomVideo = ({ video }: CustomVideoProps) => {
  const [videoPlayed, playVideo] = useState<boolean>(false);

  return (
    <Box sx={{ position: 'relative' }} onClick={() => playVideo(true)}>
      <AspectRatioBox ratio={16 / 9}>
        {!videoPlayed &&
            <Image
              src='gary.jpg'
              alt='gary'
              layout="fill"
              unoptimized={true}
            />
            ||
            video
        }
      </AspectRatioBox>

      <Box sx={{
        position: 'absolute',
        bottom: 0,
        right: 0,
        width: '15%',
        height: '27%',
        cursor: 'pointer',
      }}/>
    </Box>
  )
}