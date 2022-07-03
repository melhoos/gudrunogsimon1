import React from 'react';
import './styles/App.scss';
import Footer from './components/footer';
import Header from './components/header';
import Main from './components/main';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { LanguageProvider } from './providers/languageProvider';

function App(): JSX.Element {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#41699d', //blue
      },
      secondary: {
        main: '#e5e3e4', //sand
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <LanguageProvider>
        <div className="App">
          <Header />
          <Main />
          <Footer />
        </div>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
