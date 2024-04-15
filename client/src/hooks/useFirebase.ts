import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuth from "./../firebase/firebase.init";

initializeAuth();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const singnInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        setUser(result.user);
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const logout = () => {
    signOut(auth).then(() => {
      setUser({});
    });
  };

  useEffect(() => {
    let unsubscribed: () => void | undefined;
    try {
      unsubscribed = onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user);
        } else {
          setUser({});
        }
      });
    } catch (e) {
      console.log(e);
    }
    return () => {
      if (unsubscribed) {
        unsubscribed();
      }
    };
  }, []);

  return {
    user,
    error,
    logout,
    singnInWithGoogle,
  };
};

export default useFirebase;
