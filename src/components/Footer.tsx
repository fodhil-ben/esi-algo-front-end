import { AiFillHeart } from "react-icons/ai"
import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="bg-black text-white py-3 mt-auto flex justify-center gap-10 tracking-wider font-bold">
            <div className="flex items-center gap-2">Made With <AiFillHeart></AiFillHeart> By Anas & Fodhil</div>
            <div>&copy; {new Date().getFullYear()} ESI ALGO</div>
            <a href="https://algo-api.onrender.com/docs" target="_blank">API</a>
            <Link to='/contact'>Contact us</Link>
        </div>
    )
}

export default Footer