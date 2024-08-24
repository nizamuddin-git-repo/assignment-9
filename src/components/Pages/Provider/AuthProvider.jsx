import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true)
  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password)
  }

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('use in tha state changed', currentUser)
        setUser(currentUser)
        setLoading(false);
    });
    return () =>{
        unSubscribe();
    }
}, [])

  




  const authInfo = {
    createUser,
    user
  };




  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
