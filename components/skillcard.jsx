import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import CardLayout from './cardlayout'

const SkillCard = () => {
  return (
   <CardLayout>
        <div className='flex items-center gap-4 mb-4'>
            <FontAwesomeIcon icon={faCode} size='lg'/>
            <h1 className='text-s font-semibold'>
                Languages
            </h1>
        </div>
        <ul className='flex gap-4'>
          <li>
            <FontAwesomeIcon icon={faReact} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faPython} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faJava} size='2x'/>
          </li>
          <li>
            <FontAwesomeIcon icon={faSquareJs} size='2x'/>
          </li>
        </ul>
        
    </CardLayout>
  )
}

export default SkillCard