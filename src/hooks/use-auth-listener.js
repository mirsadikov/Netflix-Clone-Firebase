import { useState, useEffect, useContext } from 'react';

import { FirebaseContext } from '../context/firebase';

export default function useAuthListener() {
  const [user, setUser] = useState(
    JSON.parse(localStorage.getItem('authUser'))
  );

  const { firebase } = useContext(FirebaseContext);

  useEffect(() => {
    const listener = firebase.auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        const { email, displayName, photoURL } = authUser;
        localStorage.setItem(
          'authUser',
          JSON.stringify({ email, displayName, photoURL })
        );

        localStorage.setItem('authUser-unsafe', JSON.stringify(authUser));
        setUser(authUser);
      } else {
        localStorage.removeItem('authUser');
        setUser(null);
      }
    });

    return () => listener();
  }, [firebase]);

  return { user };
}
