import { Link } from 'react-router-dom'
import { FiMenu } from 'react-icons/fi'
import { useState } from 'react'
import SideBar from './SideBar'
import { useLogout } from '../hooks/useLogout'
import { useAuthContext } from '../hooks/useAuthContext'

function Navbar() {

    const { logout } = useLogout()
    const [sideBar, setSideBar] = useState(false)
    const { auth } = useAuthContext()
    return (
        <>
            <div className='flex justify-between items-center p-5 md:px-10 shadow-md font-bold'>
                <div className='md:text-3xl cursor-pointer' onClick={() => setSideBar(true)}><FiMenu></FiMenu></div>
                {auth && auth.user ? <Link to='/home'>Welcome Back, Fodhil!</Link> : <Link to='/'>Welcome to ESI Algo!</Link>}
                {auth && auth.user
                    ? <button onClick={logout} className='bg-secondary-color rounded-xl p-1 px-8 text-white'><Link to='/'>Logout</Link></button>
                    : <div className='flex gap-2 md:gap-5'>
                        <Link to='/login' >Login</Link>
                        <Link to='/' className='secondray-color hidden md:block'>Get Started</Link>
                    </div>}
            </div >
            {sideBar && <SideBar setSideBar={setSideBar} />}
        </>

    )
}

export default Navbar