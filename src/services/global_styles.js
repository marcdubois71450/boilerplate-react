import {createGlobalStyle} from "styled-components";

import Light from './font/publicasans/PublicSans-Light.woff2';
import LightItalic from './font/publicasans/PublicSans-LightItalic.woff2';
import Regular from './font/publicasans/PublicSans-Regular.woff2';
import RegularItalic from './font/publicasans/PublicSans-RegularItalic.woff2';
import Bold from './font/publicasans/PublicSans-Bold.woff2';
import BoldItalic from './font/publicasans/PublicSans-BoldItalic.woff2';

export default createGlobalStyle`
  @font-face {
    font-family: 'PublicaSans';
    font-style: normal;
    font-weight: 300;
    src: url(${Light});
  }
  @font-face {
    font-family: 'PublicaSans';
    font-style: italic;
    font-weight: 300;
    src: url(${LightItalic});
  }
  @font-face {
    font-family: 'PublicaSans';
    font-style: normal;
    font-weight: 500;
    src: url(${Regular});
  }
  @font-face {
    font-family: 'PublicaSans';
    font-style: italic;
    font-weight: 500;
    src: url(${RegularItalic});
  }
  @font-face {
    font-family: 'PublicaSans';
    font-style: normal;
    font-weight: 700;
    src: url(${Bold});
  }
  @font-face {
    font-family: 'PublicaSans';
    font-style: italic;
    font-weight: 700;
    src: url(${BoldItalic});
  }

  * {
    font-family: 'PublicaSans', 'sans-serif';
    font-weight: 500;
    font-style: normal;
  }

  body {
    margin:0;
  }
`;
