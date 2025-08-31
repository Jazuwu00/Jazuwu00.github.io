import React from 'react'
const frontendTasks = [
  "Build responsive user interfaces",
  "Fix UI bugs and improve user experience",
  "Collaborate with designers and backend developers",
  "Write clean and maintainable code",
  "Learn and apply new front-end technologies",
]
function Experience() {
  return (
    <div className='relative z-20  text-white overflow-hidden  p-4 lg:px-20' id='experience'>
        <h2 className=" font-bold text-3xl mb-6  w-full border-2 rounded-3xl p-4 border-white/10 ">Experience</h2>
        <div>
            <div className='flex flex-row items-center justify-between '>
                <h1 className=' font-bold text-lg'>Khemlabs</h1>
                <span>2023 - now</span>
            </div>
            <p>Junior Front-end developer</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm text-gray-200">
          {frontendTasks.map((task, idx) => (
            <li key={idx}>{task}</li>
          ))}
        </ul>
        </div>
    </div>
  )
}

export default Experience