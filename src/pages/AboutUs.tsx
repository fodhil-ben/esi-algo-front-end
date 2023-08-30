import AboutCard from "../components/ui/AboutCard"

const fodhilDesc = "<p>Hello There! I&apos;m Fodhil, a 19 years old Computer Science student and a dedicated Web developer whith passion in cyber security based in Algeria</p> <p>I build dynamic web applications with fully responsive front end with a scalable and efficient backend</p>"
const anasDesc = "<p>Hello There! I&apos;m Anas. I'm a CS Student,  a Flutter developer and Backend developer</p>"

function AboutUs() {
    return (
        <div>
            <h1 className="border text-white bg-black font-bold text-2xl w-fit rounded-xl mt-5 mx-auto px-8 py-4 lg:text-4xl">About Us</h1>
            <div className="flex md:gap-10 px-20 justify-center md:justify-around flex-col md:flex-row">
                <AboutCard name="Fodhil Benhiba" imgPath="./assets/FodhilPicture.webp" smallDesc="Web developer | Cyber Security enthusiast | CTF player" descreption={fodhilDesc} links={['https://github.com/fodhil-ben', 'https://www.linkedin.com/in/fodhil-benhiba/']} />
                <AboutCard name="Anas Nedjmeddine Mokhtari" imgPath="./assets/AnasPicture.jpeg" smallDesc="Flutter developer | Cyber Security enthusiast | Backend developer" descreption={anasDesc} links={['https://github.com/4nskarts', 'https://www.linkedin.com/in/anas-mokhtari/']} />
            </div>
        </div>
    )
}

export default AboutUs