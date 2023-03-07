import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg lg:ml-12 p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>About</p>
            </div>
            <p className='text-5xl mt-20 w-full'>
                Hi!, my name is Mark Anthony.
               
            </p>
            <div className='text-2xl mt-4 text-gray-400'>
            I'm a Web Developers who works on implementing visual designs and layouts, integrating graphics and content, optimizing website performance and capacity, and testing to ensure solid performance across any type of computer, mobile or device screen.
            </div>
            <br />
            <p className='text-xl'>
            I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.
            </p>
        </div>

    </div>
  )
}

export default About