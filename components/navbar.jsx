import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-around'>
        <Link href='/' className='block'>
          <div className='w-9 h-9 border rounded-full shadow-md'></div>
        </Link>
        <ul className='flex justify-around items-center rounded-full border bg-white w-1/3 shadow-md'>
            <li className='hover:text-sky-500'>
              <Link href="/about">About</Link>
            </li>
            <li className='hover:text-sky-500'>
              <Link href="/projects">Projects</Link>
            </li>
        </ul>
        <div className='w-9 h-9 border rounded-full shadow-md'></div>
    </div>
  )
}

export default Navbar