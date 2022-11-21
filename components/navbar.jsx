import React from 'react'

const Navbar = () => {
  return (
    <div className='flex justify-around'>

        <div className='w-9 h-9 border rounded-full shadow-md'></div>
        <ul className='flex justify-around items-center rounded-full border bg-white w-1/3 shadow-md'>
            <li className='hover:text-sky-500'>About</li>
            <li className='hover:text-sky-500'>Projects</li>
            <li className='hover:text-sky-500'>Page 3</li>
            <li className='hover:text-sky-500'>Page 4</li>
        </ul>

        <div className='w-9 h-9 border rounded-full shadow-md'></div>
    </div>
  )
}

export default Navbar