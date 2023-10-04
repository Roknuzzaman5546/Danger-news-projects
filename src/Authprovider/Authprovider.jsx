import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/Firebase";

export const Authcontext = createContext(null);

const Authprovider = ({children}) => {
    const [user, setuser] = useState();

    const creatUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() =>{
        const unsubsicrbe = onAuthStateChanged(auth, (currentUser) =>{
            setuser(currentUser)
            console.log(currentUser)
        })

        return () =>{
            unsubsicrbe()
        }
    },[])
    const authInfo = {
        user,
        creatUser,
        login,
    }
    return (
        <Authcontext.Provider value={authInfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;