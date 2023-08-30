import { FC } from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

interface AboutCardProps {
    name: string
    imgPath: string
    smallDesc: string
    links: string[]
    descreption: string
}

const AboutCard: FC<AboutCardProps> = ({ name, imgPath, smallDesc, links, descreption }) => {
    return (
        <div className='pt-10 pb-4 mt-5 border-t shadow-2xl md:w-150 px-5 md:w-1/3 tracking-wide rounded-3xl'>
            <div className='m-auto rounded-full overflow-hidden w-[200px] lg:w-[300px]'>
                <img src={imgPath} placeholder='blur' alt="PersonImage" />
            </div>
            <div className='grid gap-5 mt-5'>
                <h1 className='text-center font-bold text-3xl'>{name}</h1>
                <h2 className='text-center text-lg '>{smallDesc}</h2>
                <div className='flex justify-center gap-5 text-2xl lg:text-3xl'>
                    <a href={links[0]} target='_blank'><BsGithub></BsGithub></a>
                    <a href={links[1]} target='_blank'><BsLinkedin></BsLinkedin></a>
                    <a href='/contact'><HiOutlineMail></HiOutlineMail></a>
                </div>
            </div>
            <div className='mt-5 leading-7'>
                <div className='mt-5 leading-7' dangerouslySetInnerHTML={{ __html: descreption }} />
            </div>
        </div>
    )
}

export default AboutCard