import { Box, BoxProps } from '@mui/system';

interface AspectRatioBoxProps extends BoxProps {
  ratio?: number;
}

export const AspectRatioBox = ({
  children,
  ratio = 1,
  sx,
}: AspectRatioBoxProps) =>
  <Box
    sx={{
      ...sx,
      position: 'relative',
    }}>
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        '& > *': {
          height: '100%',
          width: '100%',
        },
      }}>
      {children}
    </Box>
    <Box style={{ paddingBottom: 1 / ratio * 100 + '%' }} />
  </Box>
;
