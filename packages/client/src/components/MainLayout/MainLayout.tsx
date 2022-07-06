import React from 'react';
import { useTranslation } from 'react-i18next';

import { AppBar, Box, Container } from '@mui/material';

interface MainLayoutPropsInterface {
  appBar?: React.ReactNode | React.ReactNode[];
  children?: React.ReactNode;
}

export const MainLayout: React.FC<MainLayoutPropsInterface> = ({ appBar, children, ...props }) => {
  const { t } = useTranslation();

  return (
    <Container maxWidth="xl">
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">{appBar}</AppBar>
      </Box>
      <Box component="main" sx={{ p: 3 }}>
        {children}
      </Box>
    </Container>
  );
};
