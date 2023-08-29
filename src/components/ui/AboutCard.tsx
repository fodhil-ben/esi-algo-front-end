import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

function AboutCard() {
    return (
        <div className='pt-10 pb-4 mt-5 border-t shadow-2xl md:w-150 px-5 md:w-1/3 tracking-wide rounded-3xl'>
            <div className='m-auto rounded-full overflow-hidden w-[200px] lg:w-[300px]'>
                <img src={'./assets/MyPicture.webp'} alt="FodhilImage" />
            </div>
            <div className='grid gap-5 mt-5'>
                <h1 className='text-center font-bold text-3xl'>Fodhil Benhiba</h1>
                <h2 className='text-center text-lg '>Web developer | Cyber Security enthusiast | CTF player</h2>
                <div className='flex justify-center gap-5 text-2xl lg:text-3xl'>
                    <a href='https://github.com/fodhil-ben' target='_blank'><BsGithub></BsGithub></a>
                    <a href='https://www.linkedin.com/in/fodhil-benhiba-446623276/' target='_blank'><BsLinkedin></BsLinkedin></a>
                    <a href='/contact'><HiOutlineMail></HiOutlineMail></a>
                </div>
            </div>
            <div className='mt-5 leading-7'>
                <p>
                    Hello There! I&apos;m Fodhil, a 19 years old Computer Science student and a dedicated Web
                    developer whith passion in cyber security based in Algeria
                </p>
                <p>I build dynamic web applications with fully responsive front end with a scalable and efficient backend </p>
            </div>
        </div>
    )
}

export default AboutCard