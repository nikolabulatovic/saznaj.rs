import { Box, Typography } from '@mui/material';
import React from 'react'
import { colors, socialMedia, SocialMediaCardInfo, socialMediaCards, SocialMediaType } from 'utils';

const SocialCard = ({
  description, name
} : SocialMediaCardInfo) => {
  return (
    <React.Fragment>
      <Box sx={{
        padding: '4px 9px',
        width: '125px',
        height: '125px',
        border: '1px solid #000000',
        bgcolor: colors.socialCard,
        position: 'relative',
        boxSizing: 'border-box',
      }}>
        <Box sx={{
          position: 'absolute',
          bottom: '0px'
        }}>
          <Typography sx={{
            fontFamily: 'GothamSSm',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            color: colors.text.socialCardName,
          }}>{name}</Typography>

          <Typography sx={{
            fontFamily: 'GothamSSm',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '8px',
            lineHeight: '10px',
            letterSpacing: '0.06em',
            color: colors.text.socialCardName,
          }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </React.Fragment>
  );
}

interface SocialCardsGroupProps {
  type: SocialMediaType;
}

const SocialCardsGroup = ({ type } : SocialCardsGroupProps) => {
  return (
    <Box>
      <Typography sx={{
        fontFamily: 'Bio Sans',
        fontStyle: 'normal',
        fontWeight: 400,
        fontSize: '10px',
        lineHeight: '12px',
        letterSpacing: '0.06em',
        color: colors.text.socialCardType,
        margin: '5px 27px',
      }}>
        {type.toUpperCase()}
      </Typography>

      <Box sx={{
        display: 'flex',
        flexWrap: 'wrap',
      }}>
        {socialMediaCards.filter((card: SocialMediaCardInfo) => card.type === type).map((
          card: SocialMediaCardInfo, index: number
        ) =>
          <SocialCard key={index} {...card} />)}
      </Box>
    </Box>
  )
}

export const SocialMediaCards = () => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
    }}>
      {socialMedia.map((type: SocialMediaType) =>
        <SocialCardsGroup key={type} type={type} />)}
    </Box>
  )
}