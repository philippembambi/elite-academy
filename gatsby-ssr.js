import * as React from 'react';

export const onRenderBody = ({ setHeadComponents }) => {
  setHeadComponents([
    <link
      rel="preload"
      href="/fonts/GothamMedium.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="GothamMedium"
    />,
    <link
      rel="preload"
      href="/fonts/GothamLight.woff2"
      as="font"
      type="font/woff2"
      crossOrigin="anonymous"
      key="GothamLight"
    />,
  ]);
};
