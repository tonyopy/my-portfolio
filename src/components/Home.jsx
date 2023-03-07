import React from 'react'
import {MdKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'
import Omo from '../assets/my-pic.png'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl text-white font-bold'>I'm a Full Stack Developer </h2>
                <p className='text-gray-400 py-4 max-w-md'>
                    Currently , I love to work on web applications using technologies like Mongodb , Express , React ,        Node JS , Tailwind 
                </p>
                <Link to='portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                    Portfolio
                    <span className='group-hover:rotate-90 duration-300'>
                        <MdKeyboardArrowRight size={20}/>
                    </span>
                </Link>
            </div>
            <div className='items-center max-w-md justify-center h-full md:h-fit'>
                <img 
                src={Omo} 
                alt="my profile"
                className='rounded-2xl mx-auto w-2/3 md:w-fit md:ml-10'
                 />
            </div>
        </div>

    </div>
  )
}

export default Home