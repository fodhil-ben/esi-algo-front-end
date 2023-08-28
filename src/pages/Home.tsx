import { FaXmark } from 'react-icons/fa6'
import { AiOutlineCheck } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import { getProblemSets } from '../services/axios-utils/axiosInit'
import ProcessingButton from '../components/ui/ProcessingButton'


function Home() {


    const { data: problemSets, isError, isLoading, isSuccess } = useQuery<problemSetProps[], boolean>({
        queryKey: ['allTd'],
        queryFn: getProblemSets,
        staleTime: 60000
    })


    interface problemSetProps {
        id: number
        semester: string
        title: string
        topic: string
    }

    return (
        <div className="m-auto mt-1/2">
            {isLoading && <div className='text-5xl'><ProcessingButton /></div>}
            {isError && <div className='text-5xl'>Error happened Try Again!</div>}
            {isSuccess &&
                <div className='mt-20'>
                    <h1 className="text-lg text-center lg:text-5xl mb-8">List of All TD/TP/EMD</h1>
                    <div className='max-h-[50vh] table-container overflow-y-scroll relative border-2 rounded-2xl rounded-r-none border-black border-r-0'>
                        <table className="text-sm overflow-hidden lg:text-3xl shadow-2xl">
                            <thead >
                                <tr className='bg-gray-400 text-white'>
                                    <th>Semester</th>
                                    <th>TD/TP/EMD</th>
                                    <th>Topic</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {problemSets?.map((problem) => {
                                    return (<tr key={problem.id}>
                                        <td >S{problem.semester}</td>
                                        <td >{problem.title}</td>
                                        <td >{problem.topic}</td>
                                        <td >{!problem.id ? <div className='success flex justify-center items-center text-2xl md:text-4xl font-bold'><AiOutlineCheck></AiOutlineCheck></div> : <div className='error flex justify-center items-center text-2xl md:text-4xl font-bold'><FaXmark></FaXmark></div>}</td>
                                        <td className='hover:bg-gray-400 hover:text-white font-bold'><Link to={`/problem-set/${problem.id}/0`}><button> Try</button></Link></td>
                                    </tr>

                                    )
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            }
        </div >
    )
}

export default Home