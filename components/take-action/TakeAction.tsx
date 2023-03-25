import { Box, BoxProps } from "@mui/material"
import Image from "next/image"
import Link from "next/link"
import { takeActionBanners, TakeActionInfo } from "utils"

export const TakeAction = ({ sx }: BoxProps) => {
  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      gap: 0.75,
      ...sx,
    }}>
      {takeActionBanners.map(({
        link, image, name
      }: TakeActionInfo) =>
        <Box key={name} sx={{
          position: 'relative',
          height: '69px'
        }}>
          <Link href={link} target="_blank">
            <Box sx={{
              width: '100%',
              height: '69px',
              position: "absolute",
            }}>
              <Image
                src={image}
                alt={name}
                layout="fill"
                unoptimized={true}
              />
            </Box>
          </Link>
        </Box>)}
    </Box>
  )
}