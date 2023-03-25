import Glide, {
  Breakpoints,
  Controls,
} from '@glidejs/glide/dist/glide.modular.esm';
import { Box, Button, ListItem } from '@mui/material';
import { AspectRatioBox, CustomVideo, YoutubeEmbed } from 'components';
import { useEffect, useState } from 'react';
import { colors } from 'utils';

interface CarouselItem {
  title: string;
  subtext: string;
  imageUrl: string;
  videoEmbedId: string;
  opacity: number;
}

const items: Array<CarouselItem> = [
  {
    title: 'The Game Changers',
    subtext: 'Fueled by the truth.',
    imageUrl: '/carousel-images/the-game-changers.jpg',
    videoEmbedId: 'iSpglxHTJVM',
    opacity: 1,
  },
  {
    title: 'Seaspiracy',
    subtext:
      'Ostrašćen svojom ljubavlju ka moru, poznati reditelj se upućuje u vode i otkriva alarmantnu korupciju svetskih razmera.',
    imageUrl: '/carousel-images/seaspiracy.jpg',
    videoEmbedId: '1Q5CXN7soQg',
    opacity: 0.45,
  },
  {
    title: 'Dominion',
    subtext:
      'Istina o stočarstvu nije samo nesvarljiva, već postavlja i krupnije pitanje — ko smo mi da vladamo nad drugima?',
    imageUrl: '/carousel-images/dominion.jpg',
    videoEmbedId: 'n9NiOwibz14',
    opacity: 1,
  },
  {
    title: 'What the Health!?',
    subtext:
      'Neustrašivi reditelj otkriva verovatno najveću zdravstvenu zaveru naše današnjice.',
    imageUrl: '/carousel-images/what-the-health.jpg',
    videoEmbedId: 'Jf44vLndiRM',
    opacity: 0.3,
  },
  {
    title: 'Cowspiracy',
    subtext:
      'Ekolog traga za istinskim rešenjima hitnih pitanja životne sredine i održivosti.',
    imageUrl: '/carousel-images/cowspiracy.jpg',
    videoEmbedId: 'nV04zyfLyN4',
    opacity: 0.3,
  },
  {
    title: 'Earthlings',
    subtext:
      'Posle dijagnoze raka, Patrik se vraća u svoju rodnu Australiju kako bi preminuo u miru i tišini. Njegov plan se zakomplikuje kada sreće dečaka koji je upravo izgubio roditelje.',
    imageUrl: '/carousel-images/earthlings.jpg',
    videoEmbedId: 'Hm7Babs_FJU',
    opacity: 0.35,
  },
];

const glideStyle = {
  position: 'relative',
  padding: '0 15px',
  width: '100%',
  boxSizing: 'border-box',

  '*': { boxSizing: 'inherit' },

  '& .glide__track': { overflow: 'hidden' },

  '& .glide__slides': {
    position: 'relative',
    width: '100%',
    listStyle: 'none',
    backfaceVisibility: 'hidden',
    transformStyle: 'preserve-3d',
    touchAction: 'pan-Y',
    overflow: 'hidden',
    margin: 0,
    padding: 0,
    whiteSpace: 'nowrap',
    display: 'flex',
    flexWrap: 'nowrap',
    willChange: 'transform',

    '& .glide__slides--dragging': { userSelect: 'none' },
  },
};

const slideItemStyle = {
  cursor: 'pointer',
  boxShadow: '0px 4px 38px rgba(149, 136, 136, 0.25)',
  width: '345px !important',
  height: '100%',
  flexDirection: 'column',
  flexShrink: 0,
  padding: 0,
  whiteSpace: 'normal',
  userSelect: 'none',
  '-webkit-touch-callout': 'none',
  '-webkit-tap-highlight-color': 'transparent',

  '& a': {
    userSelect: 'none',
    '-webkit-user-drag': 'none',
  },

  '& .glide__slide-text-wrapper': {
    bottom: 0,
    left: 0,
    padding: '1rem',
    position: 'absolute',
    textAlign: 'left',

    '& > h3': {
      fontFamily: 'GothamSsm Light',
      color: colors.slider.slideHeader,
    },

    '& > p': {
      fontFamily: 'Bio Sans',
      fontSize: '0.92rem',
      color: colors.slider.slideSubtext
    },
  },

  '& > div': { width: '100%' },
};

