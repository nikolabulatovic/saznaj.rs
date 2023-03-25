import { Box, BoxProps } from "@mui/material";
import PropTypes from "prop-types";
import React from "react";

interface YoutubeEmbed extends BoxProps {
  embedId: string;
}

export const YoutubeEmbed = ({
  embedId, ...boxProps
}: YoutubeEmbed) =>
  <Box
    sx={{
      overflow: 'hidden',
      paddingBottom: '56.25%',
      position: 'relative',
      height: '0',
      ...boxProps,
    }}
  >
    <iframe
      style={{
        left: '0',
        top: '0',
        height: '100%',
        width: '100%',
        position: 'absolute',
      }}
      width="853"
      height="480"
      src={`https://www.youtube.com/embed/${embedId}?autoplay=1`}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
      title="Embedded youtube"
    />
  </Box>
;

YoutubeEmbed.propTypes = { embedId: PropTypes.string.isRequired };