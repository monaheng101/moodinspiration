'use client';
import { auth } from '@/firebase';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect} from 'react'

const AuthContext = React.createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export function AuthProvider({ children }){

    // states
    const [currentUser, setCurrentUser] = useState(null)
    const [userDataObj, setUserDataObj] = useState({})
    const [loading, setLoading] = useState(true)

    // auth handlers
    function signup(email, password){
        return createUserWithEmailAndPassword(auth, email, password)
    }
    function login(email, password){
        return signInWithEmailAndPassword(auth, email, password)
    }
    function logout(){
        setUserDataObj({})
        setCurrentUser(null)
        return signOut(auth)
    }

    // listen for authentication state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async user => {
            try {

                // set user to our local context state
                setLoading(true)
                setCurrentUser(user)

                // if the user does not exist
                if(!user){
                    console.log('No user found! ')
                    return
                }

                // if user exists, fetch user data from firestore database
                console.log("Fetching user data!")
                const docRef = doc(db, 'users', user.uid)
                const docSnap = await getDoc(docRef)
                let firebaseData = {}
                if(docSnap.exists()){
                    console.log("Found user data!")
                    firebaseData = docSnap.data()
                    console.log(firebaseData)  // TEMP
                }
                setUserDataObj(firebaseData)


            } catch(err){
                console.log(err.message)
            } finally {
                setLoading(false)
            }
        })
        return unsubscribe
    },[])
    
    // contains all the globally accessible context state
    const value = {
        currentUser,
        userDataObj,
        signup,
        logout,
        login,
        loading

    }

    return (
        <AuthContext.Provider value={value}>
            { children }
        </AuthContext.Provider>
    )
}