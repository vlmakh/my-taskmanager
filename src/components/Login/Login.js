import { Link } from 'react-router-dom';
import {
  StyledForm,
  FormTitle,
  StyledField,
  Label,
  StyledErrorMsg,
  LoginButton,
} from './Login.styled';
import { Formik } from 'formik';
import { login } from 'utils/operations';
import * as yup from 'yup';
import { useState } from 'react';
import { LoginLoader } from 'components/Loader/LoginLoader';
import { t } from 'i18next';

let schema = yup.object().shape({
  email: yup.string().email().required(),
  password: yup.string().min(6).required(),
});

export default function Login({ setToken, setIsLoggedIn }) {
  const [isProcessing, setIsProcessing] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    setIsProcessing(true);

    login(values)
      .then(data => {
        resetForm();
        setToken(data.token);
        setIsLoggedIn(true);
      })
      .catch(error => {})
      .finally(() => {
        setIsProcessing(false);
      });
  };

  return (
    <Formik
      onSubmit={handleSubmit}
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={schema}
    >
      <StyledForm>
        <FormTitle>{t('login.login')}</FormTitle>

        <p>email</p>
        <Label htmlFor="email">
          <StyledField name="email" type="text" placeholder=" "></StyledField>
          <StyledErrorMsg component="div" name="email" />
        </Label>

        <p>{t('login.pass')}</p>
        <Label htmlFor="password">
          <StyledField
            name="password"
            type="password"
            placeholder=" "
            autoComplete="off"
          ></StyledField>
          <StyledErrorMsg component="div" name="password" />
        </Label>

        <LoginButton type="submit" disabled={isProcessing}>
          {isProcessing ? `${t('buttons.wait')}` : `${t('buttons.login')}`}{' '}
          <LoginLoader isProcessing={isProcessing} />
        </LoginButton>

        <Link to="/signup">{t('login.signup')}</Link>
      </StyledForm>
    </Formik>
  );
}
