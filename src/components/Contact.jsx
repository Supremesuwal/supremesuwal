import React, { useState } from 'react'
import RevealOnScroll from './RevealOnScroll'
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData,setFormData]=useState({
    name:"",
    email:"",
    message:""
  })
  const SERVICE_ID="service_t4ezs0a";
  const Template_id="";
  const Public_key="Lijp11W0hkLMfJfDk"

  const handleSubmit=(e)=>{
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID,Template_id,e.target,Public_key)
    .then((result)=>{
      alert("Message sent");
      setFormData({
        name:"",
        email:"",
        message:""
      })
    })
    .catch(()=>alert("something went wrong"));
  };

  return (
        <section id='contact' className='min-h-screen flex items-center justify-center py-20'>
            <RevealOnScroll>
              <div className='px-4 w-150'>
                  <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>Get In Touch</h2>
                  <form className='space-y-6'onSubmit={handleSubmit}>
                    <div className='relative'>
                        <input type="text" onChange={((e)=>setFormData({...formData,name:e.target.value}))} value={formData.name} placeholder='Enter your name' id='name' name='name' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                    </div>
                    <div className='relative'>
                        <input type="email" onChange={((e)=>setFormData({...formData,email:e.target.value}))} value={formData.email} placeholder='example@gmail.com' id='email' name='email' required className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                    </div>
                    <div className='relative'>
                        <textarea onChange={((e)=>setFormData({...formData,message:e.target.value}))} value={formData.message} placeholder=' Your Message..' id='message' name='message' rows={5} className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/5 '/>
                    </div>

                    <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]'>Send</button>
                  </form>
              </div>
            </RevealOnScroll>
        </section>
  )
}

export default Contact