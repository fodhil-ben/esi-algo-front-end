import { useContext } from "react"
import { AuthenticationContext } from "../services/providers/AuthContext"

export const useAuthContext = () => {
    const context = useContext(AuthenticationContext)
    if (!context) {
        throw Error('useAuthContext must be used inside an AuthContextProvider')
    }
    return context
} 