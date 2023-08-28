import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../services/axios-utils/axiosInit";
import { useState } from "react";
import { useAuthContext } from "../services/providers/AuthContext";




export const useLogin = () => {


    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const { setAuth } = useAuthContext()

    const login = async (username: string, password: string) => {
        const loginParams = new URLSearchParams()
        loginParams.append('username', username)
        loginParams.append('password', password)
        setIsLoading(true)
        setError('')
        try {
            const response = await axios.post(`${BASE_URL}/users/token`, loginParams) as AxiosResponse
            //access_token, token_type
            //set the user auth context
            console.log()
            setAuth({ user: username, token: `${response.data.token_type} ${response.data.access_token}` })
            localStorage.setItem('user', JSON.stringify({ user: username, token: `${response.data.token_type} ${response.data.access_token}` }))
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(String(JSON.parse(error.request.response).detail))
            }
            else {
                setError('Error happened try again')
            }
        } finally {
            setIsLoading(false)
        }


    }
    return { login, error, message, isLoading, setError, setMessage }
}

