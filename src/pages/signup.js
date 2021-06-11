import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SingUp() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // check form input elements are valid
  const isInvalid = firstName === '' || password === '' || email === '';
  const handleSignUp = (event) => {
    event.preventDefault();

    //firebase work here
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((result) => {
        result.user
          .updateProfile({
            displayName: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            history.push(ROUTES.BROWSE);
          });
      })
      .catch((error) => {
        setFirstName('');
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignUp} method='POST'>
            <Form.Input
              placeholder='First name'
              type='text'
              value={firstName}
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              placeholder='Email address'
              type='email'
              value={email}
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              placeholder='Password'
              type='password'
              autoComplete='off'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={isInvalid} type='submit'>
              Sign In
            </Form.Submit>
          </Form.Base>

          <Form.Text>
            Already have an Account?{' '}
            <Form.Link to='/signin'> Sign In.</Form.Link>
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
