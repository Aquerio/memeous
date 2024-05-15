import { createContext, useContext, useEffect, useState } from 'react';
import { app } from '../firebase/firebase';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

    const [user, setUser] = useState(null)

    const auth = getAuth(app)


const createUser = (email, password) => {

  return createUserWithEmailAndPassword(auth, email, password)
  
}

const logIn = (email, password) => {

    return signInWithEmailAndPassword(auth, email, password)
    
  }

  const logOut = () => {

    return signOut(auth)
  }

  useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, currentUser => {

        setUser(currentUser)
    })
    return () => {

        unSubscribe()
    }
  },[])


  

  return (
    <AuthContext.Provider value={{ user, setUser, createUser, logIn, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};