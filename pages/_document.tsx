import { Head, Html, Main, NextScript } from 'next/document';
import { colors } from 'utils';

declare global {
  interface Window {
    mixpanel: any;
  }
}

const scriptTxt = `
(function () {
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

      element.style.zoom = scaleFactor;
    }
  }

  document.addEventListener(
    'contextmenu',
    event => event.preventDefault()
  );

  window.addEventListener(
    'load',
    event => {
      scalePage();
      setTimeout(
        () => {
          const element = document.getElementById('cover');
          if (element) {
            element.className = 'hidden';
          }
        },
        2000
      )
    }
  );

  window.addEventListener(
    'resize',
    event => {
      scalePage()
    }
  );
})();
`

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
    <Html lang='en'>
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
        <meta name='og:locale' content='sr_RS' />
        <meta name='og:type' content='website' />
        <meta name='og:title' content='saznaj.rs' />
        <meta name='og:descritpion' content='U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima.' />
        <meta name='og:url' content='saznaj.rs' />
        <meta name='og:image' content='saznaj.rs/preview.png' />
        <meta name='og:site_name' content='saznaj.rs' />
        <meta name='Twiter:card' content='Photo' />
        <meta name='Twiter:title' content='saznaj.rs' />
        <meta name='Twiter:description' content='U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima.' />
        <meta name='Twiter:url' content='saznaj.rs' />
        <meta name='Twiter:image' content='saznaj.rs/preview.png' />
        <meta name="keywords" content="saznaj,veganstvo,zivotinje"></meta>
        <meta name="author" content="saznaj.rs" />
        <meta name="description" content="U industrijama u kojima se životinje iskorišćavaju, nikad nam nije prikazana istina o njihovim životima."></meta>
        <link rel="icon" type="image/png" href=".//favicon.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="./touch.png" />
        <link rel="shortcut icon" href="./favicon.png"></link>
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
