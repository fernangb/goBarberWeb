import React from 'react';
import GlobalStyles from './styles/global';
import SignIn from './pages/SignIn';
import  AppProvider from './hooks';
import Routes from './routes';
import {BrowserRouter as Router} from 'react-router-dom';

const App: React.FC = () => (
  <Router>
    <AppProvider>
      <Routes />
    </AppProvider>

    <GlobalStyles />
  </Router>
);

export default App;
