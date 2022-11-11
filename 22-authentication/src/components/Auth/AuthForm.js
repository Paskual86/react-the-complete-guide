import { useState, useRef, useContext } from 'react';

import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from 'firebase/auth';

import classes from './AuthForm.module.css';
import { AuthContext } from '../../store/auth-context';
import { useHistory } from 'react-router-dom';
import firebaseConfigApp from '../../firebaseConfig';

const AuthForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const ctx = useContext(AuthContext);
  const history = useHistory();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const auth = getAuth(firebaseConfigApp);

  const submitHandler = (event) => {
    event.preventDefault();
    setIsLoading(true);
    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      signInWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          console.log(userCredential._tokenResponse);
          ctx.login(userCredential._tokenResponse.idToken);
        })
        .catch((error) => {
          let errorMessage = 'Authentication failed!!!';
          if (error && error.message) {
            errorMessage = error.message;
          }
          alert(errorMessage);
        })
        .finally(() => {
          setIsLoading(false);
        });
    } else {
      createUserWithEmailAndPassword(auth, enteredEmail, enteredPassword)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          ctx.login(userCredential._tokenResponse.idToken);
          history.replace('/');
        })
        .catch((error) => {
          //const errorCode = error.code;
          let errorMessage = 'Authentication failed!!!';
          if (error && error.message) {
            errorMessage = error.message;
          }
          alert(errorMessage);

          // ..
        })
        .finally((f) => {
          setIsLoading(false);
        });
    }
  };

  return (
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailInputRef} required />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            id="password"
            ref={passwordInputRef}
            required
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && (
            <button type="submit">
              {isLogin ? 'Login' : 'Create Account'}
            </button>
          )}
          {isLoading && <p>Request is sending...</p>}

          <button
            type="button"
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
  );
};

export default AuthForm;
