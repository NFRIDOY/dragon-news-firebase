import { Children, createContext, useState } from "react"

export const AuthContext = createContext()

export default function AuthProvider() {

    const [user, setUser] = useState(null)

    const AuthInfo = {
        user
    }

    return (
        <>
            <AuthContext.Provider value={AuthInfo}>
                {Children}
            </AuthContext.Provider>
        </>
    )
}
