import { Box, Typography } from "@mui/material";
import { BlockQuote, DoubleImage, SocialMediaCards, YoutubeEmbed } from "components";
import { colors, fonts } from 'utils';

const darkColorParagraph = {
  color: '#646464',
  fontFamily: 'Bio Sans',
}

export default function HomePage() {
  const headingStyle = {
    fontFamily: 'GothamSSm',
    fontStyle: 'normal',
    fontWeight: 700,
    fontSize: '40px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.heading,
  };

  const sectionDescriptionStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 400,
    fontSize: '13px',
    lineHeight: '102%',
    textAlign: 'center',
    color: colors.text.primary,
  }

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
        maxWidth: "900px",
        width: "100%",
        margin: "auto",
      }}
    >
      <Typography variant='h2' sx={{ font: fonts.logo }}>
        SAZNAJ.RS
      </Typography>

      <Typography variant='h1'>Ovo ne žele da saznaš.</Typography>

      <DoubleImage
        url1='https://i.imgflip.com/1knrg9.jpg'
        url2='https://i.imgflip.com/1knrg9.jpg'
      />

      <Typography sx={darkColorParagraph}>
        U industrijama u kojima se životinje iskorišćavaju, nikad nam nije
        prikazana istina o njihovim životima.
      </Typography>

      <DoubleImage
        url1='https://i.imgflip.com/1knrg9.jpg'
        url2='https://i.imgflip.com/1knrg9.jpg'
      />

      <Typography sx={darkColorParagraph}>
        Baš kao tvoj pas ili mačka, životinje u industrijama mesa, mleka i
        jaja osećaju bol i ne žele da budu nepravedno ubijene.{' '}
        <strong>Životinje nisu naše da sa njima radimo šta god hoćemo</strong>
        .
      </Typography>

      <YoutubeEmbed embedId="YnONLDo6PWI" />

      <BlockQuote
        content="Životinje nisu naše da sa njima radimo šta god hoćemo."
      />

      <Typography sx={headingStyle}>
        U dobrom si društvu
      </Typography>

      <Typography sx={sectionDescriptionStyle}>
        Vegnanstvo nije sekta, ali prati naše vodiče!
      </Typography>

      <SocialMediaCards />
    </Box>
  );
}

interface StaticProps {
  props: any;
}

export async function getStaticProps(): Promise<StaticProps> {
  return { props: {} };
}
