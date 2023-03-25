import { Box, BoxProps, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import React, { useMemo } from 'react'
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
        width: '118px',
        height: '118px',
        position: 'relative',
      }}>
        <Box sx={{
          width: '118px',
          height: '118px',
          position: "absolute",
          opacity: '0.33',
          "& img": {
            objectFit: 'cover',
            paddingLeft: '3px',
            paddingTop: '3px',
            boxSizing: 'border-box'
          }
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
              userSelect: 'none',
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
            userSelect: 'none',
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
  const cards = useMemo(
    () => {
      const filtered = socialMediaCards.filter((card: SocialMediaCardInfo) => card.type === type);
      const cardsOrganized : Array<[SocialMediaCardInfo, SocialMediaCardInfo, SocialMediaCardInfo]> = [];
      for (let i = 0; i < filtered.length; i += 3) {
        cardsOrganized.push([filtered[i], filtered[i + 1], filtered[i + 2]]);
      }
      return cardsOrganized;
    },
    [type]
  );

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
        userSelect: 'none',
      }}>
        {type}
      </Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'wrap',
      }}>
        {cards.map((
          [card1, card2, card3]: [SocialMediaCardInfo, SocialMediaCardInfo, SocialMediaCardInfo], index: number
        ) =>
          <Box key={index} sx={{ display: 'flex' }}>
            {card1 &&
            <SocialCard {...card1} />
            }

            {card2 &&
            <SocialCard {...card2} />
            }

            {card3 &&
            <SocialCard {...card3} />
            }
          </Box>)}
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