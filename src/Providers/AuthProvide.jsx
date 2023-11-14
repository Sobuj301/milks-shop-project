import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

import app from "../firebase";
import { createContext } from "react";




export const AuthContext = createContext(null)




const AuthProvide = ({children}) => {
   
    const auth = getAuth(app);

    
    const createUser = (email,password) =>{
      return createUserWithEmailAndPassword(auth,email,password)
    }

 const userInfo = {createUser,}
    

    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvide;