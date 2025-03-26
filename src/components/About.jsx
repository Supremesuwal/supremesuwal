import React from 'react'
import RevealOnScroll from "./RevealOnScroll"

const About = () => {
    const frontend=["HTML","CSS","Javascript","React","TailwindCSS"];
    const backend=["Node.js","Express","MongoDB"]
  return (
   <section id='about' className='min-h-screen flex items-center justify-center py-20'>
    <RevealOnScroll>
    <div className='max-w-3xl mx-auto px-4'>
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'>
            About Me
            </h2>

            <div className=' rounded-xl p-8 border-white/10 border hover:-traslate-y-1 transiton-all'>
                <p className='text-gray-300 mb-6'>
                   Passionate developer with learning attitude. 
                </p>
            </div>

            <div className='grid grid-cols md:grid-cols-2 gap-6'>
                <div className='rounded-xl p-6 hover:-translate-y-1 trasnition-all'>
                    <h3 className='ext-xl font-bold mb-4'>Frontend</h3>
                    <div className='flex flex-wrap gap-2 '>
                        {frontend.map((tech,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition hover:bg-blue-500/20'>
                                    {tech}
                            </span>
                        ))}
                    </div>
                </div>
                <div className='rounded-xl p-6 hover:-translate-y-1 trasnition-all'>
                    <h3 className='ext-xl font-bold mb-4'>Backend</h3>
                    <div className='flex flex-wrap gap-2 '>
                        {backend.map((tech,key)=>(
                            <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:shadow-[0_2px_8px_rgba(59,130,224,0.2)] transition hover:bg-blue-500/20'>
                                    {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6 mt-8'>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 trasition-all'>
                            <h3 className='text-xl font-bold md-4'>Education</h3>
                            <ul className='list-disc list-inside text-gray-300'>
                                <li>
                                    <strong>B.Sc.CSIT</strong> - Tribhuvan University(2080- )
                                </li>
                                <li>
                                   Relevant Coursework: C, C++, Data Structures and Algorithm, Web Development
                                </li>
                            </ul>
                        </div>
                        <div className='p-6 rounded-xl border-white/10 border hover:-translate-y-1 trasition-all'>
                            <h3 className='text-xl font-bold md-4'>Work, Experience</h3>
                                <div className='space-y-4 text-gray-300'> 
                                    <div>
                                        <h4 className='font-semibold'>Software Engineer at MangaPanda </h4>
                                        <p>Developed and maintained web application</p>
                                    </div>
                                    <div>
                                        <h4 className='font-semibold'>Intern at Chelsea Football Club </h4>
                                        <p>Assisted in building front-end components and integration REST</p>
                                    </div>
                                </div>
                        </div>
            </div>
            
    </div>
    </RevealOnScroll>
   </section>
  )
}

export default About