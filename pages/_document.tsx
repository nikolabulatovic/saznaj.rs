import { Head, Html, Main, NextScript } from 'next/document';
import { colors } from 'utils';

const scriptTxt = `
(function () {
  document.addEventListener(
    'contextmenu',
    event => event.preventDefault()
  );

  window.addEventListener(
    'load',
    event => {
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
      <Head>
        <script dangerouslySetInnerHTML={{ __html: scriptTxt }}/>
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
          }
        `}</style>
        <meta name="theme-color" content="#272020"/>
      </Head>
      <body
        style={{
          backgroundColor: colors.background,
          color: colors.text.primary,
          margin: '0',
        }}
      >
        <div
          id="cover"
          className='shown'
        />

        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
