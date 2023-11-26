import { createContext, useEffect, useState } from "react";
import { FacebookAuthProvider, GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import useAxiosPublic from "../Hooks/useAxiosPublic"

import app from "../Firebase/firebase.config";
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(true)
    const auth = getAuth(app);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    // gooogle auth provider
    const provider = new GoogleAuthProvider()

    const googleSignIn = () => {
        setLoading(true)
        return signInWithPopup(auth, provider);
    }

    // facebook auth provider 
    const fProvider = new FacebookAuthProvider();

    const facebookSignIn = () => {
        setLoading(true);
        return signInWithPopup(auth, fProvider);
    }

    //github login 
    const githubProvider = new GithubAuthProvider();
    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider);
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photoURL
        })
    }


    const logout = () => {
        setLoading(true);
        return signOut(auth);
    }




    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            // setLoading(false);
            if (currentUser?.email) {
                const userInfo = { email: currentUser.email }
                axiosPublic.post("/jwt", userInfo)
                    .then(res => {
                        console.log("jwt accuess", res);
                        setLoading(false);
                    })
            } else {
                // const userInfo = { email: currentUser.email }
                axiosPublic.get("/logout" )
                    .then(res => {
                        console.log("jwt logout", res);
                        setLoading(false);
                    })

            }
        });
        return () => {
            return unsubscribe();
        }
    }, [auth, axiosPublic])


    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        googleSignIn,
        githubLogin,
        facebookSignIn,
        updateUserProfile,
        logout

    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;