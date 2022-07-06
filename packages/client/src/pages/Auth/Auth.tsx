import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { FormContainerStyled } from './Auth.styled';
import { useSingIn } from '../../lib/hooks/use-auth';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../../components/MainLayout/MainLayout';
import { Button, FormControl, Input, InputLabel, Toolbar, Typography } from '@mui/material';

export const Auth: React.FC = () => {
  const { t } = useTranslation();
  const [signInMutation] = useSingIn();
  const navigate = useNavigate();

  const handleSignIn = useCallback(
    ({ login, password }) => {
      signInMutation({
        variables: {
          input: {
            login,
            password,
          },
        },
      })
        .then(() => {
          navigate('/personal');
        })
        .catch(e => {
          alert(e);
        });
    },
    [navigate, signInMutation]
  );

  return (
    <MainLayout
      appBar={
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {t('Sign In')}
          </Typography>
          <Button color="inherit" href={'/'}>
            {t('Back')}
          </Button>
        </Toolbar>
      }
    >
      <FormContainerStyled>
        <Typography variant="h3" alignContent={'center'}>
          {t(`Sign In`)}
        </Typography>
        <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSignIn}>
          {props => (
            <form onSubmit={props.handleSubmit}>
              <FormControl variant="standard">
                <InputLabel htmlFor="component-error">{t(`Login`)}</InputLabel>
                <Input
                  id="login"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.login}
                  placeholder={t(`Login`)}
                  name="login"
                  aria-describedby="component-error-text"
                />
              </FormControl>
              <br />
              <FormControl variant="standard">
                <InputLabel htmlFor="component-error">{t(`Password`)}</InputLabel>
                <Input
                  id="password"
                  onChange={props.handleChange}
                  onBlur={props.handleBlur}
                  value={props.values.password}
                  placeholder={t(`Password`)}
                  name="password"
                  aria-describedby="component-error-text"
                />
              </FormControl>
              <br />
              <Button variant="contained" type={'submit'}>
                {t('Sign In')}
              </Button>
            </form>
          )}
        </Formik>
      </FormContainerStyled>
    </MainLayout>
  );
};
