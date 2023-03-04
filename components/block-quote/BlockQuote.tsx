import { Box, Typography } from '@mui/material';
import React from 'react';
import { colors } from 'utils';

interface BlockQuoteProps {
  content: string;
}

export const BlockQuote = ({ content } : BlockQuoteProps) => {
  const quoteSx = {
    fontFamily: 'Didot',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '82px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.heading,
    position: 'absolute',
  };

  const contentSx = {
    fontFamily: 'Roboto',
    fontStyle: 'italic',
    fontWeight: '400',
    fontSize: '26px',
    lineHeight: '102%',
    textAlign: 'center',
    width: '221px',
    margin: 'auto',
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '221px',
      margin: 'auto',
      position: 'relative',
    }}>
      <Typography sx={{
        ...quoteSx,
        top: '-15px',
        left: '-72px'
      }}>“</Typography>
      <Typography sx={contentSx}>{content}</Typography>
      <Typography sx={{
        ...quoteSx,
        bottom: '-15px',
        right: '-24px'
      }}>„</Typography>
    </Box>
  )
}