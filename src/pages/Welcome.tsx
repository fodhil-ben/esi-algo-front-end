import { Link } from 'react-router-dom'

function Welcome() {

    return (
        <div className='flex px-10 md:px-20'>
            <div className='pt-36 text-center tracking-wider md:w-1/2'>
                <h1 className='text-3xl md:text-5xl main-text-color font-bold'>Welcome to ESI Algo</h1>
                <br />
                <h3 className='text-md md:text-3xl main-text-color mt-10'>Your go-to destination for mastering Data Structures and Algorithms concepts and
                    acing your exams!</h3>
                <br />

                <h3 className='text-xl md:4xl  main-text-color mt-10'>Our platform is a dedicated clone of the popular coding website
                    LeetCode.
                </h3>
                <div className='mt-10 flex justify-center gap-12 text-2xl font-bold'>
                    <Link to='/login' className='shadow-xl px-5 py-2 rounded-xl border'>Login</Link>
                    <Link to='/login' className='bg-secondary-color shadow-xl px-5 py-2 rounded-xl text-white'>Get Started</Link>
                </div>
            </div>
            <div className='self-center hidden md:block md:w-1/2'><img src={'./assets/landing.svg'} alt="landing" /></div>
        </div>
    )
}

export default Welcome