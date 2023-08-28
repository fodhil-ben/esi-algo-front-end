import { FC } from "react"
import ProblemDescription from "./ProblemDescription"
import ProblemSetHint from "./ProblemSetHint"
import ProblemSetSolution from "./ProblemSetSolution"

interface ProblemSetSliderProps {
    selected: string
}
const ProblemSetSlide: FC<ProblemSetSliderProps> = ({ selected }) => {


    return (
        <div className="relative h-full">
            <div className={`flex h-full absolute duration-500 ${selected === 'problem' ? 'slide-1' : selected === 'hint' ? 'slide2' : 'slide3'}`} >
                <div className="p-5 problemSetChild flex-grow basis-full h-full"><ProblemDescription /></div>
                <div className="p-5 problemSetChild flex-grow basis-full h-full"><ProblemSetHint /></div>
                <div className="p-5 problemSetChild flex-grow basis-full h-full"><ProblemSetSolution /></div>
            </div>
        </div>
    )
}

export default ProblemSetSlide