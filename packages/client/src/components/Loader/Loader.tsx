import React from 'react';
import { LoaderStyled } from './Loader.styled';
import { CircularProgress } from '@mui/material';

export const Loader: React.FC = () => (
  <LoaderStyled>
    <CircularProgress />
  </LoaderStyled>
);
