import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faPython, faJava, faSquareJs } from '@fortawesome/free-brands-svg-icons'


const SkillCard = () => {
  return (

    <div className='p-4 border-2 rounded-md'>
        <h1 className='mb-4'>Skills</h1>
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
        
    </div>
  )
}

export default SkillCard