import { Head, Html, Main, NextScript } from 'next/document';
import { colors } from 'utils';

export default function Document() {
  return (
    <Html lang='en'>
      <Head />
      <body
        style={{
          backgroundColor: colors.background,
          color: colors.text.primary,
          margin: '0',
        }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
