import React from 'react';
import { useTranslation } from 'react-i18next';

export const Main: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('Main page')}</>;
};
