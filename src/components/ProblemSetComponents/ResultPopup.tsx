import React, { FC } from "react"
import { GiCancel } from "react-icons/gi"

interface ResultPopupProps {
    code: string
    setSubmitCode: React.Dispatch<React.SetStateAction<boolean>>
}

const ResultPopup: FC<ResultPopupProps> = ({ code, setSubmitCode }) => {
    return (
        <div className="z-20 absolute left-0 flex justify-center top-0 w-full h-[1400px] md:h-full bg-black-low-opacity">

            {code
                ?
                <div className="bg-success rounded-2xl p-10 relative font-bold mt-32 text-xl md:text-2xl z-30 opacity-100 w-2/3 md:w-1/3 h-1/2 sha shadow-success">
                    gg you did it!
                    <div onClick={() => setSubmitCode(false)} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl cursor-pointer"><GiCancel></GiCancel></div>
                </div>
                :
                <div className="bg-error rounded-2xl p-10 relative font-bold text-xl mt-32 md:text-2xl z-30 opacity-100 w-2/3 md:w-1/3 h-1/2 sha shadow-error">
                    gg you did it!
                    <div onClick={() => setSubmitCode(false)} className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 text-5xl md:text-6xl cursor-pointer"><GiCancel></GiCancel></div>
                </div>

            }


        </div>
    )
}

export default ResultPopup