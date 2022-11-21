import React from 'react'

const ListItem = () => {
  return (
    <div className='flex items-center my-4'>
        <div className='w-8 h-8 border-2 rounded-full mr-8'></div>
        <div className='flex-1'>
            <h1 className='text-md font-semibold'>Company</h1>
            <div className='flex justify-between'>
                <p className='text-s font-thin'>Position</p>
                <p className='text-s font-thin'>Date</p>
            </div>            
        </div>
    </div>
    
  )
}

export default ListItem