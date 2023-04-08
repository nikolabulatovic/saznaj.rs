import { Box, Typography } from '@mui/material';
import { AspectRatioBox } from 'components';
import Image from 'next/image';
import { CSSProperties, useState } from 'react'

import styles from './DoubleImage.module.css';

interface DoubleImageProps {
  alt1: string;
  alt2: string;
  background: CSSProperties['background'];
  color: CSSProperties['color'];
  name: string;
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

const overlay: CSSProperties = {
  backdropFilter: 'blur(16px)',
  bottom: '0',
  cursor: 'pointer',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '0',
  zIndex: 1,
}

const textOverlay: CSSProperties = {
  fontFamily: 'ABChanel Corpo',
  fontStyle: 'normal',
  fontWeight: 600,
  fontSize: '9px',
  lineHeight: '16px',
  display: 'flex',
  alignItems: 'center',
  textAlign: 'center',
  letterSpacing: '0.1em',
  whiteSpace: 'nowrap',
  cursor: 'pointer',
  marginLeft: '50%',
  marginTop: '50%',
  position: 'absolute',
  transform: 'translate(-50%, -50%)',
  userSelect: 'none',
  zIndex: 2,
  '-webkit-touch-callout': 'none', /* iOS Safari */
  '-khtml-user-select': 'none', /* Konqueror HTML */
} as CSSProperties;

export const DoubleImage = ({
  alt1,
  alt2,
  background,
  color,
  name,
  url1,
  url2,
}: DoubleImageProps) => {
  const [showImage, setShowImage] = useState(false);

  const onHiddenClick = () => {
    setShowImage(true);
    window.mixpanel.track(`Hidden Image Clicked - ${name}`);
  };

  return (
    <Box sx={containerStyle}>
      <AspectRatioBox sx={itemStyle}>
        <Image src={url1} alt={alt1} layout='fill' unoptimized={true} id="mandatory" />
      </AspectRatioBox>
      <Box onClick={onHiddenClick} sx={itemStyle}>
        <Box
          sx={{
            ...overlay,
            background,
          }}
          className={showImage ? styles.shown : styles.hidden}
        />
        <Typography
          sx={{
            ...textOverlay,
            color,
            display: showImage ? 'none' : undefined,
          }}>
          Klikni da saznaš
        </Typography>
        <AspectRatioBox>
          <Image src={url2} alt={alt2} layout='fill' unoptimized={true} id="mandatory" />
        </AspectRatioBox>
      </Box>
    </Box>
  );
};
