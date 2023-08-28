import { FC, ReactNode, useState } from "react"
import { BiHide } from "react-icons/bi"


interface InputFieldProps {
    inputType: string
    inputIcon: ReactNode
    placeholder: string
    name: string
    value: string
    onchange: React.Dispatch<React.SetStateAction<string>>
}


const Input: FC<InputFieldProps> = ({ inputType, inputIcon, placeholder, name, value, onchange }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <div className="bg-white text-black flex items-center overflow-hidden h-fit rounded-2xl px-3 shadow-xl shadow-gray-800">
            <div className="text-xl md:text-2xl">{inputIcon}</div>
            <input required value={value} onChange={(e) => onchange(e.target.value)} type={(inputType === 'password' && !showPassword) ? 'password' : inputType} name={name} className="h-full  p-3 flex-grow w-full" placeholder={placeholder} />
            <div onClick={() => setShowPassword(!showPassword)} className="text-black text-xl md:text-2xl cursor-pointer">{inputType === 'password' && <BiHide></BiHide>}</div>
        </div>
    )
}

export default Input