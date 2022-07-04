import React, { useCallback } from 'react';
import { Formik } from 'formik';
import { useTranslation } from 'react-i18next';

import { Form, Title } from './Auth.styled';
import { useSingIn } from '../../lib/hooks/use-auth';
import { useNavigate } from 'react-router-dom';

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
          navigate('/profile');
        })
        .catch(e => {
          alert(e);
        });
    },
    [navigate, signInMutation]
  );

  return (
    <Form>
      <Title>{t(`Авторизация`)}</Title>
      <Formik initialValues={{ login: '', password: '' }} onSubmit={handleSignIn}>
        {props => (
          <form onSubmit={props.handleSubmit}>
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.login}
              placeholder={t(`Логин`)}
              name="login"
            />
            <input
              type="text"
              onChange={props.handleChange}
              onBlur={props.handleBlur}
              value={props.values.password}
              placeholder={t(`Пароль`)}
              name="password"
            />
            {(props.errors.login || props.errors.password) && (
              <div id="feedback">{t(`Не правильный логин или пароль`)}</div>
            )}
            <button type="submit">Отправить</button>
          </form>
        )}
      </Formik>
    </Form>
  );
};
