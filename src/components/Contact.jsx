
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Swal from 'sweetalert2'

const Contact = () => {

    const[name, setName]= useState('')
    const[email, setEmail]= useState('')
    const[text, setText]= useState('')

    const Alert =()=>{
        Swal.fire({
            icon: 'success',
            title: 'Thank you for messaging me',
            text: 'I will contact you as i read the email'
        })

    }


const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    
       
    emailjs.sendForm('service_xy1ev7g', 'template_2oqug6k', form.current, 'Ie0tqetrPLl9jH-Em')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setName('')
      setEmail('')
      setText('')
    };
  return (
    <div name='contact' className='w-full h-fit bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500' >Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>
            <div className='flex justify-center items-center'>
                <form action="" ref={form} onSubmit={sendEmail} className='flex flex-col'>
                    <input 
                    type="text" 
                    name="user_name" 
                    value= {name}
                    onChange ={e => setName(e.target.value)} 
                    placeholder='Enter your name' 
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <input 
                    type="text" 
                    name="user_email" 
                    value= {email}
                    onChange ={e => setEmail(e.target.value)} 
                    placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />
                    <textarea 
                    name="message" 
                    placeholder='Enter your message'
                    value= {text}
                    onChange ={e => setText(e.target.value)} 
                    id="" 
                    cols='40'
                    rows="10"
                    className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                    
                    ></textarea>

                    <button type="submit" value="Send"
                    onClick={Alert}
                    className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 my-4 mx-auto flex items-center rounded-md hover:scale-105 duration-300'>Send</button>


                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact