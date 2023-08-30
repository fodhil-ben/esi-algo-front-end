import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="bg-black text-white py-3 mt-auto flex-col items-center md:flex-row flex justify-center gap-4 md:gap-5 tracking-wider font-bold">
            <div className="flex items-center gap-1 md:gap-2 md:pr-5 md:border-r">Made With <AiFillHeart></AiFillHeart> By Anas & Fodhil</div>
            <div className="flex gap-4">
                <div className="">&copy; {new Date().getFullYear()} ESI ALGO</div>
                <a href="https://algo-api.onrender.com/docs" className="border-x px-5" target="_blank">API</a>
                <Link to='/contact'>Contact us</Link>
            </div>
        </div>
    )
}

export default Footer