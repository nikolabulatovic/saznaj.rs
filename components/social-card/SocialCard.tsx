import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import { colors, socialMedia, SocialMediaCardInfo, socialMediaCards, SocialMediaType } from 'utils';

const SocialCard = ({
  description, name, link, image
} : SocialMediaCardInfo) => {
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
          <Typography sx={{
            fontFamily: 'GothamSSm',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '14px',
            lineHeight: '17px',
            color: colors.text.socialCardName,
          }}>{name.toUpperCase()}</Typography>

          <Typography sx={{
            fontFamily: 'GothamSSm',
            fontStyle: 'normal',
            fontWeight: 400,
            fontSize: '8px',
            lineHeight: '10px',
            letterSpacing: '0.06em',
            color: colors.text.socialCardName,
          }}>
            {description.toUpperCase()}
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