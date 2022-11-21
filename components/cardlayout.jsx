import React from 'react'

const CardLayout = (props) => {
  return (
    <div className='p-4 border rounded-md'>
        {props.children}
    </div>
  )
}

export default CardLayout