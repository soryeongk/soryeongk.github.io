import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import { theme } from "styled-tools";

export const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NanumMyeongjo";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NanumMyeongjo-Regular.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumMyeongjo-Bold";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NanumMyeongjo-Bold.ttf") format("truetype");
  }

  @font-face {
    font-family: "NanumMyeongjo-ExtraBold";
    font-weight: normal;
    font-style: normal;
    src: url("/fonts/NanumMyeongjo-ExtraBold.ttf") format("truetype");
  }

  html {
    color: ${theme("colors.mainBlack")};
    font-family: NanumMyeongjo;
    font-size: 8px;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  input, button {
    outline: none; 
    border: none;
    background-color: transparent;                                                                                                                                                                        
  }

  button {
    cursor: pointer;
    display: flex;
    align-items: center;
  }

  /* @media only screen and (max-width: 1920px) {
    html {
      font-size: 7px;
    }
  } */

  @media only screen and (max-width: 1440px) {
    html {
      font-size: 6px;
    }
  }
`;

export default GlobalStyle;
