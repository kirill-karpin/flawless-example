import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return (
    <>
      {t('Main page')}
      <Link to={'/auth'}>auth</Link>
    </>
  );
};
