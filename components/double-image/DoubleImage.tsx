import { Box, Typography } from '@mui/material';
import { AspectRatioBox } from 'components';
import { useState } from 'react'

interface DoubleImageProps {
  url1: string;
  url2: string;
}

const containerStyle = {
  display: 'flex',
  width: '100%',
};

const itemStyle = {
  flex: '1 1 auto',
  position: 'relative',
};

const overlay = {
  backdropFilter: 'blur(16px)',
  background: 'rgba(29, 28, 46, 0.9)',
  bottom: '0',
  cursor: 'pointer',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '0',
  zIndex: 1,
};

const textOverlay = {
  cursor: 'pointer',
  margin: {
    left: '50%',
    top: '50%',
  },
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  zIndex: 2,
  '-webkit-touch-callout': 'none', /* iOS Safari */
  '-webkit-user-select': 'none', /* Safari */
  '-khtml-user-select': 'none', /* Konqueror HTML */
  '-moz-user-select': 'none', /* Old versions of Firefox */
  '-ms-user-select': 'none', /* Internet Explorer/Edge */
  'user-select': 'none', /* Non-prefixed version, currently
                                  supported by Chrome, Edge, Opera and Firefox */
};

export const DoubleImage = ({
  url1, url2
}: DoubleImageProps) => {
  const [showImage, setShowImage] = useState(false)

  return (
    <Box sx={containerStyle}>
      <AspectRatioBox sx={itemStyle}>
        <img alt='Happy cow' src={url1} />
      </AspectRatioBox>
      <Box onClick={() => setShowImage(true)} sx={itemStyle}>
        <Box sx={{
          ...overlay,
          display: showImage ? 'none' : undefined
        }} />
        <Typography
          sx={{
            ...textOverlay,
            display: showImage ? 'none' : undefined
          }}>
          Klikni da saznaš
        </Typography>
        <AspectRatioBox>
          <img alt='Sad cow' src={url2} />
        </AspectRatioBox>
      </Box>
    </Box>
  );
};
