import axios, { AxiosResponse } from "axios"
import { useState } from "react"
import { BASE_URL } from "../services/axios-utils/axiosInit"

export interface submitResultProps {
    message?: string
    status?: string
    stdin?: string
    stdout?: string
}


export const useSubmitCode = () => {
    const [error, setError] = useState<string>('')
    const [message, setMessage] = useState<submitResultProps>({})
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const submit = async (code: string, input_: string, output: string) => {
        setIsLoading(true)
        setError('')
        setMessage({})
        try {
            const response = await axios.post(`${BASE_URL}/code/handle-sumbit`, { code, input_, output }) as AxiosResponse
            setMessage(response.data)
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
    return { submit, error, message, isLoading, setError, setMessage, setIsLoading }

}





// program SortSinglyLinkedList; \n\nuses\n\nsinglyUtil; \n\nprocedure sortSinglyLinkedList(var head: ListNode); \n\nbegin\n\n// TODO: Implement sorting logic here\n\nwriteln('hello world');\nend;\n\nvar\nmyList: ListNode;\nbegin\nmyList := convertLineToLL('{}');\nsortSinglyLinkedList(myList);\nprintLinkedList(myList);\n freeLinkedList(myList);\nend.\n