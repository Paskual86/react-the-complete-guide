import classes from './ProfileForm.module.css';
import { useRef } from 'react';
import { getAuth, updatePassword } from 'firebase/auth';

import firebaseConfigApp from '../../firebaseConfig';

const ProfileForm = () => {
  const newPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const auth = getAuth(firebaseConfigApp);
    console.log(auth.currentUser);
    const newPassword = newPasswordRef.current.value;

    updatePassword(auth.currentUser, newPassword)
      .then(() => {})
      .catch((error) => {
        alert(error.message);
      });
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button>Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
