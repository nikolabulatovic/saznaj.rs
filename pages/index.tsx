import { Box, Typography } from "@mui/material";
import { YoutubeEmbed } from "components";
import { fonts } from 'utils';

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

      <YoutubeEmbed embedId="YnONLDo6PWI" />
    </Box>
  );
}

interface StaticProps {
  props: any;
}

export async function getStaticProps(): Promise<StaticProps> {
  return { props: {} };
}
