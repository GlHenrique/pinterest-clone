import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import { GlobalStyle } from './styles';

const App: React.FC = () => (
  <>
    <GlobalStyle />
    <Header />
    <Main />
  </>
);

export default App;
