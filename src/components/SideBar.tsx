import { BiLogIn } from 'react-icons/bi'
import { MdOutlineEditNote } from 'react-icons/md'
import { GiCancel } from 'react-icons/gi'
import { Link } from 'react-router-dom'
import { FC, } from 'react'
import { RxExit } from 'react-icons/rx'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import { useAuthContext } from '../hooks/useAuthContext'

interface SideBarProps {
    setSideBar: React.Dispatch<React.SetStateAction<boolean>>
}



const SideBar: FC<SideBarProps> = ({ setSideBar }) => {

    const { auth } = useAuthContext();

    return (
        <div className=' z-10'>
            <div className="w-full lg:w-1/6 h-full bg-white absolute top-0 left-0 sideBarShadow">
                <div className="bg-secondary-color p-5 flex h-1/5 text-white justify-between">
                    <div className='grid gap-3'>
                        <div className='bg-white text-black w-20 h-20 rounded-full text-4xl flex items-center justify-center'>A</div>
                        <div>
                            <div>{auth ? auth.user : 'Account Name'}</div>
                            <div>Problems Solved: ?</div>
                        </div>
                    </div>
                    <div onClick={() => setSideBar(false)} className='text-4xl cursor-pointer'>
                        <GiCancel ></GiCancel>
                    </div>
                </div>
                <div >


                    {!auth.user
                        ?
                        <>
                            <Link onClick={() => setSideBar(false)} to='/login'><div className='flex px-5 py-3 justify-start items-center gap-5 my-5 hover:bg-gray-100'><div className='text-2xl'><BiLogIn></BiLogIn></div> Login</div></Link>
                            <Link onClick={() => setSideBar(false)} to='/about'><div className='flex px-5 py-3 justify-start items-center gap-5 hover:bg-gray-100'><div className='text-2xl'><MdOutlineEditNote></MdOutlineEditNote></div> About Us</div></Link>
                        </>
                        : <>
                            <Link to='/' onClick={() => setSideBar(false)}><div className='flex px-5 py-3 justify-start items-center gap-5 my-5 hover:bg-gray-100'><div className='text-2xl'><RxExit></RxExit></div> Logout</div></Link>
                            <Link to='/about' onClick={() => setSideBar(false)}><div className='flex px-5 py-3 justify-start items-center gap-5 hover:bg-gray-100'><div className='text-2xl'><AiOutlineInfoCircle></AiOutlineInfoCircle></div>About Us</div></Link>
                        </>}
                </div>
            </div>
            <div onClick={() => setSideBar(false)} className="absolute bg-black top-0 opacity-50 h-full right-0 text-white lg:w-5/6">

            </div>
        </div >
    )
}

export default SideBar