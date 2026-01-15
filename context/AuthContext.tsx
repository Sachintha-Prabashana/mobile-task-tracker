import { useLoader } from "@/hooks/useLoader";
import { auth } from "@/service/firebase";
import { onAuthStateChanged, User } from "firebase/auth";
import { createContext, useEffect, useState } from "react";

interface AuthContextType {
    user: User | null
    loading: boolean
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    loading: false
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const { hideLoader, isLoading, showLoader } = useLoader();
    const [user, setUser] = useState<User | null>(null);

    // backend eka listen krn innva - db eke change ekk una gmn trigger wenava
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (usr) => {
            setUser(usr);
            hideLoader();
        });
        return () => unsubscribe(); // cleanup function eka (component eka unmount wenna)
    }, []);
    return <AuthContext.Provider value={{ user, loading: isLoading }}>
        {children}
    </AuthContext.Provider>
}