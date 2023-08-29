import React, { FC } from "react"
import { GiCancel } from "react-icons/gi"
import { submitResultProps } from "../../hooks/useSubmitCode"
import ProcessingButton from "../ui/ProcessingButton"

interface ResultPopupProps {
    setSubmitCode: React.Dispatch<React.SetStateAction<boolean>>
    message: submitResultProps
}

const ResultPopup: FC<ResultPopupProps> = ({ setSubmitCode, message }) => {

    return (
        <div className="z-20 absolute left-0 flex justify-center top-0 w-full h-[1400px]  md:h-full bg-black-low-opacity">
            {Object.keys(message).length === 0
                ?
                <div className="bg-white rounded-2xl flex items-center text-3xl md:text-4xl p-10 relative font-bold mt-32 shadow-2xl z-30 opacity-100 w-2/3 md:w-1/3 h-1/2 shadow-white">
                    <ProcessingButton />
                </div>

                : message.status !== 'failure'
                    ?
                    <div className="bg-success flex flex-col gap-5 font-extrabold rounded-2xl p-10 relative justify-center items-center mt-32 text-xl md:text-4xl z-30 opacity-100 w-2/3 md:w-1/3 h-1/3 shadow-success">
                        <div>{message.message}</div>
                        <div> Status: {message.status}</div>
                        < div onClick={() => setSubmitCode(false)} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl cursor-pointer"><GiCancel></GiCancel></div>
                    </div >
                    :
                    <div className="bg-error rounded-2xl flex flex-col gap-10 p-10 relative font-bold text-xl mt-32 md:text-2xl z-30 opacity-100 w-2/3 md:w-1/3 h-fit shadow-error">
                        <div>{message.message}</div>
                        <div> Status: {message.status}</div>
                        <div>Stdin: {message.stdin}</div>
                        <div>Stdout: {message.stdout}</div >
                        <div onClick={() => setSubmitCode(false)} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl cursor-pointer"><GiCancel></GiCancel></div>
                    </div>
            }



        </div>
    )
}

export default ResultPopup