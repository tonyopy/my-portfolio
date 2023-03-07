import React from 'react'
import capstoneFrontEnd from '../assets/portfolio/capstone-1.png'
import capstoneBackEnd from '../assets/portfolio/back-end-API.png'
import capstoneFullStack from '../assets/portfolio/capstone-3.png'


const Portfolio = () => {

  const portfolio =[
    {
      id: 1,
      src: capstoneFrontEnd,
      description: 'Front-End',
      href: 'https://tonyopyy11.github.io/webportfolio/'
      
    },
    {
      id: 2,
      src: capstoneBackEnd,
      description: 'Back-End using Postman',
      href:'https://e-commerce-dagon.onrender.com'
    },
    {
      id: 3,
      src: capstoneFullStack,
      description: 'Full-Stack using MERN',
      href: 'https://ecommerce-lilac-beta.vercel.app/'
    }
  ]

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
        <div className='pb-8'>
          <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
          <p className='py-6'>It is my previous capstone projects when i'm in bootcamp</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

          {
            portfolio.map(({id,src,description})=>{
              return(
                <div key={id} className='shadow-md shadow-gray-500 rounded-lg'>
                <img src={src} alt="" className='rounded-md duration-200 hover:scale-105' />
                <div className='flex items-center justify-center'>
                  <p className='ml-5'>{description}</p>
                   <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Link</button>
  
                </div>
              </div>
              )
            })
          }
           
        </div>
      </div>
    </div>
  )
}

export default Portfolio