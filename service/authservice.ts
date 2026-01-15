import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth"
import { auth, db } from "./firebase"
import { setDoc, doc } from "firebase/firestore"
import AsyncStorage from "@react-native-async-storage/async-storage"

export const login = async (
    email: string, 
    password: string
) => {
    await signInWithEmailAndPassword(auth, email, password)
}

export const register = async (
    name: string, 
    email: string, 
    password: string
) => { 
    const userCred = await createUserWithEmailAndPassword(auth, email, password) 
    // additional save krnn puluvn me deka witarai
    await updateProfile(userCred.user, {
        displayName: name,
        photoURL: ""
    })

    // role - save in fireStore database
    setDoc(doc(db, "users", userCred.user.uid), {
        name, // name: name
        role: "",
        email,
        createdAt: new Date()
    })
    return userCred.user
}

export const logout = async () => {
    await signOut(auth)
    AsyncStorage.clear()
    return
}