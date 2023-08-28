import { useQuery } from "@tanstack/react-query"
import { getTdById } from "../../services/axios-utils/axiosInit"
import { useParams } from "react-router"

function ProblemDescription() {

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
    const { problemSetId, exerciceId } = useParams()
    const { data: tdData, isSuccess } = useQuery<TdProps[], boolean>({
        queryKey: ['tdData', problemSetId],
        queryFn: () => getTdById(Number(problemSetId)),
        staleTime: 60000
    })
    let data: string = ''
    const wordBold = ['Problem:', 'Description:', 'Input:', 'Output:', 'Explanation:', 'Note:']
    if (isSuccess && Array.isArray(tdData)) {
        data = tdData[Number(exerciceId)].description.startsWith('**') ? tdData[Number(exerciceId)].description.substring(2) : tdData[Number(exerciceId)].description
        data = data.replaceAll('**', '</br>')
        data = data.replace(/```([\s\S]*?)```/g, '</br><span class="text-white bg-[#424242]">$1</span></br>')
        wordBold.forEach(word => {
            const regex = new RegExp(`\\b${word}`)
            data = data.replace(regex, `<span class='font-bold md:text-2xl'>${word}</span>`)
        })
    }

    return (
        <>
            {isSuccess && data &&
                <>
                    <div className="break-words " dangerouslySetInnerHTML={{ __html: data }} />
                </>
            }
        </>
    )
}

export default ProblemDescription