import { Box } from "@mui/material";
import { YoutubeEmbed } from "components";

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
      <Box sx={{ margin: "auto", width: "100%" }}>SAZNAJ.RS</Box>

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
