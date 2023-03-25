import { Box, Typography } from "@mui/material";
import { BlockQuote, DoubleImage, Logo, SocialMediaCards, TakeAction, YoutubeEmbed } from "components";
import { CustomVideo } from "components/custom-video";
import { colors } from 'utils';

import styles from "./index.module.css";

const darkColorParagraph = {
  color: '#4E4646',
  fontFamily: 'Bio Sans',
  fontStyle: 'normal',
  fontWeight: 400,
  fontSize: '14px',
  lineHeight: '18px',
  letterSpacing: '0.03em',
  margin: '0px 16.32px 0px 22.94px',
}

export default function HomePage() {
  const heading1Style = {
    fontFamily: 'GothamSSm Narrow Bold',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.heading,
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
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "375px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Logo
        style={{
          margin: "auto",
          marginTop: "38.31px",
          marginBottom: "40.69px",
        }}
      />

      <Typography variant='h1' className={styles.h1} sx={{
        ...heading1Style,
        marginBottom: '35px'
      }}>Ovo ne žele<br/>da saznaš.</Typography>

      <Box sx={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12.98px',
        marginBottom: '27.36px',
      }}>
        <DoubleImage
          url1='1.png'
          url2='2.png'
          background='rgba(29, 28, 46, 0.9)'
        />

        <Typography sx={darkColorParagraph}>
        U industrijama u kojima se životinje iskorišćavaju, nikad nam nije
        prikazana istina o njihovim životima.
        </Typography>

        <DoubleImage
          url1='3.png'
          url2='4.png'
          background='rgba(43, 41, 38, 0.9)'
        />

        <Typography sx={darkColorParagraph}>
        Baš kao tvoj pas ili mačka, životinje u industrijama mesa, mleka i
        jaja osećaju bol i ne žele da budu nepravedno ubijene.{' '}
          <strong>Životinje nisu naše da sa njima radimo šta god hoćemo</strong>
        .
        </Typography>

        <CustomVideo
          video={<YoutubeEmbed embedId="YnONLDo6PWI" />}
        />
      </Box>

      <BlockQuote
        content="Životinje nisu naše da sa njima radimo šta god hoćemo."
      />

      <Typography sx={{
        ...heading1Style,
        marginTop: '89.67px',
        marginBottom: '13.79px',
      }}>
        Dokumentarci
      </Typography>

      <Typography sx={{
        ...heading2Style,
        marginTop: '95.39px',
        marginBottom: '10px'
      }}>
        Napravi korak
      </Typography>

      <Typography sx={{
        ...sectionDescriptionStyle,
        marginBottom: '13.75px'
      }}>
        Prelazak na veganstvo je najveći poduhvat koji možemo napraviti za naše zdravlje, okolinu i savest
      </Typography>

      <TakeAction sx={{ marginBottom: '103.97px' }}/>

      <Typography sx={{
        ...heading2Style,
        marginBottom: '10.56px'
      }}>
        U dobrom si društvu
      </Typography>

      <Typography sx={sectionDescriptionStyle}>
        Vegnanstvo nije sekta, ali prati naše vodiče!
      </Typography>

      <SocialMediaCards sx={{
        marginTop: '28.55px',
        marginBottom: '71.88px'
      }} />

      <BlockQuote
        content="Životinje nisu naše da sa njima radimo šta god hoćemo."
        sx={{ marginBottom: '154.92px' }}
      />

      <Logo
        width='101.47px'
        height='13.02px'
        style={{
          margin: "auto",
          marginBottom: "31.88px",
        }}
      />

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
        }}
      >
        DIZAJNIRANO U BEOGRADU®
      </Typography>

      <Typography sx={{
        fontFamily: 'ABChanel Corpo',
        fontStyle: 'normal',
        fontWeight: 600,
        fontSize: '6px',
        lineHeight: '18px',
        textAlign: 'center',
        letterSpacing: '0.17em',
        color: colors.text.acknowledgementsContent,
        marginBottom: '90.22px',
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
