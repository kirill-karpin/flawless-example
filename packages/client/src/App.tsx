import React, { lazy } from 'react';
import { Router } from 'react-router';
import { Route, Routes } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { GlobalStyle } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './utils/theme';
import { Loader } from './components/Loader/Loader';

const Main = lazy(() => import('./pages/Main/Main').then(module => ({ default: module.Main })));
const Auth = lazy(() => import('./pages/Auth/Auth').then(module => ({ default: module.Auth })));
const Personal = lazy(() => import('./pages/Personal/Personal').then(module => ({ default: module.Personal })));

const history = createBrowserHistory();

history.listen(() => {});

export const App: React.FC = () => {
  return (
    <React.StrictMode>
      <ThemeProvider theme={defaultTheme}>
        <Router key={'main-app-key'} navigator={history} location={{}}>
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/profile" element={<Personal />} />
            </Routes>
          </React.Suspense>
        </Router>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
};
