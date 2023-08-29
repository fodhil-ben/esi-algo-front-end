import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { AiFillStepBackward, AiFillStepForward } from 'react-icons/ai'
import { useState } from "react"

import ProblemSetSlide from "../components/ProblemSetComponents/ProblemSetSlide"
import { useQuery } from "@tanstack/react-query"
import { getTdById } from "../services/axios-utils/axiosInit"
import ProblemSetCodeEditor from "../components/ProblemSetComponents/ProblemSetCodeEditor"
import ProcessingButton from "../components/ui/ProcessingButton"

function ProblemSet() {

    const { problemSetId, exerciceId } = useParams()
    interface TdProps {
        description: string
        emd_id: number
        id: number
        input_: string
        output: string
        start_code: string
        td_id: number
        tp_id: number
    }
    const { data: tdData, isSuccess, isLoading } = useQuery<TdProps[], boolean>({
        queryKey: ['tdData', problemSetId],
        queryFn: () => getTdById(Number(problemSetId)),
        staleTime: 60000
    })
    let exercisesNumber = 1
    if (Array.isArray(tdData)) {
        exercisesNumber = tdData?.length - 1
    }
    const [selected, setSelected] = useState('problem')




    if (isLoading) {
        return <div><ProcessingButton /></div>
    }

    else if ((tdData && Number(exerciceId) > tdData?.length)) {
        return <div className="m-auto md:text-3xl">Exercice Does Not Exist!!!</div>
    }


    else if (tdData && tdData.length === 0) {
        return (<div className="m-auto md:text-3xl">Td Does Not Exist!!!</div>)
    }

    else if (isSuccess) {
        return (
            <div className="my-auto">

                <div className="flex mt-10 text-2xl md:text-4xl justify-center items-center gap-5">
                    <Link className={`${Number(exerciceId) < 1 && 'invisible'}`} to={`/problem-set/${problemSetId}/${Number(exerciceId) - 1}`}><AiFillStepBackward></AiFillStepBackward></Link>
                    <h1>TD°{problemSetId} - Exercice°{exerciceId} </h1>
                    <Link className={`${Number(exerciceId) >= exercisesNumber && 'invisible'}`} to={`/problem-set/${problemSetId}/${Number(exerciceId) + 1}`}><AiFillStepForward></AiFillStepForward></Link>
                </div>
                <div className="flex flex-col md:flex-row py-5 px-10 text-xl justify-between gap-10">
                    <div className="problemSet border-2 overflow-hidden border-black rounded-xl">
                        <div className="flex justify-between">
                            <button onClick={() => setSelected('problem')} className={`w-full p-3 ${selected === 'problem' && 'bg-black text-white'}`} >Problem</button>
                            <button onClick={() => setSelected('hint')} className={`w-full p-3 ${selected === 'hint' && 'bg-black text-white'}`} >Hint</button>
                            <button onClick={() => setSelected('solution')} className={`w-full p-3 ${selected === 'solution' && 'bg-black text-white'}`} >Solution</button>
                        </div>
                        <ProblemSetSlide selected={selected} />
                    </div>

                    <div className="problemSet border-2 overflow-hidden  border-black rounded-xl">
                        <ProblemSetCodeEditor startCode={tdData[Number(exerciceId)].start_code} input_={tdData[Number(exerciceId)].input_} output={tdData[Number(exerciceId)].output} />

                    </div>


                </div>
            </div>
        )
    }
    else {
        return <div className="m-auto md:text-3xl">Error happend try again!!!</div>
    }
}

export default ProblemSet