import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset};

  html,
  body {
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    margin: 0 36rem;

    @media ${({ theme }) => theme.device.tablet} {
      margin: 0;
    }
  }

  body::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
  }

  html {
    font-size: 62.5%;
  }

  * {
    box-sizing: border-box;
  }
  
  body {
    /* background-color: #141414;
    color: #FFFFFF; */
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
  }

  a {
    text-decoration: none;
  }

  body, button {
    font-family: Pretendard, -apple-system, BlinkMacSystemFont, system-ui, Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', sans-serif;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(8rem);
    }

    to {
      opacity: 3;
      transform: none;
    }
  }
  
  .logo {
    position: absolute;
    top: 5%;
    left: 10%;
  }

  .buttons {
    position: absolute;
    bottom: 10%;
    right: 10%;
  }

  .fiction {
    position: absolute;
    z-index: 10;
    opacity: 0;
    width: 50%;
    height: 50vh;
  }
`;

export default GlobalStyle;
