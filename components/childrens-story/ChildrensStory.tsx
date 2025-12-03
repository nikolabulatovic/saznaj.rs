import { Box } from '@mui/material';
import { BoxProps } from '@mui/system';
import { AspectRatioBox } from 'components/aspect-ratio-box';
import Image from 'next/image';
import { colors } from 'utils';

const sectionDescriptionStyle = {
  fontFamily: 'Bio Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.03em',
  color: colors.text.sectionDescription,
  margin: '0px 6.55px 0px 6.55px',
};

export const ChildrensStory = ({ sx }: BoxProps) => {
  return (
    <Box sx={sx}>
      <AspectRatioBox ratio={27 / 9}>
        <a
          href='https://www.youtube.com/watch?v=-P_cEy5LPrA'
          target='_blank'
          rel='noreferrer'>
          <Image
            src='/veganbasna.jpg'
            alt='Childrens Story'
            fill
            style={{
              objectFit: 'cover',
              objectPosition: '0 -20px',
            }}
          />
        </a>
      </AspectRatioBox>
      <Box
        sx={{
          fontSize: '24px',
          marginTop: '12px',
          textAlign: 'center',
        }}>
        <a
          href='/veganbasna.pdf'
          download='Ko_je_to_na_V.pdf'
          style={{
            ...sectionDescriptionStyle,
            textDecoration: 'underline',
          }}>
          ...ili skinite e-knjigu
        </a>
      </Box>
    </Box>
  );
};
