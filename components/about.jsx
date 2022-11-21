import React from 'react'

const About = () => {
  return (
    <div className='border-2 flex'>
            <div className='flex-1 border-2 flex flex-col gap-4 border-blue-500'>
                <div className='flex-1 border-2 border-red-500'>
                    <div className='w-64 h-64'>Image</div>
                </div>
                <div className='flex-1 border-2 border-red-500'>
                    <ul>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                        <li>Item 1</li>
                    </ul>
                </div>
            </div>
    </div>
  )
}

export default About