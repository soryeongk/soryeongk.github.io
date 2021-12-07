function calcRem(size: number) {
  return `${+size / 10}rem`;
}

const fontSizes = {
  headLine: calcRem(30),
  title: calcRem(30),
  paragTitle: calcRem(25),
  subTitle: calcRem(23),
  display: calcRem(20),
  caption: calcRem(15),
};

const fonts = {
  headLine: `
    font-family: NanumMyeongjo-ExtraBold;
    letter-spacing: -0.04em;
    line-height: 1;
    font-size: ${fontSizes.headLine};
  `,
  title: `
    letter-spacing: -0.04em;
    line-height: 1;  
    font-size: ${fontSizes.title};
  `,
  subTitle: `
    letter-spacing: -0.04em;
    line-height: 1;  
    font-size: ${fontSizes.subTitle};
  `,
  caption: `
    line-height: 1.3;
    letter-spacing: -0.04em;
    font-size: ${fontSizes.caption};
  `,
  captionBold: `
    font-family: NanumMyeongjo-ExtraBold;
    line-height: 1.3;
    letter-spacing: -0.04em;
    font-size: ${fontSizes.caption};
  `,
  display: `
    letter-spacing: -0.04em;
    line-height: 1;  
    font-size: ${fontSizes.display};
  `,
  displayBold: `
    font-family: NanumMyeongjo-ExtraBold;
    letter-spacing: -0.04em;
    line-height: 1;
    font-size: ${fontSizes.display};
  `,
  paragraph: `
    line-height: 1.3;
    letter-spacing: -0.04em;
    font-size: ${fontSizes.display};
  `,
  paragraphBold: `
    line-height: 1.3;
    font-family: NanumMyeongjo-Bold;
    letter-spacing: -0.04em;
    font-size: ${fontSizes.display};
  `,
  paragraphTitle: `
    line-height: 1.3;
    font-family: NanumMyeongjo-Bold;
    letter-spacing: -0.04em;
    font-size: ${fontSizes.paragTitle};
  `,
};

const colors = {
  mainBlack: "#171516",
  mainGray: "#484848",
  mainWhite: "#EFEFEF",
  mainPoint: "#FFB800",
};

const deviceSizes = {
  tablet: "768px",
  mobile: "360px",
};

const device = {
  mobileS: `only screen and (max-width: ${deviceSizes.mobile})`,
  tablet: `only screen and (max-width: ${deviceSizes.tablet})`,
};

export const theme = {
  fontSizes,
  fonts,
  colors,
  deviceSizes,
  device,
};
