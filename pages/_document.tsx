import { Head, Html, Main, NextScript } from 'next/document';
import { HtmlHTMLAttributes } from 'react';
import { colors } from 'utils';

declare global {
  interface Window {
    mixpanel: any;
  }
}

const scriptTxt = `
(function () {
  const supportsZoom = document.createElement("detect").style.zoom === "";

  function scalePage() {
    const element = document.getElementById('page');
    if (element) {
      const windowWidth = window.innerWidth;
      const maxFactor = 1.6;

      const refWidth = 375;
      const refFactor = 1;

      let scaleFactor = windowWidth / refWidth * refFactor;
      if (scaleFactor > maxFactor) {
        scaleFactor = maxFactor;
      }

      if (supportsZoom) {
        element.style.zoom = scaleFactor;
      } else {
        element.style.transform = 'scale(' + scaleFactor + ')';
      }
    }
  }

  document.addEventListener(
    'contextmenu',
    event => event.preventDefault()
  );

  window.addEventListener(
    'load',
    event => {
      const mandatoryElements = document.querySelectorAll('[id=mandatory]');

      allImgsLength = mandatoryElements.length;
      allImgsLoaded = 0;

      const onImageLoaded = () => {
        allImgsLoaded++;

        if (allImgsLoaded === allImgsLength) {
          scalePage();
          const element = document.getElementById('cover');
          if (element) {
            element.className = 'hidden';
          }
        }
      }

      for (let i = 0; i < mandatoryElements.length; i++) {
        const element = mandatoryElements[i];

        let isLoaded = element.complete && element.naturalHeight !== 0;

        if (isLoaded) {
          onImageLoaded();
        } else {
          element.addEventListener('load', function () {
            onImageLoaded();
          });
        }
      }
    }
  );

  window.addEventListener(
    'resize',
    event => {
      scalePage()
    }
  );
})();
`;

export default function Document() {
  const coverStyles = `
    position: fixed;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    background: #000;
    z-index: 9999;
    font-size: 60px;
    text-align: center;
    padding-top: 200px;
  `;

  return (
    <Html
      lang='en'
      style={
        {
          touchAction: 'pan-x pan-y !important',
          '-webkit-text-size-adjust': 'none',
          '-ms-text-size-adjust': 'none',
          userSelect: 'none',
        } as HtmlHTMLAttributes<HTMLHtmlElement>
      }>
      <title>saznaj.rs</title>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: scriptTxt }} />
        <style>{`
          @keyframes custom-fadein {
            0%   {
              opacity: 1;
            }
            100% {
              opacity: 0;
            }
          }

          @keyframes custom-fadeout {
            0% {
              opacity: 0;
            }
            100%{
              opacity: 1;
            }
          }

          .shown {
            ${coverStyles}
            opacity: 1;
          }

          .hidden {
            ${coverStyles}
            opacity: 0;
            animation-name: custom-fadein;
            animation-duration: 2s;
            pointer-events: none;
          }
        `}</style>
        <meta name='theme-color' content='#272020' />
        <meta property='og:locale' content='sr_RS' />
        <meta property='og:type' content='website' />
        <meta property='og:title' content='saznaj.rs' />
        <meta
          property='og:description'
          content='U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima.'
        />
        <meta property='og:url' content='saznaj.rs' />
        <meta property='og:image' content='https://saznaj.rs/preview.png' />
        <meta property='og:site_name' content='saznaj.rs' />
        <meta name='Twitter:card' content='Photo' />
        <meta name='Twitter:title' content='saznaj.rs' />
        <meta
          name='Twitter:description'
          content='U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima.'
        />
        <meta name='Twitter:url' content='saznaj.rs' />
        <meta name='Twitter:image' content='https://saznaj.rs/preview.png' />
        <meta name='keywords' content='saznaj,veganstvo,zivotinje'></meta>
        <meta name='author' content='saznaj.rs' />
        <meta
          name='description'
          content='U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima.'></meta>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no'></meta>
        <link rel='icon' type='image/png' href='./favicon.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='./touch.png' />
        <link rel='shortcut icon' href='./favicon.png'></link>
        <link rel='manifest' href='./site.webmanifest' />
      </Head>
      <body
        style={{
          backgroundColor: colors.background,
          color: colors.text.primary,
          margin: '0',
        }}>
        <div id='cover' className='shown' />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
