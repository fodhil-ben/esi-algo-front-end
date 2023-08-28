import AboutCard from "../components/ui/AboutCard"

function AboutUs() {
    return (
        <div>
            <h1 className="border text-white bg-black font-bold text-2xl w-fit rounded-xl mt-5 mx-auto px-8 py-4 lg:text-4xl">About Us</h1>
            <div className="flex md:gap-10 px-20 justify-center md:justify-around flex-col md:flex-row">
                <AboutCard />
                <AboutCard />
            </div>
        </div>
    )
}

export default AboutUs