const slideImageStyle = {
  width: '100%',

  '& img': {
    objectFit: 'cover',
    borderRadius: '4px',
  },
};

const slideImageOverlay = {
  background:
    'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.2) 100%), radial-gradient(115.97% 115.97% at 50% 0%, rgba(176, 169, 162, 0.29) 0%, rgba(0, 0, 0, 0.29) 100%)',
  left: 0,
  height: '100%',
  position: 'absolute',
  top: 0,
  width: '100%',
};

const playButtonStyle = {
  position: 'absolute',
  right: '1rem',
  top: '1rem',
  width: '15%',
};

const sliderBullets = {
  display: 'flex',
  marginTop: '0.56rem',

  '& > button': {
    color: colors.slider.buttonClickTransitionColor,
    flex: '1 1',
    margin: '0 0.3rem',
    minWidth: 'unset',

    '&:first-of-type': { marginLeft: 0 },
    '&:last-of-type': { marginRight: 0 },

    '> div::after': {
      content: '""',
      background: colors.slider.activeButton,
      bottom: '-7px',
      height: '0.125rem',
      left: 0,
      opacity: 0,
      position: 'absolute',
      transition: 'opacity 0.3s ease-in',
      width: '100%',
    },

    '&.glide__bullet--active > div::after': {
      opacity: 1,
      transition: 'opacity 0.5s 0.3s ease-out',
    },
  },
};

export const Carousel = () => {
  const [autoplayInterval, setAutoplayInterval] = useState<any>(null);
  const [slider, setSlider] = useState<any>(null);
  const [stopAutoplay, setStopAutoplay] = useState(false);

  useEffect(
    () => {
      const glide = new Glide(
        '.glide',
        { autoplay: 4200 }
      ).mount({
        Controls,
        Breakpoints,
      });
      setSlider(glide);
    },
    []
  )

  useEffect(
    () => {
      if (slider) {
        if (stopAutoplay && autoplayInterval) {
          clearInterval(autoplayInterval);
        } else {
          const interval = setInterval(
            () => {
              slider.go('>');
            },
            4200
          );
          setAutoplayInterval(interval);
        }
      }

      return () => {
        clearInterval(autoplayInterval);
      };
    },
    [slider, stopAutoplay]
  );

  return (
    <Box className='glide' sx={glideStyle}>
      <div className='glide__track' data-glide-el='track'>
        <ul className='glide__slides'>
          {items.map((item) =>
            <ListItem
              className='glide__slide'
              key={item.title}
              onClick={() => setStopAutoplay(true)}
              sx={slideItemStyle}>
              <CustomVideo video={<YoutubeEmbed embedId={item.videoEmbedId} />}>
                <AspectRatioBox ratio={1.777777} sx={slideImageStyle}>
                  <Box sx={slideImageOverlay} />
                  <img src={item.imageUrl} alt={item.title} style={{ opacity: item.opacity }} />
                </AspectRatioBox>
                <Box sx={playButtonStyle}>
                  <AspectRatioBox>
                    <img src='/documentary-play.svg' alt='Play' />
                  </AspectRatioBox>
                </Box>
                <div className='glide__slide-text-wrapper'>
                  <h3>{item.title}</h3>
                  <p>{item.subtext}</p>
                </div>
              </CustomVideo>
            </ListItem>)}
        </ul>
      </div>
      <Box
        className='glide__bullets'
        data-glide-el='controls[nav]'
        sx={sliderBullets}>
        {items.map((
          item, index
        ) =>
          <Button
            className='glide__bullet'
            data-glide-dir={`=${index}`}
            key={item.title}
            onClick={() => setStopAutoplay(true)}
            sx={slideItemStyle}>
            <AspectRatioBox ratio={1.777777} sx={slideImageStyle}>
              <img src={item.imageUrl} alt={item.title} />
            </AspectRatioBox>
          </Button>)}
      </Box>
    </Box>
  );
};
