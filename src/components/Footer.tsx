import { Link } from "react-router-dom"

function Footer() {
    return (
        <div className="bg-black text-white py-3 mt-auto flex justify-center gap-10">
            <div>&copy; {new Date().getFullYear()} ESI ALGO</div>
            <a href="https://algo-api.onrender.com/docs" target="_blank">API</a>
            <Link to='/contact'>Contact us</Link>
        </div>
    )
}

export default Footer