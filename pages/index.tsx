import { Box, Typography } from '@mui/material';
import {
  AspectRatioBox,
  Carousel,
  CustomVideo,
  DoubleImage,
  SocialMediaCards,
  TakeAction,
  YoutubeEmbed,
} from 'components';
import Image from 'next/image';
import { colors } from 'utils';

import styles from './index.module.css';

const paragraphCommon = {
  color: '#4E4646',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.03em',
  userSelect: 'none',
};

const darkColorParagraph = {
  ...paragraphCommon,
  fontFamily: 'Bio Sans',
  margin: '0px 16.32px 0px 22.94px',
};

export default function HomePage() {
  const heading1Style = {
    fontFamily: 'GothamSSm Narrow Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.heading,
    userSelect: 'none',
  };

  const heading2Style = {
    fontFamily: 'GothamSSm Extra Light',
    fontStyle: 'normal',
    fontWeight: 250,
    fontSize: '30px',
    lineHeight: '102%',
    textAlign: 'center',
    letterSpacing: '0.01em',
    textTransform: 'uppercase',
    color: colors.text.heading,
    userSelect: 'none',
  };

  const heading3Style = {
    fontFamily: 'GothamSSm Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '34px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.heading,
    userSelect: 'none',
    textTransform: 'uppercase',
  };

  const sectionDescriptionStyle = {
    fontFamily: 'Bio Sans',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '14px',
    lineHeight: '18px',
    textAlign: 'center',
    letterSpacing: '0.03em',
    color: colors.text.sectionDescription,
    margin: '0px 6.55px 0px 6.55px',
    userSelect: 'none',
  };

  return (
    <Box
      id='page'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        maxWidth: '375px',
        width: '100%',
        margin: 'auto',
        transformOrigin: 'top',
      }}>
      <AspectRatioBox
        ratio={577 / 96}
        sx={{
          mx: 'auto',
          marginTop: '38.31px',
          marginBottom: '40.69px',
          width: '183.95px',
        }}>
        <Image
          src='logo.png'
          alt='1'
          layout='fill'
          unoptimized={true}
          id='mandatory'
        />
      </AspectRatioBox>

      <Typography
        variant='h1'
        className={styles.h1}
        sx={{
          ...heading1Style,
          marginBottom: '35px',
        }}>
        Ovo ne žele
        <br />
        da saznaš.
      </Typography>

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12.98px',
          marginBottom: '27.36px',
        }}>
        <DoubleImage
          alt1='Srećne krave iz Milkine kampanje "Pokaži nežnost"'
          alt2='Krvava krava u industriji'
          background='rgba(29, 28, 46, 0.9)'
          color={colors.text.clickToFindOut.cow}
          name='Krava'
          url1='srecne-krave-milka.png'
          url2='krvava-krava.png'
        />

        <Typography sx={darkColorParagraph}>
          U industrijama u kojima se životinje iskorišćavaju, nikad nam nije
          prikazana istina o njihovim životima.
        </Typography>

        <DoubleImage
          alt1='Pas tužnog pogleda'
          alt2='Prase tuguje zbog smrti svog brata u industriji mesa'
          background='rgba(43, 41, 38, 0.9)'
          color={colors.text.clickToFindOut.dog}
          name='Prase'
          url1='pas.png'
          url2='prase.png'
        />

        <Typography sx={darkColorParagraph}>
          Baš kao tvoj pas ili mačka, životinje u industrijama mesa, mleka i
          jaja osećaju bol i ne žele da budu nepravedno ubijene.{' '}
          <Typography
            component='span'
            sx={{
              ...paragraphCommon,
              fontFamily: 'Bio Sans Bold',
            }}>
            Životinje nisu naše da sa njima radimo šta god hoćemo.
          </Typography>
        </Typography>

        <CustomVideo
          name='Gary'
          video={<YoutubeEmbed embedId='YnONLDo6PWI' />}
          sx={{ mt: 2.5 }}>
          <AspectRatioBox ratio={16 / 9} sx={{}}>
            <img src='gary.jpg' alt='Najbolji govor koji ćeš ikada čuti' />
          </AspectRatioBox>
        </CustomVideo>
      </Box>

      <AspectRatioBox ratio={889 / 337} sx={{ mx: '73.29px' }}>
        <Image
          src='zivotinjenisunase.png'
          alt='Životinje nisu naše da sa njima radimo šta god hoćemo'
          layout='fill'
          unoptimized={true}
        />
      </AspectRatioBox>

      <Typography
        sx={{
          ...heading3Style,
          marginTop: '89.67px',
          marginBottom: '13.79px',
        }}>
        Dokumentarci
      </Typography>

      <Carousel />

      <Typography
        sx={{
          ...heading2Style,
          marginTop: '95.39px',
          marginBottom: '10px',
        }}>
        Napravi korak
      </Typography>

      <Typography
        sx={{
          ...sectionDescriptionStyle,
          marginBottom: '13.75px',
        }}>
        Prelazak na veganstvo je najveći poduhvat koji možemo napraviti za naše
        zdravlje, okolinu i savest
      </Typography>

      <TakeAction sx={{ marginBottom: '103.97px' }} />

      <Typography
        sx={{
          ...heading2Style,
          marginBottom: '10.56px',
        }}>
        U dobrom si društvu
      </Typography>

      <Typography sx={sectionDescriptionStyle}>
        Veganstvo nije sekta, ali prati naše vodiče!
      </Typography>

      <SocialMediaCards
        sx={{
          marginTop: '28.55px',
          marginBottom: '71.88px',
        }}
      />

      <AspectRatioBox
        ratio={889 / 337}
        sx={{
          mx: '73.29px',
          mb: '154.92px',
        }}>
        <Image
          src='zivotinjenisunase.png'
          alt='1'
          layout='fill'
          unoptimized={true}
        />
      </AspectRatioBox>

      <AspectRatioBox
        ratio={577 / 96}
        sx={{
          mx: 'auto',
          mb: '21.88px',
          width: '141.47px',
        }}>
        <Image src='logo.png' alt='1' layout='fill' unoptimized={true} />
      </AspectRatioBox>

      <Typography
        sx={{
          fontFamily: 'ABChanel Corpo',
          fontStyle: 'normal',
          fontWeight: 400,
          fontSize: '9px',
          lineHeight: '18px',
          mb: '21.88px',
          textAlign: 'center',
          letterSpacing: '0.05em',
          color: colors.text.acknowledgementsContent,
          userSelect: 'none',
        }}>
        Piši nam na{' '}
        <Typography
          component='span'
          sx={{
            fontFamily: 'ABChanel Corpo',
            fontStyle: 'normal',
            fontWeight: 700,
            fontSize: '9px',
            lineHeight: '18px',
            textAlign: 'center',
            letterSpacing: '0.05em',
            color: colors.text.acknowledgementsHeading,
          }}>
          saznaj.rs@proton.me
        </Typography>
      </Typography>

      <Typography
        sx={{
          fontFamily: 'ABChanel Corpo',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '9px',
          lineHeight: '18px',
          textAlign: 'center',
          letterSpacing: '0.05em',
          color: colors.text.acknowledgementsHeading,
          userSelect: 'none',
        }}>
        DIZAJNIRANO U BEOGRADU®
      </Typography>

      <Typography
        sx={{
          fontFamily: 'ABChanel Corpo',
          fontStyle: 'normal',
          fontWeight: 600,
          fontSize: '6px',
          lineHeight: '18px',
          textAlign: 'center',
          letterSpacing: '0.17em',
          color: colors.text.acknowledgementsContent,
          marginBottom: '90.22px',
          userSelect: 'none',
        }}>
        Autori pomenutih sadžaja nisu afilisani sa saznaj.rs.
      </Typography>
    </Box>
  );
}

interface StaticProps {
  props: any;
}

export async function getStaticProps(): Promise<StaticProps> {
  return { props: {} };
}
