import { Box, Typography } from "@mui/material";
import { BlockQuote, DoubleImage, YoutubeEmbed } from "components";
import { fonts } from 'utils';

const darkColorParagraph = {
  color: '#646464',
  fontFamily: 'Bio Sans',
}

export default function HomePage() {
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
    </Box>
  );
}

interface StaticProps {
  props: any;
}

export async function getStaticProps(): Promise<StaticProps> {
  return { props: {} };
}
