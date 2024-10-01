import React from 'react';

const Footer = () => {
  return (
    <main className="h-[25rem] bg-cyan-300 border-4 border-black  w-full flex flex-row" id="#contact">
        <div className='w-[55rem] h-[20rem] border p-7 bg-black text-white mx-10 my-5'>
            <h1 className='text-4xl font-bold mb-4'>Lets Design Together</h1>
            <p className='mb-5'>I’d love to hear about your project ideas or any opportunities to collaborate! 
                Whether you're looking to build a custom website, mobile app, 
                or just want to chat about your next big idea, feel free to reach out.
            </p>
            <form className='flex gap-1 '>
                <input type="email" placeholder='Enter Email'className='w-[40rem] rounded-lg'/>
                <button className='py-2 px-4 bg-yellow-500 rounded-lg font-bold'>Contact Me</button>
            </form>
        </div>

        <div>
            <h2>Asido Alexandar Socials</h2>
            <div>
                <p>Facebook</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkedIn</p>
            </div>
        </div>
    </main>
  );
}

export default Footer;
