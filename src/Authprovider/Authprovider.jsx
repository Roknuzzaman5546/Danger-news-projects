import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const Authcontext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setuser] = useState();
    const [loading, setLoding] = useState(true)

    const creatUser = (email, password) =>{
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        setLoding(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logout = () =>{
        return signOut(auth)
    }

    useEffect(() =>{
        const unsubsicrbe = onAuthStateChanged(auth, (currentUser) =>{
            setuser(currentUser)
            console.log(currentUser)
            setLoding(false)
        })

        return () =>{
            unsubsicrbe()
        }
    },[])
    const authInfo = {
        user,
        creatUser,
        login,
        logout,
        loading,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;