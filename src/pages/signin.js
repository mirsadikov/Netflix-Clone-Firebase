import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FirebaseContext } from '../context/firebase';
import { FooterContainer } from '../containers/footer';
import { HeaderContainer } from '../containers/header';
import { Form } from '../components';
import * as ROUTES from '../constants/routes';

export default function SignIn() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // check form input elements are valid
  const isInvalid = password === '' || email === '';
  const handleSignin = (event) => {
    event.preventDefault();

    //firebase work here
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        // push to browse page
        history.push(ROUTES.BROWSE);
      })
      .catch((error) => {
        setEmail('');
        setPassword('');
        setError(error.message);
      });
  };

  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}

          <Form.Base onSubmit={handleSignin} method='POST'>
            <Form.Input
              placeholder='Email address'
              type='text'
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
            New to Netflix? <Form.Link to='/signup'>Sign Up Now.</Form.Link>
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
