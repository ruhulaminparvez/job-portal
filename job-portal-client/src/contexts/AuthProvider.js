import React, { createContext } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import app from '../firebase/firebase.config';
import { useState } from 'react';
import { useEffect } from 'react';


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const logOutUser = () => {
        return signOut(auth);
    };

    useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('User Observing')
            setUser(currentUser);
       });

       return () => unsubscribe();
    }, []); 

    const authInfo = {
        createUser,
        signInUser,
        logOutUser,
        user
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;