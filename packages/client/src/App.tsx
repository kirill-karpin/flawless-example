import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
        <BrowserRouter key={'main-app-key'}>
          <React.Suspense fallback={<Loader />}>
            <Routes>
              <Route path="profile" element={<Personal />} />
              <Route path="auth" element={<Auth />} />
              <Route index element={<Main />} />
            </Routes>
          </React.Suspense>
        </BrowserRouter>
        <GlobalStyle />
      </ThemeProvider>
    </React.StrictMode>
  );
};
