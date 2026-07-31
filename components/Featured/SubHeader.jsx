import React from 'react'

const SERVICES = [
  {
    title: 'Websites and App Development',
    body:
      'From idea to launch, full cycle development including frontend, backend, and deployment.',
  },
  {
    title: 'AI Automation Systems',
    body:
      'Designing and integrating AI Automation to optimize workflows, reduce manual effort, and enhance system intelligence.',
  },
  {
    title: 'UI/UX Design',
    body:
      'Minimal, clean, and user-focused interfaces aligned with modern standards.',
  },
  {
    title: 'Brand Identity',
    body:
      'Creating complete visual identities that define and elevate digital products.',
  },
]

const SubHeader = () => {
  return (
    <div className='relative md:absolute md:top-1/5 left-0 md:left-1/2 w-full md:-translate-x-1/2 md:mt-40 z-10 flex flex-col md:items-start items-center px-5 md:px-0'>
      <div className='w-full md:w-1/2 text-base md:text-2xl flex flex-col gap-3 md:gap-4 leading-relaxed md:leading-snug text-center md:text-left'>
        <p>
          Abdelrahman Elfekky is an AI Engineer and Data Analyst building real-world digital systems across web, mobile, and AI.
        </p>
        <p>
          He integrates AI Automation into every product, engineering complete ecosystems instead of standalone tools.
        </p>
      </div>

      <div className='about-inline-services w-full md:w-1/2 mt-8 md:mt-12 h-auto md:h-[36vh]'>
        <div className='about-inline-services__head'>
          <span className='about-inline-services__label'>SERVICES</span>
        </div>
        <div className='about-inline-services__grid'>
          {SERVICES.map((service) => (
            <article key={service.title} className='about-inline-services__item'>
              <h4>{service.title}</h4>
              <p>{service.body}</p>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}

export default SubHeader
