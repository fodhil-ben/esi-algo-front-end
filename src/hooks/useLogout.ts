import { useAuthContext } from "./useAuthContext"

export const useLogout = () => {

    const { setAuth } = useAuthContext()
    const logout = () => {
        setAuth({ user: '', token: '' })
        localStorage.clear()
    }
    return { logout }
}

