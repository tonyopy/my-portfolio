import React from 'react'
import bootstrap from '../assets/tools/logo-bootstrap.png'
import css from '../assets/tools/logo-css3.png'
import express from '../assets/tools/logo-expressjs.png'
import git from '../assets/tools/logo-git.png'
import gitlab from '../assets/tools/logo-gitlab.png'
import html from '../assets/tools/logo-html5.png'
import javascript from '../assets/tools/logo-javascript.png'
import mongodb from '../assets/tools/logo-mongodb.png'
import nodejs from '../assets/tools/logo-nodejs.png'
import postman from '../assets/tools/logo-postman.png'
import reactjs from '../assets/tools/logo-react.png'
import tailwind from '../assets/tools/tailwind.png'



const Tools = () => {

    const tools=[
        {
            id: 1,
            src: bootstrap,
            title: 'Bootstrap',
            style: 'shadow-purple-500'
        },
        {
            id: 2,
            src: css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id: 3,
            src: express,
            title: 'Express JS',
            style: 'shadow-gray-200'
        },
        {
            id: 4,
            src: git,
            title: 'Git',
            style: 'shadow-red-500'
        },
        {
            id: 5,
            src: gitlab,
            title: 'Gitlab',
            style: 'shadow-orange-500'
        },
        {
            id: 6,
            src: html,
            title: 'HTML',
            style: 'shadow-orange-300'
        },
        {
            id: 7,
            src: javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id: 8,
            src: mongodb,
            title: 'MongoDb',
            style: 'shadow-green-500'
        },
        {
            id: 9,
            src: nodejs,
            title: 'Node JS',
            style: 'shadow-green-300'
        },
        {
            id: 10,
            src: postman,
            title: 'Postman',
            style: 'shadow-orange-600'
        },
        {
            id: 11,
            src: reactjs,
            title: 'REACT',
            style: 'shadow-cyan-500'
        },
        {
            id: 13,
            src: tailwind,
            title: 'Tailwind CSS',
            style: 'shadow-cyan-300'
        },

    ]

  return (
    <div 
    name="tools"
    className='bg-gradient-to-b from-gray-800 to-black w-full '
    >
        <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
            <div className='pb-4'>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Tools</p>
                <p className='py-6'>These are technologies that I've work with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {tools.map(({id,src,title,style})=>{
                    return(
                        
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
                    )
                })}

                
            </div>
        </div>
    </div>
  )
}

export default Tools