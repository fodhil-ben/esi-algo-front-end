import axios, { AxiosResponse } from "axios";
import { BASE_URL } from "../services/axios-utils/axiosInit";
import { useState } from "react";



export const useRegister = () => {
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<string>('')
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const register = async (username: string, password: string) => {
        setIsLoading(true)
        try {
            const response = await axios.post(`${BASE_URL}/users/create`, { username, password }) as AxiosResponse
            setMessage(`${response.data.message} Go to Login`)
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
    return { register, error, message, isLoading, setError, setMessage }
}

