import { Box, BoxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { colors, socialMedia, SocialMediaCardInfo, socialMediaCards, SocialMediaType } from 'utils';

const SocialCard = ({
  description, name, link, image, isDiagonal
} : SocialMediaCardInfo) => {
  const rotatedSx = {
    transform: 'rotate(-45deg)',
    transformOrigin: 'left',
    left: '4px',
    top: '3px',
    position: 'relative',
  };

  return (
    <Link
      href={link}
      target="_blank"
    >
      <Box sx={{
        width: '113px',
        height: '113px',
        border: '6px solid #000000',
        position: 'relative',
      }}>
        <Box sx={{
          width: '113px',
          height: '113px',
          position: "absolute",
          opacity: '0.33',
          "& img": { objectFit: 'cover' }
        }}>
          <Image
            src={image}
            alt={name}
            layout="fill"
            unoptimized={true}
          />
        </Box>

        <Box sx={{
          position: 'absolute',
          bottom: '5px',
          left: '7px',
        }}>
          <Typography
            sx={{
              fontFamily: 'GothamSSm Bold',
              fontStyle: 'normal',
              fontWeight: 700,
              fontSize: '14px',
              lineHeight: '17px',
              color: colors.text.socialCardName,
              textTransform: 'uppercase',
              ...isDiagonal ? rotatedSx : {}
            }}
          >
            {name}
          </Typography>

          <Typography sx={{
            fontFamily: 'GothamSSm Bold',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '8px',
            lineHeight: '10px',
            letterSpacing: '0.06em',
            color: colors.text.socialCardName,
            textTransform: 'uppercase',
          }}>
            {description}
          </Typography>
        </Box>
      </Box>
    </Link>
  );
}

interface SocialCardsGroupProps {
  type: SocialMediaType;
}

const SocialCardsGroup = ({ type } : SocialCardsGroupProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Typography sx={{
        fontFamily: 'GothamSSm Bold',
        fontStyle: 'normal',
        fontWeight: 700,
        fontSize: '16px',
        lineHeight: '19px',
        letterSpacing: '0.06em',
        color: colors.text.socialCardType,
        margin: 'auto',
        marginBottom: '8.14px',
        textTransform: 'uppercase',
      }}>
        {type}
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

export const SocialMediaCards = ({ sx }: BoxProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      ...sx,
    }}>
      {socialMedia.map((type: SocialMediaType) =>
        <SocialCardsGroup key={type} type={type} />)}
    </Box>
  )
}