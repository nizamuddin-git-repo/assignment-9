import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signOut, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, FacebookAuthProvider, TwitterAuthProvider} from "firebase/auth";
import app from "../../../firebase/firebase.config";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(true)
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const facebookProvider = new FacebookAuthProvider();
  const twiterProvider = new TwitterAuthProvider();
  console.log(user)

  const createUser = (email,password) =>{
    return createUserWithEmailAndPassword(auth,email,password);
  }
  const singInUser = (email, password) =>{
    return signInWithEmailAndPassword(auth, email, password);
}
const googleLogin = () =>{
  return signInWithPopup(auth,googleProvider);
}
const githubLogin = () =>{
  return signInWithPopup(auth,githubProvider);
}
const facebookLogin =() =>{
  return signInWithPopup(auth,facebookProvider);
  }
const twiterLogin = () =>{
  return signInWithPopup(auth, twiterProvider)
}
const logOut = () =>{
  setUser(null)
 return signOut(auth)
}

  useEffect(() =>{
    const unSubscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser)
    });
    return () =>{
        unSubscribe();
    }
}, [])

  const authInfo = {
    createUser,
    singInUser,
    googleLogin,
    githubLogin,
    facebookLogin,
    twiterLogin,
    logOut,
    user
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
