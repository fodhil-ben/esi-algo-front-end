import { FC, ReactNode, createContext, useContext, useEffect, useState } from "react";

interface ContextProps {
    children: ReactNode
}

interface AuthObjectType {
    user: string
    token: string
}

interface AuthContextType {
    auth: AuthObjectType
    setAuth: React.Dispatch<React.SetStateAction<AuthObjectType>>
}

export const AuthenticationContext = createContext<AuthContextType>({ auth: { user: '', token: '' }, setAuth: () => { } })

const AuthContextProvider: FC<ContextProps> = ({ children }) => {

    const [auth, setAuth] = useState<AuthObjectType>({ user: '', token: '' })

    useEffect(() => {
        const user = JSON.parse(localStorage.getItem('user') || '{}') as AuthObjectType
        setAuth(user)
    }, [])

    return (
        <AuthenticationContext.Provider value={{ auth, setAuth }}>
            {children}
        </AuthenticationContext.Provider>
    )
}


export default AuthContextProvider

export const useAuthContext = () => {
    const context = useContext(AuthenticationContext)
    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    return context
}    