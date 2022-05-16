import { createGlobalStyle } from "styled-components";
import { normalize } from "styled-normalize";

export const GlobalStyle = createGlobalStyle`
  ${normalize}

@font-face {
  font-family: 'Montserrat-Thin';
  src: url('/fonts/Montserrat/Montserrat-Thin.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Thin.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-Thin.ttf') format('truetype');
    font-weight:300;
    font-style:normal;
    font-display: swap;
}

@font-face {
  font-family: 'Montserrat-Medium';
  src: url('/fonts/Montserrat/Montserrat-Medium.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Medium.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-Medium.ttf') format('truetype');
    font-weight:400;
    font-style:normal;
    font-display: swap;
}


@font-face {
  font-family: 'Montserrat';
  src: url('/fonts/Montserrat/Montserrat-Regular.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Regular.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-Regular.ttf') format('truetype');
    font-weight:500;
    font-style:normal;
    font-display: swap;
}

@font-face {
  font-family: 'Montserrat-SemiBold';
  src: url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-SemiBold.ttf') format('truetype');
    font-weight:600;
    font-style:normal;
    font-display: swap;
}

@font-face {
  font-family: 'Montserrat-Bold';
  src: url('/fonts/Montserrat/Montserrat-Bold.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-Bold.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-Bold.ttf') format('truetype');
    font-weight:700;
    font-style:normal;
    font-display: swap;
}


@font-face {
  font-family: 'Montserrat-ExtraBold';
  src: url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('ttf'), url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('ttf'),
    url('/fonts/Montserrat/Montserrat-ExtraBold.ttf') format('truetype');
    font-weight:900;
    font-style:normal;
    font-display: swap;
}





    :root {
        --mobile_width: 576px;
        --header_height: 70px;
        --header_mobile_height: 47px;
        --title_color: #ff4646; //변형 컬러
        // --title_color: #d82137; //로고 컬러
        --disable_color: #36373c;
    }


    html {
      /* width:100%;
            height:99.9%;
            overflow:hidden; */
  font-size: 5px;
    @media ${({ theme }) => theme.device.mobile} {
    font-size: 6px;
  }
  @media ${({ theme }) => theme.device.tablet} {
    font-size: 8px;
  }
  @media ${({ theme }) => theme.device.laptop} {
    font-size:9px;
  }
  @media ${({ theme }) => theme.device.desktop} {
    font-size: 10px;
  }

    }
    * {
    box-sizing: border-box;
    }

    body{
      overflow-x: hidden;
      color: #141112c7;
      letter-spacing: -0.05em;
      background: white;
      font-family: 'Noto Sans KR', sans-serif;
      font-size: 14px;
    }

    input {
  outline:none;
}

  p {
    padding:0;
    margin: 0;
  }

  button {
    cursor: pointer;
    outline: none;
    background: none;
    border: none;
  }


`;
