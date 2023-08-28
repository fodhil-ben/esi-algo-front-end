import { Link } from "react-router-dom"
import Input from "../components/ui/Input"
import { FaUser } from 'react-icons/fa'
import { IoMdLock } from 'react-icons/io'
import { useState } from "react"
import ProcessingButton from "../components/ui/ProcessingButton"
import { useRegister } from "../hooks/useRegister"


function Register() {
    const { register, message, error, isLoading, setError, setMessage } = useRegister()


    const handleSubmit = (e: React.FormEvent) => {
        setMessage('')
        setError('')
        e.preventDefault()
        if (username !== ' ' && password !== ' ') {
            register(username, password)
        }
    }
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    return (
        <>
            <div className="bg-black text-center absolute top-1/2 left-1/2 -translate-x-1/2 shadow-2xl shadow-gray-800 -translate-y-1/2 grid gap-8 text-white px-5 py-10 lg:p-16 rounded-2xl w-3/4 lg:w-2/5">
                <h1 className="text-2xl">Welcome to ESI Algo!</h1>
                <h3 className="lg:text-xl">Create New Account</h3>
                <form onSubmit={(e) => handleSubmit(e)} className="grid gap-8">
                    <Input inputType={'text'} name={'username'} placeholder="*Username" value={username} onchange={setUsername} inputIcon={<FaUser></FaUser>} />
                    <Input inputType={'password'} name="password" placeholder="*Password" value={password} onchange={setPassword} inputIcon={<IoMdLock></IoMdLock>} />
                    {!isLoading
                        ? <button className="rounded-xl p-2 bg-white w-fit m-auto text-black px-5 lg:text-2xl shadow-xl shadow-gray-800 hover:bg-black hover:text-white duration-500 border">Sign Up</button>
                        : <div className="rounded-xl p-2 bg-white w-fit m-auto text-black px-5 lg:text-2xl shadow-xl shadow-gray-800"><ProcessingButton /></div>
                    }            </form><div className="grid gap-2">
                    <h1>Already Have an account?</h1>
                    <div className="bg-white text-black w-fit p-2 px-5 m-auto rounded-xl font-bold hover:bg-black hover:text-white duration-500 border"><Link to='/login'>Login Here</Link></div>
                </div>
            </div>
            <div className={`bg-error py-2 px-5 md:py-5 md:px-10 absolute rounded-2xl w-fit md:text-2xl left-1/2 font-bold -translate-x-1/2 ${error ? 'top-28' : '-top-full invisible'} duration-700`}>{error}</div>
            <div className={`bg-success py-2 px-5 md:py-5 md:px-10 absolute rounded-2xl w-fit md:text-2xl left-1/2 font-bold -translate-x-1/2 ${message ? 'top-28' : '-top-full invisible'} duration-700`}>{message}</div>
        </>
    )
}

export default Register