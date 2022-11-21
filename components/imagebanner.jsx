import React from 'react'

const ImageBanner = () => {
  return (
    <div className='grid grid-cols-5 gap-16'>
        <div className='aspect-square border-2 rounded-lg -rotate-6'>Image</div>
        <div className='aspect-square border-2 rounded-lg rotate-6'>Image</div>
        <div className='aspect-square border-2 rounded-lg -rotate-6' >Image</div>
        <div className='aspect-square border-2 rounded-lg rotate-6'>Image</div>
        <div className='aspect-square border-2 rounded-lg -rotate-6'>Image</div>
    </div>
  )
}

export default ImageBanner