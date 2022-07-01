import React from 'react';
import { useTranslation } from 'react-i18next';

export const Auth: React.FC = () => {
  const { t } = useTranslation();
  return <>{t('Auth page')}</>;
};
