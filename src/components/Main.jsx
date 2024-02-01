import React from 'react'
import { TypeAnimation } from 'react-type-animation'
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import mainBgImg from '../assets/lineas-de-fuga.png'

const Main = () => {
    return (
        <div id="main">
            <img className='w-full h-screen object-cover object-left scale-x-[1] blur-[1px] invert brightness-150 -hue-rotate-180' src={mainBgImg} alt="unsplash" />
            <div className='w-full h-screen absolute top-0 left-0 bg-[#fff]/30'>
                <div className='max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center'>
                    <h1 className='sm:text-5xl text-4xl mb-[20px] font-bold text-gray-300 pt-[36px]'>Alejandro Forero</h1>
                    <h2 className='flex text-[14px] pt-[4px] pl-[14px] md:pl-[0px] sm:text-1xl text-gray-100'>Frontend Developer (5 years) | Full-stack Developer (1 year)</h2>
                    <h3 className='flex text-[14px] pt-[4px] pl-[14px] md:pl-[0px] sm:text-2xl text-gray-100'>
                        My main skills are
                        <TypeAnimation
                            sequence={[
                                'Javascript',
                                800,
                                'React',
                                800,
                                'Redux Tool Kit',
                                800,                            
                                'CSS',
                                800,
                                'TailWindCss',
                                800,
                                'NodeJs',
                                800,
                                'Mern Stack',
                                800,
                                'Git',
                                800
                            ]}
                            wrapper="div"
                            cursor={true}
                            speed={30}
                            style={{ fontSize: '1em', paddingLeft: '5px' }}
                            repeat={Infinity}
                        />
                    </h3>
                    <p className='mt-[25px] text-[18px] py-[4px] sm:text-2xl text-gray-100'>Contact:</p>
                    <div className='flex justify-center sm:justify-start max-w-[200px] w-full pb-[10px]'>
                        <a className='m-[0px]'
                            href="https://www.linkedin.com/in/alejoforeroforero/" target="_blank">
                            <FaLinkedinIn className='cursor-pointer invert' size={30} />
                        </a>
                        <a className=' ml-[8px]'
                            href="https://www.instagram.com/alejoforeroforero/" target="_blank">
                            <FaInstagram className='cursor-pointer invert' size={30} />
                        </a>
                    </div>
                    <div className='flex text-[14px] pt-[4px] pl-[14px] md:pl-[0px] sm:text-1xl text-gray-300'>
                        <span>Email: 
                            <a
                                href="mailto: alejoforeroforero@gmail.com"
                                className='text-gray-100 ml-[8px]'
                            >
                                alejoforeroforero@gmail.com
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main