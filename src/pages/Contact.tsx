import { useState } from "react"
import Input from "../components/ui/Input"
import { FaSpinner, FaUser } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { AiFillCheckCircle } from "react-icons/ai"

function Contact() {
    const [isLoading] = useState(false)
    const [success, setSuccess] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')


    return (
        <div className="bg-black text-center absolute top-1/2 left-1/2 -translate-x-1/2 shadow-2xl shadow-gray-800 -translate-y-1/2 grid gap-8 text-white px-5 py-10 lg:p-16 rounded-2xl w-3/4 lg:w-2/5">
            <h1 className="bg-white shadow-xl shadow-gray-800 font-bold text-3xl text-black w-fit rounded-2xl py-3 px-10 m-auto">Contact Us</h1>
            <form className="grid gap-8">
                <Input inputType="username" inputIcon={FaUser} value={username} onchange={setUsername} placeholder="Full Name ..." name='senderFullname' />
                <Input inputType="email" inputIcon={HiOutlineMail} value={email} onchange={setEmail} placeholder="Email ..." name='senderEmail' />
                <textarea name="message" cols={10} rows={8} placeholder="How can we help you ..." className="outline-0 text-black p-5 rounded-2xl shadow-xl shadow-gray-800 " ></textarea>
                {!isLoading
                    ? success
                        ? <div onClick={() => setSuccess('')} className={`p-5 shadow-md font-bold w-fit rounded-md text-green-300 border border-green-300 flex gap-3 m-auto items-center`}>{success}<AiFillCheckCircle></AiFillCheckCircle></div>
                        : <button className="font-bold w-fit m-auto outline-0 p-5 rounded-md bg-zinc-900 text-white shadow-xl shadow-gray-800">Send Message</button>
                    : <div className="font-bold w-fit m-auto outline-0 p-5 rounded-md bg-zinc-900 text-white shadow-md">
                        <div><FaSpinner className="animate-spin h-5 w-5"></FaSpinner></div>
                    </div>
                }

            </form>
        </div>
    )
}

export default Contact