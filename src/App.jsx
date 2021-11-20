import { ThemeProvider } from 'styled-components';
import theme from 'components/common/theme';
import GlobalStyle from 'components/common/GlobalStyle';
import Router from 'components/common/Router';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Router />
    </ThemeProvider>
  );
}

export default App;
