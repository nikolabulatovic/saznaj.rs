import { Box, BoxProps, Typography } from '@mui/material';
import React from 'react';
import { colors } from 'utils';

interface BlockQuoteProps extends BoxProps {
  content: string;
}

export const BlockQuote = ({
  content, sx
} : BlockQuoteProps) => {
  const contentSx = {
    fontFamily: 'Diazo MVB Rough2 Cond',
    fontStyle: 'normal',
    fontWeight: '400',
    fontSize: '28px',
    lineHeight: '102%',
    textAlign: 'center',
    width: '221px',
    margin: 'auto',
    color: colors.text.heading,
    userSelect: 'none',
  }

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      width: '221px',
      margin: 'auto',
      position: 'relative',
      ...sx,
    }}>
      <Typography sx={contentSx}>{content}</Typography>
    </Box>
  )
}