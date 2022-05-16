import { css } from "styled-components";

const contentPadding = css`
  padding: 7%;
  @media ${({ theme }) => theme.device.mobile} {
    padding: 4% 5%;
  }
  @media ${({ theme }) => theme.device.tablet} {
    padding: 4% 10%;
  }
  @media ${({ theme }) => theme.device.laptop} {
    padding: 4% 240px;
  }
`;

const errMsg = css`
  color: #e30000;
  font-size: 1.2rem;
`;

const CommomBottonStyle = css`
  font-size: 1.4rem;
  border-radius: 4px;
`;
const SignFormConfirmButton = css`
  color: white;
  background-color: #075fad;
  width: 100%;
  position: relative;
  ${CommomBottonStyle};
`;

const CancelButtonCss = css`
  border: 1px solid #f3f3f3;
  background-color: #f3f3f3;
  color: var(--color__deepDarkSilverColor);
  ${CommomBottonStyle};
`;

const InactiveButtonCss = css`
  border: 1px solid #ececec;
  background-color: #ececec;
  color: var(--color__disableTextColor);
  pointer-events: none;
  ${CommomBottonStyle};
`;

const PointButtonCss = css`
  border: 1px solid #075fad;
  background-color: #075fad;
  color: white;
  ${CommomBottonStyle};
`;

const PointEmptyButtonCss = css`
  border: 1px solid #075fad;
  background-color: #fff;
  color: black;
  ${CommomBottonStyle};
`;

const lightColorButtonCss = css`
  border: 1px solid rgba(251, 176, 59, 0.3);
  background-color: #fff;
  ${CommomBottonStyle};
`;

const NormalButtinCss = css`
  border: 1px solid #fbb03b;
  background-color: #fbb03b;
  ${CommomBottonStyle};
`;

const CTAButtonCss = css`
  border: 1px solid #e73d7a;
  background-color: #e73d7a;
  color: white;
  ${CommomBottonStyle};
`;

const DeepSilverButtonCss = css`
  border: 1px solid #323232;
  background-color: #323232;
  color: white;
  ${CommomBottonStyle};
`;

const deviceSizes = {
  mobile: "576px",
  tablet: "768px",
  laptop: "992px",
  desktop: "1920px",
};

// @media ${({ theme }) => theme.device.mobile} {
// }

const device = {
  mobile: `screen and (min-width: ${deviceSizes.mobile})`,
  tablet: `screen and (min-width: ${deviceSizes.tablet})`,
  laptop: `screen and (min-width: ${deviceSizes.laptop})`,
  desktop: `screen and (min-width: ${deviceSizes.desktop})`,
};

const font = {
  fs_8: "0.8rem",
  fs_10: "1rem",
  fs_12: "1.2rem",
  fs_14: "1.4rem",
  fs_16: "1.6rem",
  fs_18: "1.8rem",
  fs_20: "2.0rem",
  fs_22: "2.2rem",
  fs_24: "2.4rem",
  fs_26: "2.6rem",
  fs_28: "2.8rem",
  fs_30: "3rem",
  fs_32: "3.2rem",
  fs_34: "3.4rem",
  fs_36: "3.6rem",
  fs_38: "3.8rem",
  fs_40: "4.0rem",
  fs_42: "4.2rem",
  fs_44: "4.4rem",
  fs_46: "4.6rem",
  fs_48: "4.8rem",
  fs_50: "5rem",
  fs_52: "5.2rem",
  fs_56: "5.6rem",
  fs_64: "6.4rem",
  fs_86: "8.6rem",
};

// #ececec;

const theme = {
  basicWidth: "320px",
  color: {
    main: "#fff",
    sub: "#fff",
    ctaColor: "#E73D7A",
    pinkColor: "#fc3e8b",
    lightColor: "rgba(251,176,59,0.3)",
    lightBlackColor: "rgba(50, 50, 50, 0.1)",
    darkColor: "#fbb03b",
    deepColor: "#3e206c",
    pointColor: "#00CBC3",
    lightPointColor: "rgb(0, 203, 195,0.1)",
    darkSilverColor: "#D4D4D4",
    lightSilverColor: "#ececec",
    deepSilverColor: "#323232",
    bgSilverColor: "#f3f3f3",
    bgLightSilverColor: "#f9f9f9",
    disableTextColor: "#c1c1c1",
    deepDarkSilverColor: "#8b8b8b",
    errorColor: "#e30000",
  },
  SignFormConfirmButton,
  InactiveButtonCss,
  CancelButtonCss,
  errMsg,
  PointButtonCss,
  PointEmptyButtonCss,
  NormalButtinCss,
  lightColorButtonCss,
  device,
  font,
  contentPadding,
  CTAButtonCss,
  DeepSilverButtonCss,
};

const nextTheme = {
  basicWidth: "320px",
  color: {
    main: "#fff",
    sub: "#fff",
    ctaColor: "#E73D7A",
    pinkColor: "#fc3e8b",
    lightColor: "rgba(251,176,59,0.3)",
    lightBlackColor: "rgba(50, 50, 50, 0.1)",
    darkColor: "#fbb03b",
    deepColor: "#3e206c",
    pointColor: "#00CBC3",
    lightPointColor: "rgb(0, 203, 195,0.1)",
    darkSilverColor: "#D4D4D4",
    lightSilverColor: "#ececec",
    deepSilverColor: "#323232",
    bgSilverColor: "#f3f3f3",
    bgLightSilverColor: "#f9f9f9",
    disableTextColor: "#c1c1c1",
    deepDarkSilverColor: "#8b8b8b",
    errorColor: "#e30000",
  },
  SignFormConfirmButton,
  InactiveButtonCss,
  CancelButtonCss,
  errMsg,
  PointButtonCss,
  PointEmptyButtonCss,
  NormalButtinCss,
  lightColorButtonCss,
  device,
  font,
  contentPadding,
  CTAButtonCss,
  DeepSilverButtonCss,
};

export { theme, nextTheme };
